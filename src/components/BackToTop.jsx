import { makeStyles, useScrollTrigger, Zoom, Fab } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(6),
    right: theme.spacing(3),
  },
}));

const ScrollTop = ({ children, window }) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

export default function BackToTop() {
  return (
    <ScrollTop>
      <Fab color="secondary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.objectOf(PropTypes.node),
  window: PropTypes.objectOf(PropTypes.any),
};
