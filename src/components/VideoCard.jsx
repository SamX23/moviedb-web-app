import { forwardRef, useState } from "react";
import movieTrailer from "movie-trailer";
import Card from "@material-ui/core/Card";
import TextTruncate from "react-text-truncate";
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
import PropTypes from "prop-types";
import Youtube from "./YoutubeContainer";
import { videoBaseUrl } from "../constants";

const videoCard = makeStyles({
  root: {
    backgroundColor: "#22283a",
    maxWidth: 400,
    minHeight: 350,
    margin: "5px",
    borderRadius: "10px",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  action: {
    margin: 5,
    padding: 2,
    color: "#e6e6e6",
    display: "flex",
    justifyContent: "space-between",
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

const VideoCard = forwardRef(({ movie }, ref) => {
  const [trailerURL, setTrailerURL] = useState("");
  const classes = videoCard();

  const handleClick = (item) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(item.title || item.original_title || "")
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
          lazy="true"
          height={200}
        />
      )}
      <CardContent className={classes.content}>
        <Typography variant="h3">
          {movie.title || movie.original_name}
        </Typography>
        <TextTruncate
          line={1}
          element="div"
          truncateText=".."
          text={movie.overview}
        />
        <Typography
          style={{
            fontWeight: "bold",
            marginTop: ".5rem",
          }}
        >
          Released at {movie.release_date || movie.first_air_date}
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
          style={{
            backgroundColor: "#e6e6e6",
            borderRadius: "10px",
            padding: ".25rem .5rem",
          }}
        >
          {trailerURL ? `Hide` : "Show"} Trailer
        </Button>
      </CardActions>
    </Card>
  );
});

VideoCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  movie: PropTypes.any,
};

export default VideoCard;
