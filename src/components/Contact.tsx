import { useState, type FormEvent } from 'react'
import { Linkedin, Mail, MessageCircle } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const WHATSAPP_URL =
  'https://wa.me/525571986833?text=Hello%20RUQAYA%2C%20I%20would%20like%20to%20inquire%20about%20your%20circular%20economy%20and%20waste%20management%20services.'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY = 'ddac7632-be2c-4716-bec7-9ab9708b5435'

export function Contact() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError(t.contact.errorRequired)
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t.contact.errorEmail)
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: `RUQAYA Inquiry from ${name.trim()}`,
          from_name: 'RUQAYA Portfolio',
        }),
      })

      const data = (await response.json()) as { success?: boolean; message?: string }

      if (!response.ok || !data.success) {
        setError(data.message || t.contact.submitError)
        return
      }

      setSuccess(t.contact.success)
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setError(t.contact.submitError)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#F8F7F4] border-b border-black/10"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="mb-10">
          <div className="label-mono mb-2">{t.contact.eyebrow}</div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#1A1A1A] tracking-[-0.02em] font-normal">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base text-[#1A1A1A]/75 font-light">
            {t.contact.subtitle}
          </p>
          <p className="mt-1 text-sm font-mono text-[#B8860B]">{t.contact.regions}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-5 space-y-3">
            <a
              href="mailto:hammadhu@gmail.com"
              className="flex items-start gap-3 p-4 bg-white border border-black/10 hover:border-black/30 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#B8860B] mt-0.5 shrink-0" />
              <div>
                <div className="label-mono mb-1">{t.contact.emailLabel}</div>
                <div className="text-sm text-[#1A1A1A]">hammadhu@gmail.com</div>
              </div>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-4 bg-white border border-black/10 hover:border-black/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#B8860B] mt-0.5 shrink-0" />
              <div>
                <div className="label-mono mb-1">{t.contact.whatsappLabel}</div>
                <div className="text-sm text-[#1A1A1A]">+52 5571986833</div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/hammadhu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-4 bg-white border border-black/10 hover:border-black/30 transition-colors"
            >
              <Linkedin className="w-4 h-4 text-[#B8860B] mt-0.5 shrink-0" />
              <div>
                <div className="label-mono mb-1">{t.contact.linkedinLabel}</div>
                <div className="text-sm text-[#1A1A1A]">{t.contact.linkedinText}</div>
              </div>
            </a>
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-7 space-y-4" noValidate>
            <div>
              <label className="label-mono block mb-2">{t.contact.nameLabel}</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contact.namePlaceholder}
                required
                className="w-full bg-white border border-black/15 px-4 py-3 text-sm font-light focus:outline-none focus:border-black/40"
              />
            </div>
            <div>
              <label className="label-mono block mb-2">{t.contact.emailFieldLabel}</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.contact.emailPlaceholder}
                required
                className="w-full bg-white border border-black/15 px-4 py-3 text-sm font-light focus:outline-none focus:border-black/40"
              />
            </div>
            <div>
              <label className="label-mono block mb-2">{t.contact.messageLabel}</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.contact.messagePlaceholder}
                rows={5}
                required
                className="w-full bg-white border border-black/15 px-4 py-3 text-sm font-light focus:outline-none focus:border-black/40 resize-y"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 font-light" role="alert">
                {error}
              </p>
            )}
            {success && (
              <p className="text-sm text-[#135D29] font-light" role="status">
                {success}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-black/20 font-mono text-xs uppercase tracking-[0.08em] px-5 py-3.5 hover:border-black/40 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                {t.contact.whatsappCta}
              </a>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center bg-[#1A1A1A] text-[#F8F7F4] font-mono text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-[#B8860B] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? t.contact.sending : t.contact.send}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
