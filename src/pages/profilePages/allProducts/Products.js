import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Sidebar from "../Sidebar";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3)
  },
  padding: {
    padding: theme.spacing(2)
  },
  header: {
    marginTop: theme.spacing(2)
  },
  button: {
    padding: theme.spacing(1.3)
  }
}));

const Products = () => {
  const classes = useStyles();
  return (
    <Sidebar activeItem="allProducts">
      <Typography className={classes.header} variant="h5">
        All products
      </Typography>
      <Paper className={classes.root}>
        <Grid container spacing={2} className={classes.padding}>

        </Grid>
        <Button
          component={Link}
          to="/profile/products/add"
          color="primary"
          fullWidth
          size="large"
          className={classes.button}
        >
          Add new product
        </Button>
      </Paper>
    </Sidebar>
  );
};

export default Products;
