import React from 'react';
import { AvailableBuy } from '../containers';
import { withFetch } from "../hoc";
import './market.css';

const url = {
    ships : "https://api.spacetraders.io/game/ships?token=7b6c05e1-7371-409d-a14a-39db9c8978e0",
    loans : "https://api.spacetraders.io/game/loans?token=7b6c05e1-7371-409d-a14a-39db9c8978e0"
}

const AvailableBuyShipFetch = withFetch(AvailableBuy, url.ships);     //hoc 
const AvailableBuyLoansFetch = withFetch(AvailableBuy, url.loans);    //hoc 

const Market = () => {
    return (
        <div>
            <t1 class="divider">Market</t1>
            <section class="lists-container">    
                <div class="list">
                    <t2 class="divider">Available Loans</t2>
                    <ul class="list-items">
                        <AvailableBuyLoansFetch dataKey="loans" />
                    </ul>
                </div>
                <div class="list">
                <t2 class="divider">Available ships</t2>
                    <ul class="list-items">
                        <AvailableBuyShipFetch dataKey="ships" />
                    </ul>
                </div>
            </section>
        </div>
    );
};

 export default Market;