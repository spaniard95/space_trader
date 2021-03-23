import React from "react";
import { withFetch } from "../hoc";
import TraderInfo from "../traderInfo";
import "./menu.css";

const url = { user : 'https://api.spacetraders.io/users/spaniard?token=8cd386ec-1c4c-4c0f-9a39-f175a2bc0f24' }
const Trader =  withFetch(TraderInfo, 'https://api.spacetraders.io/users/spaniard?token=8cd386ec-1c4c-4c0f-9a39-f175a2bc0f24');
 
const Menu = () => {
  return (
      <div>
        <header id="header">SPACE TRADE CENTER</header>
        {/* <Button>fasd</Button> */}
        <Trader />
      </div>
    );
};

export default Menu;


