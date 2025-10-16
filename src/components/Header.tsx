'use client'

import React, { useState, useEffect } from 'react'
import { Button } from './ui/Button'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Pawstify Logo" 
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="text-xl font-bold text-gray-900">Pawstify</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('problem')}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              Why Pawstify
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              FAQ
            </button>
            <Button
              onClick={() => scrollToSection('hero')}
              size="sm"
              className="ml-4 flex items-center justify-center"
            >
              Try Demo on <img src="https://developer.android.com/static/images/brand/android-head_flat.svg" alt="Android" className="w-4 h-4 inline ml-1" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('problem')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium py-2"
              >
                Why Pawstify
              </button>
              <button
                onClick={() => scrollToSection('solution')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium py-2"
              >
                FAQ
              </button>
              <Button
                onClick={() => scrollToSection('hero')}
                size="sm"
                className="w-full mt-4 flex items-center justify-center"
              >
                Try Demo on <img src="https://developer.android.com/static/images/brand/android-head_flat.svg" alt="Android" className="w-4 h-4 inline ml-1" />
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
