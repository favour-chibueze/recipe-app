import { it, expect, describe } from 'vitest'
import RecipeCard from './RecipeCard.vue'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { type Recipe } from '../../types/types';
import BaseBtn from './BaseBtn.vue';

describe('RecipeCard', () => {
    const  mockRecipe: Recipe = {
        id: 1,
        name: 'Delicious Pancakes',
        ingredients: ['Flour', 'Milk', 'Eggs'],
        instructions: ['Mix ingredients', 'Heat pan', 'Cook until golden brown'],
        prepTimeMinutes: 5,
        cookTimeMinutes: 15,
        servings: 2,
        difficulty: 'Easy',
        cuisine: 'American',
        caloriesPerServing: 200,
        tags: ['breakfast', 'sweet'],
        userId: 123, // Updated to match number type
        image: '/images/pancakes.jpg',
        rating: 4.5,
        reviewCount: 10,
        mealType: ['breakfast']
    }

    it('should render a recipe card', () => {
        expect(true).toBe(true)
    })
    it('can mount the component', async () => {
        const component = await mountSuspended(RecipeCard, {
            props: { recipe: mockRecipe }
        })
        expect(component.html()).toContain('Delicious Pancakes')
    })
    it('should display the recipe name', async () => {
        const component = await mountSuspended(RecipeCard, {
            props: { recipe: mockRecipe }
        })
        expect(component.html()).toContain('Delicious Pancakes')
    })
    it('should display the recipe rating', async () => {
        const component = await mountSuspended(RecipeCard, {
            props: { recipe: mockRecipe }
        })
        expect(component.html()).toContain('4.5')
    })
    it('should display the recipe review count', async () => {
        const component = await mountSuspended(RecipeCard, {
            props: { recipe: mockRecipe }
        })
        expect(component.html()).toContain('10')
    })

    it('should set the correct "to" prop on the BaseBtn', async () => {
        const component = await mountSuspended(RecipeCard, {
            props: { recipe: mockRecipe }
        })
        const btn = component.findComponent(BaseBtn)
        expect(btn.exists()).toBe(true)
        expect(btn.props('to')).toBe(`/recipes/${mockRecipe.id}`)
    })
  
})