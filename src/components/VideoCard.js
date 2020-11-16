import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const videoCard = makeStyles({
  root: {
    color: "black",
    width: "400px",
    height: "350px",
    padding: "20px",
    margin: "5px",
    transition: "transform 100ms",
    "&:hover": {
      transform: "scale(1.09)",
    },
    "& > img": {
      width: "350px",
      objectFit: "contain",
    },
    "& > p": { margin: 0 },
    "& > h2": { marginTop: "10px" },
  },
});

function VideoCard({ movie }) {
  const style = videoCard();

  return (
    <Card className={style.root}>
      <img src="" alt="" />
      <p>Description</p>
      <h2>Title</h2>
      <p>likes ....</p>
    </Card>
  );
}

export default VideoCard;
