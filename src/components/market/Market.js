import React from 'react';
import Loans from './containers/Loans';
import { useState, useEffect } from "react";
import './market.css';

function Market() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loans, setLoans] = useState(null);

    useEffect(async () => {
        await fetch('https://api.spacetraders.io/game/loans?token=24718f66-093b-4575-a119-503fd47b9beb', {
            method:"GET"
        })
        .then(res => res.json())
        .then(
            data => {
                setIsLoaded(true);
                setLoans(data.loans);
                console.log(data.loans);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
            }
        )
    }, []);

    return (
        <div>
            <ul class="flex-container">
                <li> <Loans /> </li>
                <li> <Loans /> </li>
            </ul>    
        </div>
    );
};

 export default Market;