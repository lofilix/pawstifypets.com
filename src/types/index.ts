// Type definitions for Pawstify Landing Page

export interface SignupFormData {
  email: string
}

export interface SignupResponse {
  success: boolean
  message: string
  error?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface FeatureCard {
  icon: string
  title: string
  description: string
  image?: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

