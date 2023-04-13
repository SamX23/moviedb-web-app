import { Box, Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(149deg, rgba(38,73,122,1) 0%, rgba(13,60,139,1) 47%, rgba(55,221,255,1) 100%)",
    color: "white",
    paddingBottom: "3rem",
    fontFamily: "sans-serif",
  },
});

const Layout = ({ children }) => {
  const appBackground = useStyles();

  return (
    <Box className={appBackground.root}>
      <Container width={1100}>{children}</Container>
    </Box>
  );
};

export default Layout;
