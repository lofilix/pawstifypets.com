import React from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-16 md:py-20 text-center text-sm text-gray-600 bg-gradient-to-br from-orange-50 to-orange-100 border-t border-orange-200">
      <div className="max-w-7xl mx-auto px-10 md:px-6 sm:px-4">
        <div>
          <p className="mb-6 text-base">
            © {currentYear} Pawstify · Built with ❤️ for pet owners everywhere
          </p>
          <nav className="flex justify-center gap-6 flex-wrap" aria-label="Footer navigation">
            <a 
              href="/privacy" 
              className="underline hover:text-orange-500 transition-colors duration-200 hover:no-underline"
            >
              Privacy Policy
            </a>
            <span aria-hidden="true" className="text-orange-300">·</span>
            <a 
              href="/terms" 
              className="underline hover:text-orange-500 transition-colors duration-200 hover:no-underline"
            >
              Terms of Service
            </a>
            <span aria-hidden="true" className="text-orange-300">·</span>
            <a 
              href="/contact" 
              className="underline hover:text-orange-500 transition-colors duration-200 hover:no-underline"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

