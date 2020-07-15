import React from 'react';
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import {Link} from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import {Formik} from "formik";
import Sidebar from "../Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import * as Yup from "yup";
import {number_reg} from "../../authPages/regexes";
import {addNewProduct} from "../../../redux/actions/productActions";
import useReactRouter from "use-react-router";
import AddProductForm from "./AddProductForm";
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3)
    },
    wrapper: {
        padding: theme.spacing(2)
    },
    button: {
        padding: theme.spacing(1.3),
        background:'#bbdefb',
        outline:'none',
        border:0
    },
    iconButton: {
        margin: theme.spacing(1)
    }
}));

function AddProduct(props) {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Sidebar activeItem="allProducts">
            <Paper className={classes.root}>
                <IconButton
                    color="inherit"
                    component={Link}
                    to="/profile/products"
                    className={classes.iconButton}
                >
                    <ArrowBackIcon />
                </IconButton>
                <Typography display="inline" variant="h5">
                    Add new product
                </Typography>
                <AddProductForm classes={classes} />
            </Paper>
        </Sidebar>
    );
}

export default AddProduct;