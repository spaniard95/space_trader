import React from "react";
import { withFetch } from "../hoc";
import TraderInfo from "../traderInfo";
import "./menu.css";

const url = { user : 'https://api.spacetraders.io/users/spaniard?token=7b6c05e1-7371-409d-a14a-39db9c8978e0' }
const Trader =  withFetch(TraderInfo, 'https://api.spacetraders.io/users/spaniard?token=7b6c05e1-7371-409d-a14a-39db9c8978e0');
 
const Menu = () => {
  return (
      <div>
        <header id="header">SPACE TRADE CENTER</header>
       <div><Trader /></div> 
      </div>
    );
};

export default Menu;


