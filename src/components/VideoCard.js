import { forwardRef, useState } from "react";
import movieTrailer from "movie-trailer";
import Card from "@material-ui/core/Card";
import TextTruncate from "react-text-truncate";
import Youtube from "./YoutubeContainer";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  IconButton,
  Button,
} from "@material-ui/core";
import { Favorite } from "@material-ui/icons";

const videoCard = makeStyles({
  root: {
    backgroundColor: "#22283a",
    maxWidth: 400,
    minHeight: 350,
    margin: "5px",
    borderRadius: "10px",
  },
  action: {
    margin: 0,
    padding: 0,
    color: "#e6e6e6",
  },
  icon: {
    color: "white",
  },
  content: {
    margin: 5,
    padding: 2,
    color: "#e6e6e6",
    "& > h3": {
      fontSize: "1.3em",
    },
  },
});

const videoBaseUrl = "https://image.tmdb.org/t/p/original/";
const VideoCard = forwardRef(({ movie }, ref) => {
  const [trailerURL, setTrailerURL] = useState("");
  const classes = videoCard();

  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie.title || movie.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((e) => console.log(e));
    }
  };

  return (
    <Card ref={ref} className={classes.root}>
      {trailerURL ? (
        <Youtube id={trailerURL} />
      ) : (
        <CardMedia
          component="img"
          src={`${videoBaseUrl}${movie.backdrop_path || movie.poster_path}`}
          title={movie.title}
        />
      )}
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h3">
          {movie.title || movie.original_name}
        </Typography>
        <TextTruncate
          line={1}
          element="div"
          truncateText=".."
          text={movie.overview}
        />
        <Typography>
          {movie.media_type && `${movie.media_type.toUpperCase()} - `}
          {movie.release_date || movie.first_air_date}
        </Typography>
      </CardContent>
      <CardActions className={classes.action}>
        <IconButton className={classes.icon} aria-label="add to favorites">
          <Favorite />
          <Typography variant="body2">{`${movie.vote_count}`}</Typography>
        </IconButton>
        <Button
          onClick={() => handleClick(movie)}
          size="small"
          color="secondary"
        >
          Trailer {trailerURL ? `On` : "Off"}
        </Button>
      </CardActions>
    </Card>
  );
});

export default VideoCard;
