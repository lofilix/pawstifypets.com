/**
 * Pawstify Animation System 2025
 * Lightweight, performance-optimized animations with emotional design principles
 */

// Animation configuration
export const ANIMATION_CONFIG = {
  // Intersection Observer options
  observerOptions: {
    root: null,
    rootMargin: '0px 0px -50px 0px', // Trigger when element is 50px from viewport
    threshold: 0.1, // Trigger when 10% of element is visible
  },
  
  // Animation delays for staggered effects
  staggerDelays: {
    short: 100,
    medium: 200,
    long: 300,
  },
  
  // Performance settings
  performance: {
    enableGPUAcceleration: true,
    respectReducedMotion: true,
  }
}

/**
 * Intersection Observer for scroll-triggered animations
 */
export class AnimationObserver {
  private observer: IntersectionObserver | null = null
  private elements: Map<Element, string> = new Map()

  constructor() {
    this.init()
  }

  private init() {
    // Check for reduced motion preference
    if (ANIMATION_CONFIG.performance.respectReducedMotion) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (prefersReducedMotion) {
        return // Don't initialize animations if user prefers reduced motion
      }
    }

    this.observer = new IntersectionObserver(
      this.handleIntersection.bind(this),
      ANIMATION_CONFIG.observerOptions
    )
  }

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target
        const animationClass = this.elements.get(element)
        
        if (animationClass) {
          // Add animation class
          element.classList.add(animationClass)
          
          // Remove from observer after animation starts
          this.observer?.unobserve(element)
          this.elements.delete(element)
        }
      }
    })
  }

  /**
   * Observe an element for animation
   */
  observe(element: Element, animationClass: string) {
    if (!this.observer) return

    this.elements.set(element, animationClass)
    this.observer.observe(element)
  }

  /**
   * Stop observing an element
   */
  unobserve(element: Element) {
    this.observer?.unobserve(element)
    this.elements.delete(element)
  }

  /**
   * Clean up observer
   */
  destroy() {
    this.observer?.disconnect()
    this.elements.clear()
  }
}

// Global animation observer instance
let globalObserver: AnimationObserver | null = null

/**
 * Get or create the global animation observer
 */
export function getAnimationObserver(): AnimationObserver {
  if (!globalObserver) {
    globalObserver = new AnimationObserver()
  }
  return globalObserver
}

/**
 * Initialize animations for elements with data attributes
 */
export function initScrollAnimations() {
  const observer = getAnimationObserver()
  
  // Find all elements with animation data attributes
  const animatedElements = document.querySelectorAll('[data-animate]')
  
  animatedElements.forEach((element) => {
    const animationType = element.getAttribute('data-animate')
    if (animationType) {
      observer.observe(element, animationType)
    }
  })
}

/**
 * Animate elements with stagger effect
 */
export function animateWithStagger(
  elements: NodeListOf<Element> | Element[],
  animationClass: string,
  staggerDelay: number = ANIMATION_CONFIG.staggerDelays.medium
) {
  const elementArray = Array.from(elements)
  
  elementArray.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add(animationClass)
    }, index * staggerDelay)
  })
}

/**
 * Add hover animations to elements
 */
export function addHoverAnimations(selector: string, hoverClass: string) {
  const elements = document.querySelectorAll(selector)
  
  elements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
      element.classList.add(hoverClass)
    })
    
    element.addEventListener('mouseleave', () => {
      element.classList.remove(hoverClass)
    })
  })
}

/**
 * Form validation animations
 */
export function animateFormValidation(element: Element, isValid: boolean) {
  if (isValid) {
    element.classList.add('animate-checkmark')
    setTimeout(() => {
      element.classList.remove('animate-checkmark')
    }, 600)
  } else {
    element.classList.add('animate-shake')
    setTimeout(() => {
      element.classList.remove('animate-shake')
    }, 500)
  }
}

/**
 * Success celebration animation
 */
export function animateSuccess(element: Element) {
  element.classList.add('animate-paw-bounce')
  setTimeout(() => {
    element.classList.remove('animate-paw-bounce')
  }, 400)
}

/**
 * Loading state animation
 */
export function animateLoading(element: Element, isLoading: boolean) {
  if (isLoading) {
    element.classList.add('animate-spin-slow')
  } else {
    element.classList.remove('animate-spin-slow')
  }
}

/**
 * Initialize all animations on page load
 */
export function initAllAnimations() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollAnimations)
  } else {
    initScrollAnimations()
  }
  
  // Add hover animations to common elements
  addHoverAnimations('.hover-lift', 'hover-lift')
  addHoverAnimations('.hover-scale', 'hover-scale')
  addHoverAnimations('.hover-glow', 'hover-glow')
}

/**
 * Clean up animations on page unload
 */
export function cleanupAnimations() {
  if (globalObserver) {
    globalObserver.destroy()
    globalObserver = null
  }
}

// Auto-initialize on module load
if (typeof window !== 'undefined') {
  initAllAnimations()
}
