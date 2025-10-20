import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AnimationProvider } from '@/components/AnimationProvider'
import { Analytics } from '@vercel/analytics/next'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pawstifypets.com'),
  title: 'Pawstify — Pet Health Tracker & Vaccination Reminder App',
  description: 'Join Pawstify\'s demo and simplify pet care. Track vaccinations, prescriptions, and reminders in one app.',
  keywords: ['pet health app', 'vaccination reminder', 'pet care management', 'digital pet records', 'multi-pet health tracker'],
  authors: [{ name: 'Pawstify' }],
  creator: 'Pawstify',
  publisher: 'Pawstify',
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Pawstify',
    title: 'Pawstify — Pet Health Tracker App',
    description: 'Join the demo and simplify your pet care routine.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pawstify Pet Health Management App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pawstify — Pet Health Tracker App',
    description: 'Join the demo and simplify your pet care routine.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#FB923C" />
      </head>
      <body className="font-sans">
        <AnimationProvider>
          {children}
        </AnimationProvider>
        <Analytics />
      </body>
    </html>
  )
}

