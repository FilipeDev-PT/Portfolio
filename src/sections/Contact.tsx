import { useTranslation } from 'react-i18next'
import { ContactForm } from '@/components/ContactForm'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { SectionKicker } from '@/components/SectionKicker'
import { site } from '@/data/content'
import { track } from '@/lib/analytics'

export function Contact() {
  const { t } = useTranslation()

  return (
    <Section id="contact" className="bg-muted/60">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionKicker index="05">{t('contact.kicker')}</SectionKicker>
            <h2 className="font-serif text-h2 font-medium text-foreground">{t('contact.title')}</h2>
            <p className="mt-4 max-w-md text-muted-foreground">{t('contact.subtitle')}</p>
          </Reveal>

          <div className="mt-10">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-muted-foreground">
              {t('contact.elsewhere')}
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-foreground">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="underline-offset-4 hover:underline"
                  onClick={() => track('email_click', { source: 'contact' })}
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                  onClick={() => track('linkedin_click')}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-border bg-card p-6 sm:p-8 lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </Section>
  )
}
