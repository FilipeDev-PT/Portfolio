import { useId, useState, type FormEvent } from 'react'
import { Loader2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input, Textarea } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { site } from '@/data/content'
import { track } from '@/lib/analytics'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const { t } = useTranslation()
  const formId = useId()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')

  const nameErrorId = `${formId}-name-error`
  const emailErrorId = `${formId}-email-error`
  const messageErrorId = `${formId}-message-error`
  const formStatusId = `${formId}-status`

  function validate(): FormErrors {
    const next: FormErrors = {}
    if (name.trim().length < 2) next.name = t('contact.errorName')
    if (!EMAIL_PATTERN.test(email.trim())) next.email = t('contact.errorEmail')
    if (message.trim().length < 10) next.message = t('contact.errorMessage')
    return next
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      const first = document.getElementById(
        nextErrors.name ? `${formId}-name` : nextErrors.email ? `${formId}-email` : `${formId}-message`,
      )
      first?.focus()
      return
    }

    setStatus('pending')
    await new Promise((resolve) => setTimeout(resolve, 400))

    const subject = `Portfolio — ${name.trim()}`
    const body = `${message.trim()}\n\n— ${name.trim()} (${email.trim()})`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    track('contact_submit')
    setStatus('success')
    toast.success(t('contact.formSuccess', { email: site.email }))
  }

  const pending = status === 'pending'

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div
        id={formStatusId}
        role="status"
        aria-live="polite"
        className="text-sm text-foreground"
      >
        {status === 'error' ? t('contact.formErrorGeneric') : null}
        {status === 'success' ? t('contact.formSuccess', { email: site.email }) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${formId}-name`}>
          {t('contact.formName')}
          <span className="ml-2 font-normal text-muted-foreground">({t('contact.formRequired')})</span>
        </Label>
        <Input
          id={`${formId}-name`}
          name="name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t('contact.formNamePlaceholder')}
          required
          aria-required="true"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? nameErrorId : undefined}
          disabled={pending}
        />
        {errors.name ? (
          <p id={nameErrorId} role="alert" className="flex items-start gap-2 text-sm text-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${formId}-email`}>
          {t('contact.formEmail')}
          <span className="ml-2 font-normal text-muted-foreground">({t('contact.formRequired')})</span>
        </Label>
        <Input
          id={`${formId}-email`}
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('contact.formEmailPlaceholder')}
          required
          aria-required="true"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? emailErrorId : undefined}
          disabled={pending}
        />
        {errors.email ? (
          <p id={emailErrorId} role="alert" className="flex items-start gap-2 text-sm text-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor={`${formId}-message`}>
          {t('contact.formMessage')}
          <span className="ml-2 font-normal text-muted-foreground">({t('contact.formRequired')})</span>
        </Label>
        <Textarea
          id={`${formId}-message`}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t('contact.formMessagePlaceholder')}
          required
          aria-required="true"
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? messageErrorId : undefined}
          disabled={pending}
        />
        {errors.message ? (
          <p id={messageErrorId} role="alert" className="flex items-start gap-2 text-sm text-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden />
            {errors.message}
          </p>
        ) : null}
      </div>

      <Button type="submit" disabled={pending} className="self-start">
        {pending ? (
          <>
            <Loader2 className="animate-spin" />
            {t('contact.formSending')}
          </>
        ) : (
          t('contact.formSubmit')
        )}
      </Button>
    </form>
  )
}
