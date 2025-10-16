import React from 'react'
import { Section } from './ui/Section'

const problems = [
  {
    icon: '📋',
    title: 'Scattered vaccination records',
    description: 'Pet health info spread across papers and phones is hard to manage.',
  },
  {
    icon: '💊',
    title: 'Forgotten medications',
    description: 'Never miss a dose or vet visit again with smart reminders.',
  },
  {
    icon: '🐾',
    title: 'Multiple pets, one app',
    description: 'Manage all your pets\' health needs from a single dashboard.',
  },
]

export function Problem() {
  return (
    <Section id="problem" background="white">
      <h2 
        className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-in-bottom"
        data-animate="animate-slide-in-bottom"
      >
        Why Pawstify Exists
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((problem, index) => (
          <div
            key={index}
            className={`space-y-4 text-center p-6 md:p-8 rounded-2xl hover:bg-orange-50 transition-all duration-300 group hover-lift animate-slide-in-bottom stagger-${index + 1}`}
            data-animate="animate-slide-in-bottom"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-6xl group-hover:scale-110 transition-transform duration-300 hover-bounce-gentle" role="img" aria-label={problem.title}>
              {problem.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mt-4">
              {problem.title}
            </h3>
            <p className="text-gray-700 leading-relaxed mt-3">
              {problem.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

