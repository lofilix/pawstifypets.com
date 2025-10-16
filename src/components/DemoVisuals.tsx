import React from 'react'
// import Image from 'next/image' // Temporarily disabled for functionality
import { Section } from './ui/Section'

const screenshots = [
  {
    src: '/images/journalpage.png',
    alt: 'Pawstify journal page showing pet health tracking and daily routine management',
  },
  {
    src: '/images/healthdashboard.png',
    alt: 'Pawstify health dashboard displaying comprehensive pet health overview and vaccination tracking',
  },
  {
    src: '/images/FetchDemo.png',
    alt: 'Pawstify demo interface showcasing pet health management features and user experience',
  },
]

export function DemoVisuals() {
  return (
    <Section id="demo" background="white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        A Sneak Peek of Pawstify
      </h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {screenshots.map((screenshot, index) => (
          <div 
            key={index}
            className="group"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative image-frame">
                <img 
                  src={screenshot.src} 
                  alt={screenshot.alt}
                  className="rounded-xl w-72 shadow-sm group-hover:shadow-md transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

