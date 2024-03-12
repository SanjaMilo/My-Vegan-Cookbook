import { useEffect, useState } from "react";
import { Grid, CircularProgress, Box, Typography } from "@mui/material";
import RecipeCard from "./RecipeCard";
import { useSelector, useDispatch } from 'react-redux';
import { setRecipes } from "../redux/slices/recipesSlice";

const RecipesGrid = () => {
  // Local state
  const [isLoading, setIsLoading] = useState(true);
  // Get current global state  (recipes array)
  const recipes = useSelector(state => state.recipes.recipes); // state.[reducer name is 'recipes'].[variable name is 'recipes']

  // dispatch actions to update state
  const dispatch = useDispatch();

  // Get all recipes
  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/recipes");
        const data = await response.json();
        if (response.ok) {
          dispatch(setRecipes(data));
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();

  }, [dispatch]);

  return ( 
    <Grid container spacing={4} sx={{ pb: "70px", display: 'flex' }}>
      {
        isLoading ? (
          <Grid item xs={12}>
            <Box sx={{textAlign: 'center', pt: '15%', pb: '15%'}}>
                <CircularProgress color="secondary" />
                <Typography color="secondary" variant="h6">Wait a moment...</Typography>
            </Box> 
          </Grid>
        ) : (
          <RecipeCard recipes={recipes} />
        )
      }  
    </Grid>
  );
};

export default RecipesGrid;
