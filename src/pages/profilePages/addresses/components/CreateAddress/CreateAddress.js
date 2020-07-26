import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";

import CreateAddressForm from "./CreateAddressForm";
import DialogTitle from "../../../../../components/layouts/DialogTitle";
import { createAddress } from "../../../../../redux/actions/profileActions/AddressActions";

const CreateAddress = ({ fullScreen, open, handleClose, onSubmit }) => {
  const theme = useTheme();
  const responsiveFullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([])
  const handleSubmit = (address) => {
    dispatch(createAddress(address, setErrors,onSubmit || handleClose));
  };

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen || responsiveFullScreen}
        open={open}
        onClose={handleClose}
        fullWidth
      >
        <DialogTitle onClose={handleClose}>Add Address</DialogTitle>
        <CreateAddressForm handleClose={handleClose} handleSubmit={handleSubmit} errors={errors}/>
      </Dialog>
    </React.Fragment>
  );
};

export default CreateAddress;
