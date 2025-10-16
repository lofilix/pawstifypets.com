import React from 'react'
// import Image from 'next/image' // Temporarily disabled for functionality
import { Section } from './ui/Section'

const solutions = [
  {
    icon: '📋',
    title: 'Digital Vaccination Cards',
    description: 'No more lost papers — keep every record organized digitally.',
  },
  {
    icon: '🔔',
    title: 'Smart Health Reminders',
    description: 'Receive timely alerts for vaccinations, meds, and vet visits.',
  },
  {
    icon: '💊',
    title: 'Digital Prescriptions',
    description: 'Keep vet notes and medication info easily accessible.',
  },
]

export function Solution() {
  return (
    <Section id="solution" background="orange">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        How Pawstify Helps
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div 
            key={index} 
            className="p-6 md:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md text-center card-hover h-full flex flex-col group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex-shrink-0 mb-6">
              <div className="text-6xl group-hover:scale-110 transition-transform duration-300" role="img" aria-label={solution.title}>
                {solution.icon}
              </div>
            </div>
            <div className="flex-grow flex flex-col">
              <h3 className="font-semibold text-lg md:text-xl mb-3 text-gray-900 mt-4 group-hover:text-orange-600 transition-colors duration-300">
                {solution.title}
              </h3>
              <p className="text-gray-700 leading-relaxed flex-grow mt-3">
                {solution.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

