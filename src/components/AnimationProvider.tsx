'use client'

import { useEffect } from 'react'
import { initAllAnimations, cleanupAnimations } from '@/lib/animations'

/**
 * Animation Provider Component
 * Initializes the animation system and provides context for animations
 */
export function AnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize animations when component mounts
    initAllAnimations()

    // Cleanup animations when component unmounts
    return () => {
      cleanupAnimations()
    }
  }, [])

  return <>{children}</>
}
