import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    padding: theme.spacing(2),
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: "4rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
  },
  subheading: {
    fontSize: "1.5rem",
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));
function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Typography className={classes.heading}>404</Typography>
    <Typography className={classes.subheading}>
      Page not found
    </Typography>
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      href="/"
    >
      Back to Home
    </Button>
  </div>
  );
}

export default NotFound;
