import React from "react";
import { withFetch } from "../hoc";
import TraderInfo from "../traderInfo";
import "./menu.css";

const url = { user : 'https://api.spacetraders.io/users/spaniard?token=5e58b0ac-1f71-47fd-ad68-0cd051fe3a34' }
const Trader =  withFetch(TraderInfo, 'https://api.spacetraders.io/users/spaniard?token=5e58b0ac-1f71-47fd-ad68-0cd051fe3a34');
 
const Menu = () => {
  return (
      <div>
        <header id="header">SPACE TRADE CENTER</header>
       <Trader />
      </div>
    );
};

export default Menu;


