export type PortfolioEvent =
  | 'project_view'
  | 'case_open'
  | 'contact_cta_click'
  | 'contact_submit'
  | 'email_click'
  | 'linkedin_click'

declare global {
  interface Window {
    gtag?: (command: 'event', event: string, params?: Record<string, string>) => void
  }
}

export function track(event: PortfolioEvent, params?: Record<string, string>) {
  if (typeof window === 'undefined') return
  window.gtag?.('event', event, params)
}
