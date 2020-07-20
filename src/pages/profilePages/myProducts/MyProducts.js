import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Sidebar from "../Sidebar";
import ProductItem from "../../productPages/products/components/ProductItem";
import {fetchMyProducts} from "../../../redux/actions/profileActions/MyProductActions";

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

const MyProducts = ({history}) => {
  const products = useSelector(state => state.profile.myProducts);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMyProducts());
  }, [dispatch]);

  const classes = useStyles();
  return (
    <Sidebar activeItem="allProducts">
      <Typography className={classes.header} variant="h5">
        All products
      </Typography>
      <Paper className={classes.root}>
        <Grid container spacing={2} className={classes.padding}>
              {products.map(product => (
                  <Grid key={product.id} item md={3} xs={12}>
                    <ProductItem product={product} history={history} />
                  </Grid>
              ))}
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

export default MyProducts;
