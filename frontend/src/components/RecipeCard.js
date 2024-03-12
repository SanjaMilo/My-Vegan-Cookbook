import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Box,
  Tooltip,
  Zoom
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import moment from "moment";
import { useNavigate } from "react-router-dom";


const RecipeCard = ({ recipes }) => {
  const navigate = useNavigate();

  const truncateString = (str, num) => {
    if (str.length > num && str.length > 0) {
      let newStr = str + " ";
      newStr = str.substr(0, num);
      newStr = str.substr(0, newStr.lastIndexOf(" "));
      newStr = newStr.length > 0 ? newStr : str.substr(0, num);

      return newStr + "...";
    }
    return str;
  };


  return (
    <>
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe) => (
          <Grid key={recipe._id} item lg={4} md={4} xs={6}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: "primary.main", fontFamily: '"Ephesis"' }}
                    aria-label="recipe"
                  >
                    {recipe.title && recipe.title[0]}
                  </Avatar>
                }
                action={
                  <Tooltip title="See full recipe" TransitionComponent={Zoom} placement="left">
                    <IconButton onClick={() => {navigate(`/recipe-details/${recipe._id}`)}} aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  </Tooltip>
                  
                }
                title={recipe.title}
                subheader={moment(recipe.createdAt).format(
                  "MMMM Do YYYY, HH:mm"
                )}
              />
              <CardMedia
                component="img"
                height="194"
                image={recipe.imageUrl}
                alt={recipe.title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ fontFamily: "Ephesis", color: "primary.main" }}
                >
                  {recipe.title}
                </Typography>
                {recipe.tags.length > 0 &&
                  recipe.tags.map((tag, index) => (
                    <Typography
                      key={index}
                      variant="subtitle1"
                      color="secondary.main"
                      sx={{
                        display: "inline-block",
                        mr: "10px",
                        cursor: "pointer",
                      }}
                    >
                      #{tag}
                    </Typography>
                  ))}
                <Typography gutterBottom variant="h6">
                  Instructions:
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ whiteSpace: "pre-wrap" }}
                >
                  {truncateString(recipe.instructions, 250)}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Tooltip title="Save Recipe" TransitionComponent={Zoom} placement="right">
                  <IconButton sx={{ color: "secondary.dark" }} aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          </Grid>
        ))
      ) : (
        <Grid item xs={12} sx={{justifyContent: 'center', alignItems: 'center'}}>
          <Box>
            <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  sx={{ fontFamily: "Ephesis", color: "primary.main", textAlign: 'center' }}
            >
              Sorry, no recipes found!
            </Typography>
          </Box>
        </Grid>
      )}
    </>
  );
};

export default RecipeCard;
