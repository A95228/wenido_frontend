import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

import LoadingButton from "../../../../../components/loading/LoadingButton";
import AddPlace from "../../../../../components/MapBox/AddPlace";

const CreateAddressForm = props => {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [place_name, setPlaceName] = useState('');
  const [postal_code, setPostalCode] = useState('');
  const {handleClose, errors} = props
  const setCoordinates=(place)=>{
    setLongitude(place.center[0])
    setLatitude(place.center[1])
    setPlaceName(place.place_name)
  }
  const handleChange=(e)=>{
    setPostalCode(e.target.value)
  }
  const handleSubmit=()=>{
    props.handleSubmit({longitude,latitude,place_name,postal_code})
  }
  return (
    <React.Fragment>
      <DialogContent dividers className="min-h-full">
        <Grid container spacing={2}>
          <Grid item md={12} xs={12}>
            <div className="py-5">
              <AddPlace setCoordinates = {setCoordinates}/>
            </div>
          </Grid>
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
          Add
        </LoadingButton>
      </DialogActions>
    </React.Fragment>
  );
};

export default CreateAddressForm;
