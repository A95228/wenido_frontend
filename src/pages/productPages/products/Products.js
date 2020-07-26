import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import {fetchProducts} from "../../../redux/actions/productActions";
import ProductItem from "./components/ProductItem";
import Pagination from "./components/Pagination";
import Ordering from "./components/Ordering";
import Filters from "./components/Filters";
import SearchInResults from "./components/Filters/SearchInResults";
import SubmittedFilters from "./components/Filters/SubmittedFilters";
import Categories from "./components/Filters/Categories";
import CategoryCarousel from "./components/CategoryCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const tradingImages = [

]
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1)
    }
}));

const Products = ({history, location}) => {
    const products = useSelector(state => state.products.products);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(location.search));
    }, [location.search, dispatch]);

    return (
        <Grid container spacing={2} className={classes.root}>
            <Grid container>
                <p className="text-6xl font-bold text-gray-800 text-center w-full mt-24">
                    trade instead of sell.
                </p>
                <p className="text-lg text-gray-800 text-center w-full mt-4">
                    Exchange has always been a cornerstone of our society.
                </p>
                <p className="text-lg text-gray-800 text-center w-full mt-2">
                    With Wenido we want to bring part of this old art back to life.
                </p>
            </Grid>
            <Grid container>
                <p className="text-4xl font-bold text-gray-800  w-full mt-40">
                    What do you want to trade?
                </p>
                <div className="flex items-center justify-center">
                    <div className="w-1/2 mt-32"><CategoryCarousel /></div>

                </div>
            </Grid>

            <Grid container>
                <p className="text-4xl font-bold text-gray-800  w-full mt-40">Discover new products</p>
            </Grid>

            {/*<Grid container spacing={2}>*/}
            {/*    <Grid item md={3} xs={12}>*/}
            {/*        <Categories />*/}
            {/*    </Grid>*/}
            {/*    <Grid item md>*/}
            {/*        <SearchInResults />*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
            {/*<Grid container>*/}
            {/*    <SubmittedFilters />*/}
            {/*</Grid>*/}

            <Grid container>
                {/*<Ordering location={location}/>*/}
                <button className="p-3 text-white font-bold text-lg gradientButton border-0 outline-none" onClick={()=>history.push('/products/filter')}>Are you finding all products?</button>
                <Grid container spacing={1}>
                    {products.map((product,key) => {
                        if (key===8) return;
                            return <Grid key={product.id} item md={3} xs={12}>
                                <ProductItem product={product} history={history}/>
                            </Grid>
                    })}
                </Grid>

                {/*<Pagination location={location}/>*/}
            </Grid>
        </Grid>
    );
};

export default Products;
