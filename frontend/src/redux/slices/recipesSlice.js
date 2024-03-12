import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    recipes: []
}

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        setRecipes: (state, action) => {
            state.recipes = action.payload
        },
        addRecipe: (state, action) => {
            // add new recipe at the top and spread all other recipes
            state.recipes = [action.payload, ...state.recipes] 
        }
    }
});


export const { setRecipes, addRecipe } = recipesSlice.actions;

export default recipesSlice.reducer; // default export. When we import it in store.js  the name is "recipesReducer"

