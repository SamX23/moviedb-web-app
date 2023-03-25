import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "80vh",
  },
});

export default function Loading() {
  const style = useStyles();

  return (
    <Grid
      className={style.root}
      container
      justifyContent="space-evenly"
      alignItems="center"
    >
      <CircularProgress />
    </Grid>
  );
}
