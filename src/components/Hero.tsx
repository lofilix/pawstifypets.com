'use client'

import React, { useState } from 'react'
// import Image from 'next/image' // Temporarily disabled for functionality
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { isValidEmail, isGmailAddress } from '@/lib/utils'

export function Hero() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Validation
    if (!email) {
      setError('Please enter your email address')
      return
    }
    
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address')
      return
    }
    
    if (!isGmailAddress(email)) {
      setError('Please use a Gmail address for beta testing')
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
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="hero"
      className="py-24 md:py-32 bg-gradient-to-br from-orange-50 to-orange-100"
    >
      <div className="max-w-7xl mx-auto px-10 md:px-6 sm:px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-8">
            <div className="space-y-6">
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance animate-fade-in-up"
                data-animate="animate-fade-in-up"
              >
                Never Miss Your Pet's Health Routine - Try Pawstify Demo
              </h1>
              <p 
                className="text-lg md:text-xl text-gray-700 leading-relaxed animate-fade-in-up stagger-1"
                data-animate="animate-fade-in-up"
              >
                Track daily routines, prescriptions, and vet reminders effortlessly.
              </p>
            </div>
        
            {success ? (
              <div 
                className="p-6 md:p-8 bg-green-50 border border-green-200 rounded-2xl shadow-sm animate-fade-in-up"
                data-animate="animate-fade-in-up"
              >
                <p className="text-green-800 font-medium text-center">
                  ✅ Thanks! Check your Gmail for your demo invite.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <form 
                  onSubmit={handleSubmit} 
                  className="flex flex-col sm:flex-row gap-3 animate-fade-in-up stagger-2"
                  data-animate="animate-fade-in-up"
                >
                  <Input
                    type="email"
                    name="hero-email"
                    placeholder="Enter your Gmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={error}
                    className="flex-grow"
                    disabled={isSubmitting}
                    aria-label="Email address for early access"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="whitespace-nowrap flex items-center justify-center hover-lift"
                  >
                    {isSubmitting ? 'Joining...' : (
                      <>
                        Try Demo on <img src="https://developer.android.com/static/images/brand/android-head_flat.svg" alt="Android" className="w-4 h-4 inline ml-1" />
                      </>
                    )}
                  </Button>
                </form>
                <div 
                  className="space-y-2 animate-fade-in-up stagger-3"
                  data-animate="animate-fade-in-up"
                >
                  <p className="text-sm text-gray-500 text-center sm:text-left">
                    Limited spots · No spam ever
                  </p>
                  <p className="text-xs text-gray-400 text-center sm:text-left flex items-center justify-center sm:justify-start gap-1">
                    Demo available for <img src="https://developer.android.com/static/images/brand/android-head_flat.svg" alt="Android" className="w-3 h-3 inline animate-pulse-soft" /> Android now • iOS coming soon
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div 
              className="relative group animate-fade-in-scale"
              data-animate="animate-fade-in-scale"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <div className="relative image-frame hover-lift">
                <img
                  src="/images/homepage_petselector.png"
                  alt="Pawstify app interface showing pet selector screen with multiple pets and health tracking features"
                  className="rounded-2xl w-80 md:w-96 lg:w-[28rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

