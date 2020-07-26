import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { fetchFavoriteProducts } from "../../../redux/actions/profileActions/FavoriteProductsActions";
import ProductItem from "../../productPages/products/components/ProductItem";
import Sidebar from "../Sidebar";

const FavoriteProducts = ({ history }) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.profile.favoriteProducts);
  const loading = useSelector(state => state.ui.loadingUI);

  useEffect(() => {
    dispatch(fetchFavoriteProducts());
  }, [dispatch]);

  if (loading) {
    return null;
  }

  return (
    <Sidebar activeItem="favProducts">
      <div style={{ marginTop: "30px" }}>
        <Grid container spacing={2}>
          {
            products.length < 1?
            <Typography variant="h5">
              Your favorite product is empty
            </Typography>:

          products.map(product => (
            <Grid key={product.id} item md={3} xs={12}>
              <ProductItem product={product} history={history} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Sidebar>
  );
};

export default FavoriteProducts;
