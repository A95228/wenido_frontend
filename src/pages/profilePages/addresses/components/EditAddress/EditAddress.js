import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";

import EditAddressForm from "./EditAddressForm";
import DialogTitle from "../../../../../components/layouts/DialogTitle";
import { updateAddress } from "../../../../../redux/actions/profileActions/AddressActions";
import CreateAddressForm from "../CreateAddress/CreateAddressForm";

const EditAddress = ({ open, setOpen, address }) => {
  const {
    id,
    postal_address,
    postal_code
  } = address;

  const dispatch = useDispatch();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [errors, setErrors] = useState([])
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (address) => {
    dispatch(updateAddress(address, id, setErrors, handleClose));
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      maxWidth="md"
    >
      <DialogTitle onClose={handleClose}>Edit Address</DialogTitle>
      <EditAddressForm handleClose={handleClose} handleSubmit={handleSubmit} errors={errors} address={address} />
    </Dialog>
  );
};

export default EditAddress;
