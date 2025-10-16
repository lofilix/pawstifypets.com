import React from 'react'
import { Section } from './ui/Section'

const testimonials = [
  {
    quote: 'Managing 4 rescue dogs\' health records is finally easy!',
    author: 'Maria',
    role: 'Pet Shelter Owner',
  },
  {
    quote: 'Our clinic loves the reminder system. It helps clients stay consistent.',
    author: 'Dr. Reyes',
    role: 'Vet Partner',
  },
]

export function Testimonials() {
  return (
    <Section id="testimonials" background="orange">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What Early Testers Are Saying
      </h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <blockquote 
            key={index}
            className="p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <footer className="text-base text-gray-900 font-medium mt-4">
                <strong>{testimonial.author}</strong>, {testimonial.role}
              </footer>
            </div>
          </blockquote>
        ))}
      </div>
      <p className="text-sm md:text-base text-gray-600 text-center mt-12">
        Built with vets. Designed for everyone who loves pets.
      </p>
    </Section>
  )
}

