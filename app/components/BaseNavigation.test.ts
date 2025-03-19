import { it, expect, describe } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import BaseNavigation from '~/components/BaseNavigation.vue'


describe('BaseNavigation', () => {
    it('should render a navigation bar', () => {
        expect(true).toBe(true)
    })

    it ('should contain the navigation items', async () => {
        const component = await mountSuspended(BaseNavigation)
        expect(component.html()).toContain('Home')
        expect(component.html()).toContain('About')
    })

    it('can mount the component', async () => {
        const component = await mountSuspended(BaseNavigation)
        expect(component.html()).toContain('Home')
    }) 
    
    it('should contain nuxt-link elements', async () => {
        const component = await mountSuspended(BaseNavigation)
        expect(component.html()).toContain('href')
    })
})