import React from "react";
import { Button } from "react-bootstrap";
import { GrClose } from "react-icons/gr";

const CloseButton = ({ handler }) => {
  return (
    <Button onClick={() => handler(false)} className="p-1 close-btn">
      <GrClose />
    </Button>
  );
};

export default CloseButton;
