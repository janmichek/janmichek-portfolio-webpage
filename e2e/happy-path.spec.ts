import { expect, test } from '@playwright/test'

test('visitor clicks through the portfolio and its goodie pages', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { level: 1, name: 'Jan Michek' })).toBeVisible()

  const sections = page.getByRole('navigation', { name: 'Sections' })
  const projectsLink = sections.getByRole('link', { name: 'Projects' })

  await projectsLink.click()
  await expect(page).toHaveURL(/#projects$/)
  await expect(projectsLink).toHaveAttribute('aria-current', 'location')

  await sections.getByRole('link', { name: 'Goodies' }).click()
  await expect(page).toHaveURL(/#goods$/)

  await sections.getByRole('link', { name: 'Contact' }).click()
  await expect(page).toHaveURL(/#contact$/)
  await expect(page.getByRole('link', { name: 'jan@janmichek.cz' })).toBeVisible()

  await page.getByRole('link', { name: /Karabiner shortcuts/ }).click()
  await expect(page).toHaveURL(/\/karabiner$/)
  await expect(page.getByRole('heading', { level: 2, name: 'Karabiner Shortcuts' })).toBeVisible()

  await page.getByRole('button', { name: 'Firefox' }).click()
  await expect(page.getByRole('heading', { level: 2, name: 'Firefox' })).toBeVisible()
  await expect(page.getByRole('heading', { level: 2, name: 'Navigation' })).toHaveCount(0)

  const pages = page.getByRole('navigation', { name: 'Pages' })
  await pages.getByRole('link', { name: 'Home' }).click()
  await expect(page).toHaveURL(/\/$/)
  await expect(page.getByRole('heading', { level: 1, name: 'Jan Michek' })).toBeVisible()

  await page.getByRole('link', { name: /Photo gallery/ }).click()
  await expect(page).toHaveURL(/\/gallery$/)
  await expect(page.getByRole('heading', { level: 2, name: 'Photo Gallery' })).toBeVisible()
  const activeSlide = page.locator('.swiper-slide-active')
  await expect(activeSlide.getByText('Galanthus nivalis - Žižkov')).toBeVisible()

  await page.getByRole('button', { name: 'Next slide' }).click()
  await expect(activeSlide.getByText('Bougainvillea spectabilis - Puerto de la Cruz')).toBeVisible()

  await pages.getByRole('link', { name: 'Home' }).click()
  await expect(page).toHaveURL(/\/$/)
  await expect(page.getByRole('heading', { level: 1, name: 'Jan Michek' })).toBeVisible()
})
