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
import {addNewProduct} from "../../../redux/actions/profileActions/MyProductActions";
import useReactRouter from "use-react-router";
import AddPlace from "../../../components/MapBox/AddPlace";

const icon = <CheckBoxOutlineBlankIcon fontSize="small"/>;
const checkedIcon = <CheckBoxIcon fontSize="small"/>;

function AddProductForm(props) {

    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.category);
    const [title, setTitle] = useState('');
    const [available, setAvailable] = useState(true);
    const [price, setPrice] = useState('');
    const [sale_count, setSaleCount] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategories] = useState([]);
    const [photo_main, setMainPhoto] = useState('');

    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');

    const [photo_filename, setPhotoFileName] = useState(null);

    const handleUploadImage = (event) => {
        setPhotoFileName(event.target.files[0].name);
        setMainPhoto(event.target.files[0]);
    };

    const {classes} = props
    const handleChange = (e) => {
        const data = e.target.value;
        switch (e.target.name) {
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
    }, [])

    const handleInputCategories = (event, categories) => {
        let tempCategories = [];
        categories.map((category) => {
            tempCategories.push(category.id)
        });
        setCategories(tempCategories)
    };
    const setCoordinates=(place)=>{
        console.log(place)
        setLongitude(place.center[0])
        setLatitude(place.center[1])
    }
    const handleSubmit = (e) => {
        console.log("when sub mit", category)
        e.preventDefault()
        let formData = new FormData();
        formData.set('title', title);
        formData.append('price', price);
        formData.append('photo_main', photo_main);
        formData.append('description', description);
        // formData.append('category', category);
        formData.append('sale_count', sale_count);
        formData.append('available', available);
        formData.append('longitude', longitude);
        formData.append('latitude', latitude);

        category.map(item=>{
            formData.append('category', item);
        })

        var str_arr = formData.get("category");

        console.log("this is new category array",str_arr); // string format

        dispatch(addNewProduct(formData))
        // history.push('/profile/products');
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
                <Grid item md={6} xs={12}>
                    <TextField
                        name="price"
                        label="Price"
                        fullWidth
                        value={price}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <TextField
                        name="sale_count"
                        label="Sale Count"
                        fullWidth
                        value={sale_count}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item md={6} xs={12}>
                    <Autocomplete
                        multiple
                        id="category"
                        options={categories}
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
                        style={{textTransform: 'none'}}
                        component={"label"}
                    >
                        <input
                            type="file"
                            style={{display: "none"}}
                            accept="image/*"
                            onChange={(event) => handleUploadImage(event)}
                        />
                        Product photo
                    </Button>
                    <p className="bg-yellow-300 rounded-lg overflow-hidden mt-2">{photo_filename}</p>
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
                    <AddPlace setCoordinates = {setCoordinates}/>
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