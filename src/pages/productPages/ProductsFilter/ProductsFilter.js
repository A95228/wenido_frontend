import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import FilterLists from "./FilterLists";
import ProductCard from "./components/ProductCard";
import {makeStyles} from "@material-ui/core/styles";
import DisplayPlace from "../../../components/MapBox/DisplayPlace";
import {fetchProducts} from "../../../redux/actions/productActions";
import {useSelector,useDispatch} from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1)
    }
}));
function ProductsFilter(props) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products);
    const [places,setPlaces] = useState(null)
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    useEffect(()=>{
        var temp_places = [];
        products.map(product=>{
            temp_places.push([product.address.longitude,product.address.latitude])
        })
        console.log("set Places",temp_places)
        setPlaces(temp_places)
    },[products])
    return (
        <>
            <Grid container spacing={1} className={classes.root}>
                <Grid item xs={4} md={2}>
                    <FilterLists />
                </Grid>
                <Grid item xs={4} className="h-screen overflow-y-auto">
                    {
                        products&&
                        products.map((product,key)=>{
                            return <ProductCard key={key} product={product}/>
                        })
                    }
                </Grid>
                <Grid item xs={6}>
                    <DisplayPlace places={places} products={products}/>
                </Grid>
            </Grid>
        </>
    );
}

export default ProductsFilter;