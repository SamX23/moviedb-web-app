import React from "react";
import Card from "@material-ui/core/Card";
import TextTruncate from "react-text-truncate";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { ThumbUpSharp } from "@material-ui/icons";

const videoCard = makeStyles({
  root: {
    backgroundColor: "transparent",
    color: "black",
    maxWidth: 400,
  },
  media: {
    height: 140,
  },

  videoCard__stats: {
    display: "none",
    "& :hover": {
      display: "block",
    },
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
  const videoBaseUrl = "https://image.tmdb.org/t/p/original/";
  console.log(movie);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${videoBaseUrl}${movie.backdrop_path || movie.poster_path}`}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.title || movie.original_name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <TextTruncate
              line={2}
              element="p"
              truncateText="..."
              text={movie.overview}
            />
          </Typography>
          <ThumbUpSharp />
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.media_type && `${movie.media_type} -`}
            {movie.release_date || movie.first_air_date} - {movie.vote_count}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default VideoCard;
