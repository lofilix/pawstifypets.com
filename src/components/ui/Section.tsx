import React from 'react'

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  background?: 'white' | 'orange' | 'gray'
  containerSize?: 'default' | 'narrow' | 'wide'
}

export function Section({ 
  children, 
  id, 
  className = '',
  background = 'white',
  containerSize = 'default'
}: SectionProps) {
  const backgroundStyles = {
    white: 'bg-white',
    orange: 'bg-orange-50',
    gray: 'bg-gray-50',
  }
  
  const containerStyles = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl',
    wide: 'max-w-8xl',
  }
  
  return (
    <section 
      id={id} 
      className={`py-24 md:py-32 ${backgroundStyles[background]} ${className}`}
    >
      <div className={`${containerStyles[containerSize]} mx-auto px-10 md:px-6 sm:px-4`}>
        {children}
      </div>
    </section>
  )
}

