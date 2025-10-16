import React, { useEffect, useRef } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export function Input({ 
  label, 
  error, 
  helperText,
  className = '',
  id,
  ...props 
}: InputProps) {
  const inputId = id || `input-${props.name || 'default'}`
  const inputRef = useRef<HTMLInputElement>(null)
  const prevErrorRef = useRef<string | undefined>(undefined)
  
  // Handle error animation
  useEffect(() => {
    if (error && error !== prevErrorRef.current) {
      // Add shake animation for new errors
      if (inputRef.current) {
        inputRef.current.classList.add('animate-shake')
        setTimeout(() => {
          inputRef.current?.classList.remove('animate-shake')
        }, 500)
      }
    }
    prevErrorRef.current = error
  }, [error])
  
  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        ref={inputRef}
        id={inputId}
        className={`
          w-full px-4 py-3 border rounded-lg 
          transition-all duration-300 ease-out
          focus:ring-2 focus:ring-orange-400 focus:border-orange-400 
          hover:border-orange-300 hover:shadow-sm hover-glow
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-400 focus:border-red-400' : 'border-gray-300'}
          ${className}
        `}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        {...props}
      />
      {error && (
        <p 
          id={`${inputId}-error`} 
          className="mt-1 text-sm text-red-600 animate-fade-in-up" 
          role="alert"
        >
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={`${inputId}-helper`} className="mt-1 text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  )
}

