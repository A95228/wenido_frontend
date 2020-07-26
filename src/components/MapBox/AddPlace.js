import React from 'react';
import Typography from "@material-ui/core/Typography";
import AutocompletePlace from "./AutocompletePlace";
import DisplayPlace from "./DisplayPlace";
function AddPlace(props) {
    const [place, setPlace] = React.useState(null)
    const handleSelect = place => {
        setPlace( place )
        props.setCoordinates(place)
    }
    return (
        <div>
            <Typography>{props.title}</Typography>
            <AutocompletePlace onSelect={handleSelect} defaultValue={props.defaultPlaceName}/>
            {!place && <Typography variant="caption" style={{paddingLeft:10}}>No place selected</Typography>}
            {
                place && <div className="flex">
                    <DisplayPlace place={place}/>
                </div>
            }
        </div>
    );
}

export default AddPlace;