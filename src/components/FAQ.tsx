import React from 'react'
import { Section } from './ui/Section'
import type { FAQItem } from '@/types'

const faqs: FAQItem[] = [
  {
    question: 'Is Pawstify free during demo?',
    answer: 'Yes. Demo testers get full access for free during the beta phase.',
  },
  {
    question: 'Why do I need to provide Gmail?',
    answer: 'We require Gmail addresses to securely add you as a tester in Google Play Console.',
  },
  {
    question: 'What devices are supported?',
    answer: 'Currently, Pawstify supports Android devices running version 7.0 or higher. iOS support is coming soon.',
  },
  {
    question: 'Is my data safe?',
    answer: 'Yes, your data is encrypted and stored securely. We never share your information with third parties.',
  },
]

export function FAQ() {
  return (
    <Section id="faq" background="white" containerSize="narrow">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details 
            key={index}
            className="p-6 md:p-8 border border-gray-200 rounded-2xl hover:shadow-md hover:border-orange-200 transition-all duration-300 group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <summary className="font-semibold text-lg cursor-pointer text-gray-900 list-none flex items-center justify-between hover:text-orange-600 transition-colors duration-200">
              <span>{faq.question}</span>
              <span className="text-orange-500 group-open:rotate-180 transition-transform duration-200 ml-4 text-xl">
                ▼
              </span>
            </summary>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  )
}

