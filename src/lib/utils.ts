/**
 * Utility functions for Pawstify landing page
 */

/**
 * Validates email format
 * @param email - Email string to validate
 * @returns true if valid Gmail address
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validates Gmail address specifically
 * @param email - Email string to validate
 * @returns true if valid Gmail address
 */
export function isGmailAddress(email: string): boolean {
  return email.toLowerCase().endsWith('@gmail.com')
}

/**
 * Sanitizes user input to prevent XSS
 * @param input - User input string
 * @returns Sanitized string
 */
export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '')
}

/**
 * Formats error messages for user display
 * @param error - Error object or string
 * @returns User-friendly error message
 */
export function formatErrorMessage(error: unknown): string {
  if (typeof error === 'string') return error
  if (error instanceof Error) return error.message
  return 'An unexpected error occurred. Please try again.'
}

/**
 * Debounces a function call
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

