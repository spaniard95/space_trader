import React from 'react';
import { AvailableItems, AvailableBuy } from '../containers';
import { withShipsFetch } from "../hoc";
import './market.css';

const AvailableBuyWithFetch = withShipsFetch(AvailableBuy); //hoc that fetches loans for now, does the same as AvailableItems component

function Market() {
  

    return (
        <div>
            <p id="divider">Market</p>
            <ul class="flex-container">
                <AvailableItems dataKey={"loans"} />
                <AvailableBuyWithFetch dataKey="loans" />
            </ul>    
        </div>
    );
};

 export default Market;