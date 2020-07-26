import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import {makeStyles} from "@material-ui/core/styles";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import useReactRouter from "use-react-router";
const useStyles = makeStyles(theme => ({
    chip: {
        marginRight:2,
        marginBottom:2,
        color:"black",
        fontSize:10,
        height:18,
    },
    locationIcon:{
        color:'#757575',
        fontSize:20
    }
}))
function ProductCard(props) {
    const { history, location } = useReactRouter();
    const handleItemClick = ()=>{
        history.push('/products/'+props.product.slug)
    }
    const [product, setProduct]=useState(props.product)
    useEffect(()=>{
        setProduct(props.product)
    },[props.product])
    const classes = useStyles();
    return (
        <div className="p-2 shadow border cursor-pointer hover:bg-yellow-200" onClick={handleItemClick}>
            <Grid container>
                <Grid item xs={4}>
                    <img src={product.photo_main} alt="product image" className="h-full w-32"/>
                </Grid>
                <Grid item xs={8}>
                    <div className="flex flex-col pl-2">
                        <p className="text-sm text-blue-500 font-bold w-full overflow-x-auto mb-2">{product.title}</p>
                        <div>
                            {
                                product.category.map((category,key)=>{
                                    return <Chip key={key} label={category} color="primary" className={classes.chip} size={"small"} variant={"outlined"}/>
                                })
                            }
                        </div>
                        <div className="flex pt-1 items-center">
                            <LocationOnIcon className={classes.locationIcon}/>
                            <p className="text-sm pl-2">{product.address.place_name}</p>
                        </div>
                        <div className="flex pt-1 items-center">
                            <PersonIcon className={classes.locationIcon}/>
                            <p className="text-sm pl-2">{product.manager_data.fullname=='None None'?"- -":product.manager_data.fullname}</p>
                        </div>
                        <div className="flex pt-1 items-center">
                            <PhoneIcon className={classes.locationIcon}/>
                            <p className="text-sm pl-2">{!product.manager_data.phone_number?"-":product.manager_data.phone_number}</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default ProductCard;