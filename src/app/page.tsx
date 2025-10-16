import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Problem } from '@/components/Problem'
import { Solution } from '@/components/Solution'
import { DemoVisuals } from '@/components/DemoVisuals'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { FinalCTA } from '@/components/FinalCTA'
import { Footer } from '@/components/Footer'

// JSON-LD Structured Data for SEO
function StructuredData() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is Pawstify free during demo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Demo testers get full access for free during the beta phase.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do I need to provide Gmail?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We require Gmail addresses to securely add you as a tester in Google Play Console.',
        },
      },
      {
        '@type': 'Question',
        name: 'What devices are supported?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Currently, Pawstify supports Android devices running version 7.0 or higher. iOS support is coming soon.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my data safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, your data is encrypted and stored securely. We never share your information with third parties.',
        },
      },
    ],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pawstify',
    description: 'Pet Health Management software for digital vaccination cards, prescriptions, and reminders',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://pawstifypets.com',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://pawstifypets.com'}/images/logo.png`,
    sameAs: [],
  }

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Pawstify',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.5',
      ratingCount: '10',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
    </>
  )
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <DemoVisuals />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  )
}

