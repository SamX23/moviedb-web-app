import { forwardRef, useState } from "react";
import movieTrailer from "movie-trailer";
import Card from "@material-ui/core/Card";
import TextTruncate from "react-text-truncate";
import Youtube from "./YoutubeContainer";
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea, CardContent, Typography } from "@material-ui/core";
import { ThumbUpSharp } from "@material-ui/icons";

const videoCard = makeStyles({
  root: {
    backgroundColor: "#22283a",
    maxWidth: 400,
    height: 350,
    margin: "5px",
    borderRadius: "10px",
  },
  media: {
    width: "100%",
    objectFit: "contain",
  },
  content: {
    margin: 5,
    padding: 0,
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
    movieTrailer(movie.title || movie.original_title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerURL(urlParams.get("v"));
      })
      .catch((e) => console.log(e));
  };

  return (
    <Card ref={ref} className={classes.root}>
      <CardActionArea onClick={() => handleClick(movie)}>
        {trailerURL ? (
          <Youtube id={trailerURL} />
        ) : (
          <>
            <img
              className={classes.media}
              src={`${videoBaseUrl}${movie.backdrop_path || movie.poster_path}`}
              alt={movie.title}
            />
            <CardContent className={classes.content}>
              <Typography variant="h5" component="h3">
                {movie.title || movie.original_name}
              </Typography>
              <TextTruncate
                line={1}
                element="p"
                truncateText=".."
                text={movie.overview}
              />
              <Typography variant="body2" component="p">
                {movie.media_type && `${movie.media_type} -`}
                {movie.release_date || movie.first_air_date} - <ThumbUpSharp />{" "}
                {movie.vote_count}
              </Typography>
            </CardContent>
          </>
        )}
      </CardActionArea>
    </Card>
  );
});

export default VideoCard;
