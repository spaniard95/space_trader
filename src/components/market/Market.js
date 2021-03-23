import React from 'react';
import { AvailableBuy } from '../containers';
import { withFetch } from "../hoc";
import './market.css';

const token = "8cd386ec-1c4c-4c0f-9a39-f175a2bc0f24";

const url = {
    ships : `https://api.spacetraders.io/game/ships?token=${token}`,
    loans : `https://api.spacetraders.io/game/loans?token=${token}`,
    takeLoan : `https://api.spacetraders.io/users/spaniard/loans?token=${token}`
};

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
                <button></button>
            </section>
        </div>
    );
};

 export default Market;