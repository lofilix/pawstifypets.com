import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className = '',
  children,
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 hover:scale-105 transform hover-lift'
  
  const variantStyles = {
    primary: 'bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-400 shadow-md hover:shadow-lg hover-glow',
    secondary: 'bg-white text-orange-600 border-2 border-orange-500 hover:bg-orange-50 focus:ring-orange-400 shadow-sm hover:shadow-md',
    outline: 'bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-gray-400 shadow-sm hover:shadow-md',
  }
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onMouseEnter={(e) => {
        // Add paw bounce effect on hover for primary buttons
        if (variant === 'primary') {
          e.currentTarget.classList.add('animate-paw-bounce')
          setTimeout(() => {
            e.currentTarget.classList.remove('animate-paw-bounce')
          }, 400)
        }
      }}
      {...props}
    >
      {children}
    </button>
  )
}

