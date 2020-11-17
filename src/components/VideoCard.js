import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const videoCard = makeStyles({
  root: {
    backgroundColor: "transparent",
    color: "black",
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
  // height: "350px",
  // transition: "transform 100ms",
  // "&:hover": {
  //   transform: "scale(1.09)",
  // },
  // "& > img": {
  //   width: "500px",
  //   objectFit: "contain",
  // },
  // "& > p": { margin: 0 },
  // "& > h2": { marginTop: "10px" },
  // },
});

function VideoCard({ movie }) {
  const classes = videoCard();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default VideoCard;
