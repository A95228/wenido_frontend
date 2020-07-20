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
            <Typography>Product's location</Typography>
            <AutocompletePlace onSelect={handleSelect} />
            {!place && <p className="text-sm">No place selected</p>}
            {
                place && <div className="flex">
                    <DisplayPlace place={place}/>
                </div>
            }
        </div>
    );
}

export default AddPlace;