'use client'

import React, { useState } from 'react'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { isValidEmail, isGmailAddress } from '@/lib/utils'

export function FinalCTA() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (!email) {
      setError('Please enter your email address')
      return
    }
    
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address')
      return
    }
    
    if (!isGmailAddress(email)) {
      setError('Please use a Gmail address')
      return
    }

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setSuccess(true)
        setEmail('')
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id="cta" 
      className="py-24 md:py-32 text-center bg-gradient-to-br from-orange-500 to-orange-600 text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-10 md:px-6 sm:px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Help Us Shape the Future of Pet Care
          </h2>
          <p className="mb-8 text-lg md:text-xl leading-relaxed">
            Try Pawstify's demo and make managing your pets' health simpler than ever.
          </p>
        
          {success ? (
            <div className="p-6 bg-white/20 backdrop-blur-sm rounded-2xl max-w-md mx-auto shadow-sm">
              <p className="text-white font-medium text-center">
                ✅ Success! Check your Gmail for next steps.
              </p>
            </div>
          ) : (
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  name="cta-email"
                  placeholder="Enter your Gmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={error}
                  className="flex-grow text-gray-900 bg-white/90 border-white/20 focus:bg-white"
                  disabled={isSubmitting}
                  aria-label="Email address for demo access"
                />
                <Button 
                  type="submit" 
                  variant="secondary"
                  disabled={isSubmitting}
                  className="whitespace-nowrap flex items-center justify-center"
                >
                  {isSubmitting ? 'Joining...' : (
                    <>
                      Try Demo on <img src="https://developer.android.com/static/images/brand/android-head_flat.svg" alt="Android" className="w-4 h-4 inline ml-1" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          )}
          
              <p className="text-sm text-orange-100 mt-6">
                We'll never share your email.
              </p>
               <p className="text-xs text-orange-200 mt-2 flex items-center justify-center gap-1">
                 Demo available for <img src="https://developer.android.com/static/images/brand/android-head_flat.svg" alt="Android" className="w-3 h-3 inline" /> Android now • iOS coming soon
               </p>
        </div>
      </div>
    </section>
  )
}

