import { useState, useEffect } from "react";
import useHeaderHeight from "../hooks/useHeaderHeight";
import { Container, Grid, Typography } from "@mui/material";

const SavedRecipes = () => {
  const headerHeight = useHeaderHeight();

  return (
    <Container>
      <Grid
        container
        spacing={3}
        sx={{
          mt: `${headerHeight + 50}px`,
          justifyContent: "center",
          pb: "70px",
        }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={8} sx={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            component="div"
            sx={{
              fontFamily: '"Ephesis"',
              color: "secondary.main",
              mb: "3rem",
            }}
          >
            Your Saved Recipes
            <span
              style={{ fontSize: "3rem" }}
              className="material-symbols-outlined"
            >
              eco
            </span>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SavedRecipes;
