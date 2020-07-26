import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

// import LoadingButton from "@components/loading/LoadingButton";
import LoadingButton from "../../../../../components/loading/LoadingButton";
import AddPlace from "../../../../../components/MapBox/AddPlace";

const EditAddressForm = props => {
  console.log(props.address)
  const [longitude, setLongitude] = useState(props.address.longitude);
  const [latitude, setLatitude] = useState(props.address.latitude);
  const [place_name, setPlaceName] = useState(props.address.place_name);
  const [postal_code, setPostalCode] = useState(props.address.postal_code);

  // useEffect(()=>{
  //   setLongitude(props.address.longitude)
  //   setLatitude(props.address.latitude)
  //   setPlaceName(props.address.place_name)
  //   console.log("this is ",props.address.place_name)
  //   setPostalCode(props.address.postal_code)
  // },[props.address])

  const setCoordinates=(place)=>{
    setLongitude(place.center[0])
    setLatitude(place.center[1])
    setPlaceName(place.place_name)
  }

  const handleChange=(e)=>{
    setPostalCode(e.target.value)
  }




  const {handleClose, errors} = props
  const handleSubmit=()=>{
    props.handleSubmit({longitude,latitude,place_name,postal_code})
  }
  return (
    <React.Fragment>
      <DialogContent dividers>
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <div className="py-5">
              <AddPlace setCoordinates = {setCoordinates} defaultPlaceName={place_name}/>
            </div>
          </Grid>
          <TextField
              name={'latitude'}
              value={latitude}
              style={{display:'none'}}
          />
          <TextField
              name={'longitude'}
              value={longitude}
              style={{display:'none'}}
          />
          <Grid item md={12} xs={12}>
            <TextField
                label="Postal code"
                placeholder="Enter postal code with out dash"
                variant="outlined"
                margin="normal"
                name="postal_code"
                autoComplete="postal_code"
                helperText={errors.postal_code}
                error={Boolean(errors.postal_code)}
                value={postal_code}
                onChange={handleChange}
                required
                fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} size="large" variant="outlined">
          Cancel
        </Button>
        <LoadingButton
          onClick={handleSubmit}
          size="large"
          variant="outlined"
          color="primary"
        >
          Edit
        </LoadingButton>
      </DialogActions>
    </React.Fragment>
  );
};

export default EditAddressForm;
