import YouTube from "react-youtube";

export default function Youtube({ id }) {
  const opts = {
    height: "221",
    width: "400",
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return <YouTube videoId={id} opts={opts} onReady={onReady} />;
}
