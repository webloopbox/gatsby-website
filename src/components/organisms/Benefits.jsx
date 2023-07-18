import React from "react";
import { Container, Button } from "react-bootstrap";
import BoxIcon from "../../assets/box.svg";
import PeopleIcon from "../../assets/people.svg";
import FurnitureIcon from "../../assets/furniture.svg";
import PersonIcon from "../../assets/person.svg";
import CoffeeIcon from "../../assets/coffee.svg";
import WalletIcon from "../../assets/wallet.svg";
import TableIcon from "../../assets/table.svg";
import RightArrow from "../../assets/arrow-right.svg";

const Benefits = () => {
  return (
    <Container className="g-0 benefits-wrapper">
      <div>
        <span className="m-0">
          Lorem <br />
          ipsum
          <br /> dolor sit <br />
          amet, <br />
          conse
        </span>
        <span className="divider"></span>
      </div>
      <div>
        <WalletIcon />
        <span>Lorem ipsum</span>
      </div>
      <div>
        <CoffeeIcon />
        <span>
          Lorem ipsum <br />
          dolor sit amet conse
        </span>
      </div>
      <div>
        <FurnitureIcon />
        <span>
          Lorem ipsum <br />
          dolor sit amet,
        </span>
      </div>
      <div>
        <PersonIcon />
        <span>
          Lorem ipsum <br />
          dolor sit amet,
        </span>
      </div>
      <div>
        <TableIcon />
        <span>
          Lorem ipsum dolor
          <br /> sit amet, conse
          <br /> lorem ipsum lorem
        </span>
      </div>
      <div>
        <BoxIcon />
        <span>
          Lorem ipsum dolor <br />
          sit amet, conse <br />
          lorem ipsum lorem
        </span>
      </div>
      <div>
        <PeopleIcon />
        <span>
          Lorem ipsum dolor
          <br /> sit amet, conse
          <br /> lorem ipsum
        </span>
      </div>
      <Button className="py-0">
        <span className="m-0">Dowiedz się więcej</span>
        <span className="m-0">
          <RightArrow />
        </span>
      </Button>
    </Container>
  );
};

export default Benefits;