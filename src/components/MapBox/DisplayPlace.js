import React, {useEffect, useState} from 'react';
import ReactMapGL,{ Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
function DisplayPlace(props) {
    const [mapViewport, setMapViewport] = useState({});
    useEffect(()=>{
        console.log(props.place)
        setMapViewport({
            longitude: props.place.center[0],
            latitude: props.place.center[1],
            zoom: 8
        })
    },[props.place])

    return (
        <ReactMapGL
            {...mapViewport}
            width='100%'
            height='450px'
            mapboxApiAccessToken="pk.eyJ1IjoiZXJuZWJ1dGEiLCJhIjoiY2s2bDVwYTRlMGFwdDNncGE0ZWdjaWZzMCJ9.2PppNmYQsYZ8HDSjEGwjCA"
            mapStyle="mapbox://styles/mapbox/streets-v10"
            onViewportChange={setMapViewport}

        >
            <Marker
                latitude={props.place.center[1]}
                longitude={props.place.center[0]}
            >
                <img src="https://img.icons8.com/color/48/000000/marker.png" width="40" height="40" style={{marginTop:-20,marginLeft:-20}}/>
            </Marker>
        </ReactMapGL>
    );
}

export default DisplayPlace;