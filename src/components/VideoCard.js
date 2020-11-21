import { forwardRef } from "react";
import Card from "@material-ui/core/Card";
import TextTruncate from "react-text-truncate";
import { makeStyles } from "@material-ui/core/styles";
import { CardActionArea, CardContent, Typography } from "@material-ui/core";
import { ThumbUpSharp } from "@material-ui/icons";

const videoCard = makeStyles({
  root: {
    backgroundColor: "#22283a",
    maxWidth: 400,
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
  const classes = videoCard();

  return (
    <Card ref={ref} className={classes.root}>
      <CardActionArea>
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
      </CardActionArea>
    </Card>
  );
});

export default VideoCard;
