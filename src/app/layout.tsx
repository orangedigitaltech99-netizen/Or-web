import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Orange Digital Tech - Web Design & Digital Marketing',
  description: 'We Design. We Market. We Grow. Professional web design and digital marketing services to help your business thrive online.',
  keywords: 'web design, digital marketing, branding, SEO, Orange Digital Tech',
  authors: [{ name: 'Orange Digital Tech' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
