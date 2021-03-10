import React, {useState, useEffect} from 'react';
import { Card } from "../cards";
import { useFetch } from '../../lib';
import './containers.css';

const AvailableLoans = () => {
  const { data, loading, error} = useFetch("https://api.spacetraders.io/game/loans?token=7b6c05e1-7371-409d-a14a-39db9c8978e0")
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <p>Available loans</p>
        <ul>
          {data &&
            data.loans.map(loan  => 
              <Card info={loan} />
            )
             
          }
        </ul>
      </div>
    );
  }
 }

export default AvailableLoans;