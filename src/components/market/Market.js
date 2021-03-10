import React from 'react';
import { AvailableLoans } from '../containers';
import './market.css';

function Market() {
    return (
        <div>
            <p>Market</p>
            <ul className="flex-container">
                <AvailableLoans />
                <AvailableLoans />
            </ul>    
        </div>
    );
};

 export default Market;