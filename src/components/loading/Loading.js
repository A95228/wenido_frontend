import React from "react";
import { useSelector } from "react-redux";

import LoadingDialog from "./LoadingDialog";

const Loading = ({ inFetching }) => {
  const open = useSelector(state => state.ui.loadingUI);
  if (inFetching) {
    return <LoadingDialog open={open || false} />;
  }
  return <LoadingDialog open={true} />;
};

export default Loading;
