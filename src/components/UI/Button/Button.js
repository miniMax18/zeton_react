import React from "react";
import {Button} from '@material-ui/core';

const BasicButton = ({label, onClick}) => {
  return (
    <div className="padding">
      <Button onClick={onClick} variant="contained" color="primary">
        {label}
      </Button>
    </div>
  )
};

export default BasicButton;
