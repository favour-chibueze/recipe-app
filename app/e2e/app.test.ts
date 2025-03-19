import { setup, $fetch, createPage, url,   } from "@nuxt/test-utils/e2e";
import { describe, test, expect } from "vitest";


describe('app', async () => {
    await setup()

    test ('contains the home page', async () => {
        const html = await $fetch('/')
        expect(html).toContain('Master the Kitchen with Ease')
    })
    test ('contains the about page', async () => {
        const html = await $fetch('/about')
        expect(html).toContain('About Nuxtcipes:')
    })

    test('with playwright', async () => {
        const page = await createPage()
        await page.goto(url('/'), { waitUntil: 'hydration' })
        const text = await page.textContent('h1')
        expect(text).toContain('Master the Kitchen with Ease')
        await page.click('a[href="/about"]')
        const aboutText = await page.textContent('h1')
        expect(aboutText).toContain('About Nuxtcipes:')
    })

})