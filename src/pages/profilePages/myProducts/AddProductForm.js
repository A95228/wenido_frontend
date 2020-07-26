import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import LoadingButton from "../../../components/loading/LoadingButton";
import {useDispatch, useSelector} from "react-redux";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {fetchCategories} from "../../../redux/actions/categoryActions";
import {addNewProduct, fetchMyProducts} from "../../../redux/actions/profileActions/MyProductActions";
import useReactRouter from "use-react-router";
import AddPlace from "../../../components/MapBox/AddPlace";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {fetchAddresses} from "../../../redux/actions/profileActions/AddressActions";



const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;

function AddProductForm(props) {

    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.category);
    const categoryOpetions = categories.filter(category=>category.id!=1)
    const [title, setTitle] = useState('');
    const [available, setAvailable] = useState(true);
    const [price, setPrice] = useState('');
    const [sale_count, setSaleCount] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategories] = useState([]);
    const [photo_main, setMainPhoto] = useState('');
    const [photo_filename, setPhotoFileName] = useState(null);
    const [address, setAddress] = React.useState('');

    const addresses = useSelector(state => state.profile.addresses);
    console.log("this is address",addresses);

    const handleUploadImage = (event) => {
        setPhotoFileName(event.target.files[0].name);
        setMainPhoto(event.target.files[0]);
    };

    const {classes} = props
    const handleChange = (e) => {
        const data = e.target.value;
        switch (e.target.name) {
            case 'product_location':
                setAddress(e.target.value);
                break;
            case 'title':
                setTitle(data);
                break;
            case 'price':
                setPrice(data);
                break;
            case 'sale_count':
                setSaleCount(data);
                break;
            case 'description':
                setDescription(data);
                break;
        }
    }
    useEffect(() => {
        dispatch(fetchCategories)
        dispatch(fetchAddresses());
    }, [])

    const handleInputCategories = (event, categories) => {
        let tempCategories = [];
        categories.map((category) => {
            tempCategories.push(category.id)
        });
        setCategories(tempCategories)
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.set('title', title);
        formData.append('price', price);
        formData.append('photo_main', photo_main);
        formData.append('description', description);
        formData.append('sale_count', sale_count);
        formData.append('available', available);
        formData.append('address', address);
        category.map(item=>{
            formData.append('category', item);
        })
        dispatch(addNewProduct(formData))
        dispatch(fetchMyProducts())
        history.push('/profile/products');
    }
    const {history} = useReactRouter();
    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3} className={classes.wrapper}>
                <Grid item md={6} xs={12}>
                    <TextField
                        name="title"
                        label="Product title"
                        fullWidth
                        value={title}
                        onChange={handleChange}
                        autoFocus
                    />
                </Grid>
                {/*<Grid item md={6} xs={12}>*/}
                {/*    <TextField*/}
                {/*        name="price"*/}
                {/*        label="Price"*/}
                {/*        fullWidth*/}
                {/*        value={price}*/}
                {/*        onChange={handleChange}*/}
                {/*    />*/}
                {/*</Grid>*/}

                {/*<Grid item md={6} xs={12}>*/}
                {/*    <TextField*/}
                {/*        name="sale_count"*/}
                {/*        label="Sale Count"*/}
                {/*        fullWidth*/}
                {/*        value={sale_count}*/}
                {/*        onChange={handleChange}*/}
                {/*    />*/}
                {/*</Grid>*/}
                <Grid item md={6} xs={12}>
                    <Autocomplete
                        multiple
                        id="category"
                        options={categoryOpetions}
                        disableCloseOnSelect
                        getOptionLabel={(option) => option.title}
                        renderOption={(option, {selected}) => (
                            <React.Fragment>
                                <Checkbox
                                    icon={icon}
                                    checkedIcon={checkedIcon}
                                    style={{marginRight: 8}}
                                    checked={selected}
                                />
                                {option.title}
                            </React.Fragment>
                        )}
                        renderInput={(params) => (
                            <TextField {...params} variant="outlined" label="Categories" placeholder="Favorites"/>
                        )}
                        onChange={handleInputCategories}
                    />
                </Grid>
                <Grid item md={12} xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<CloudUploadIcon/>}
                        style={{textTransform: 'none',height:50}}
                        component={"label"}
                        fullWidth
                    >
                        <input
                            type="file"
                            style={{display: "none"}}
                            accept="image/*"
                            onChange={(event) => handleUploadImage(event)}
                        />
                        Product photo
                    </Button>
                    {
                        photo_filename&&
                        <p className="bg-yellow-200 rounded-lg overflow-hidden mt-2 pl-3 py-1">{photo_filename}</p>
                    }

                </Grid>
                <Grid item md={12} xs={12}>
                    <TextField
                        name="description"
                        label="Description"
                        fullWidth
                        rows={4}
                        value={description}
                        onChange={handleChange}
                        variant="outlined"
                        multiline
                    />
                </Grid>

                <Grid item md={12} xs={12}>
                    {/*<AddPlace setCoordinates = {setCoordinates} title={"Product location"}/>*/}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Address</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            name="product_location"
                            value={address}
                            onChange={handleChange}
                        >
                            {
                                addresses.map((address,key)=>{
                                    return <MenuItem key={key} value={address.id}>{address.place_name}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item md={12} xs={12}>
                    <LoadingButton
                        type="submit"
                        fullWidth
                        color="primary"
                        // disabled={!dirty || loading || !isValid}
                        className={classes.button}
                    >
                        Create
                    </LoadingButton>
                </Grid>
            </Grid>
        </form>
    );
}

export default AddProductForm;