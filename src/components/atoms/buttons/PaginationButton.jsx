import React from "react";
import { Button } from "react-bootstrap";
import LeftArrow from "../../../assets/arrow-left.svg";
import RightArrow from "../../../assets/arrow-right.svg";

const PaginationButton = ({ type, handler, value }) => {
  let btn = null;

  switch (type) {
    case "prev": {
      btn = (
        <Button
          className="p-0 m-0 rounded-0 btn-outline-light pagination-button"
          onClick={() => handler(value)}
        >
          <LeftArrow />
        </Button>
      );
      break;
    }
    case "next": {
      btn = (
        <Button
          className="p-0 m-0 rounded-0 btn-outline-light pagination-button"
          onClick={() => handler(value)}
        >
          <RightArrow />
        </Button>
      );
      break;
    }
  }
  return btn;
};

export default PaginationButton;
