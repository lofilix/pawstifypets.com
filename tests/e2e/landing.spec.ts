import { test, expect } from '@playwright/test'

test.describe('Pawstify Landing Page', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Pawstify/)
  })

  test('should display hero section', async ({ page }) => {
    await page.goto('/')
    const hero = page.locator('#hero')
    await expect(hero).toBeVisible()
    await expect(hero.locator('h1')).toContainText('Manage All Your Pets')
  })

  test('should validate email input', async ({ page }) => {
    await page.goto('/')
    
    // Try invalid email
    await page.fill('input[type="email"]', 'invalid-email')
    await page.click('button:has-text("Join Early Access")')
    
    // Wait a moment for validation to run
    await page.waitForTimeout(100)
    
    // Should show error
    await expect(page.locator('text=Please enter a valid email address')).toBeVisible()
  })

  test('should require Gmail address', async ({ page }) => {
    await page.goto('/')
    
    // Try non-Gmail email
    await page.fill('input[type="email"]', 'test@yahoo.com')
    await page.click('button:has-text("Join Early Access")')
    
    // Should show Gmail requirement error
    await expect(page.locator('text=Please use a Gmail address for beta testing')).toBeVisible()
  })

  test('should navigate to all sections', async ({ page }) => {
    await page.goto('/')
    
    // Check all main sections exist
    await expect(page.locator('#hero')).toBeVisible()
    await expect(page.locator('#problem')).toBeVisible()
    await expect(page.locator('#solution')).toBeVisible()
    await expect(page.locator('#demo')).toBeVisible()
    await expect(page.locator('#testimonials')).toBeVisible()
    await expect(page.locator('#faq')).toBeVisible()
    await expect(page.locator('#cta')).toBeVisible()
  })

  test('should expand FAQ items', async ({ page }) => {
    await page.goto('/')
    await page.locator('#faq').scrollIntoViewIfNeeded()
    
    const firstFaq = page.locator('details').first()
    await firstFaq.click()
    
    await expect(firstFaq).toHaveAttribute('open', '')
  })

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
    
    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('input[type="email"]')).toBeVisible()
  })

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/')
    
    // Tab through form elements
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    
    // Should be able to interact with keyboard
    const emailInput = page.locator('input[type="email"]')
    await expect(emailInput).toBeFocused()
  })
})

