import React, {useEffect, useState} from 'react';
import ReactMapGL, {Marker,Popup} from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import RoomIcon from '@material-ui/icons/Room';
import {fetchProducts} from "../../redux/actions/productActions";
import {useDispatch, useSelector} from "react-redux";
import useReactRouter from "use-react-router";

function DisplayPlace(props) {
    const [mapViewport, setMapViewport] = useState({});
    const [popupProduct, setPopupProduct] = useState(null);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    const products = useSelector(state => state.products.products);

    useEffect(() => {
        if (props.place) {
            setMapViewport({
                longitude: props.place.center[0],
                latitude: props.place.center[1],
                zoom: 8
            })
        }
    }, [props.place])
    useEffect(() => {
        if (props.places && props.places.length > 0) {
            setMapViewport({
                longitude: props.places[0][0],
                latitude: props.places[0][1],
                zoom: 1
            })
        }
    }, [props.places])
    const { history } = useReactRouter();
    const popupProductShow = () =>{
        if(popupProduct)
        {
            console.log(popupProduct)
            // return <img src={"http://localhost:8000/media/product_photos/2020/07/27/6.webp"} width="150" height="150"/>
            return <Popup
                key={`popup-${popupProduct.id}`}
                longitude={popupProduct.address.longitude}
                latitude={popupProduct.address.latitude}
            >
                <div>
                    <p>A pretty CSS3 popup. <br/> Easily customizable.</p>
                    <img src={popupProduct.photo_main} width="80" height="80" onClick={()=>{history.push('/products/'+popupProduct.slug)}}/>
                </div>
            </Popup>
        }

    }
    return (
        <ReactMapGL
            {...mapViewport}
            width='100%'
            height='450px'
            mapboxApiAccessToken="pk.eyJ1IjoiZXJuZWJ1dGEiLCJhIjoiY2s2bDVwYTRlMGFwdDNncGE0ZWdjaWZzMCJ9.2PppNmYQsYZ8HDSjEGwjCA"
            mapStyle="mapbox://styles/mapbox/streets-v10"
            onViewportChange={setMapViewport}
            onClick={()=>{ setPopupProduct(null)}}
        >
            {
                props.places && props.places.length > 0 &&
                props.places.map((place, key) => {
                    return <Marker
                        latitude={place[1]}
                        longitude={place[0]}
                    >
                        {/*<img src="https://img.icons8.com/color/48/000000/marker.png" width="40" height="40" style={{marginTop:-20,marginLeft:-20}}/>*/}
                        <RoomIcon style={{color: '#f50057',cursor:'pointer'}} onMouseOver={() => {
                            setPopupProduct(products[key])
                        }}/>
                    </Marker>
                })
            }
            {
                popupProductShow()
            }
            {
                props.place &&
                <Marker
                    latitude={props.place.center[1]}
                    longitude={props.place.center[0]}
                >
                    {/*<img src="https://img.icons8.com/color/48/000000/marker.png" width="40" height="40" style={{marginTop:-20,marginLeft:-20}}/>*/}
                    <RoomIcon style={{color: '#f50057'}}/>
                </Marker>
            }

        </ReactMapGL>
    );
}

export default DisplayPlace;