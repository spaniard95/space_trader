import React, { useState, useEffect } from "react";
import { useFetch } from  '..//..//lib';
import "./traderInfo.css";

 const TraderInfo = () => {
  
  const {data, loading, error} = useFetch('https://api.spacetraders.io/users/spaniard?token=7b6c05e1-7371-409d-a14a-39db9c8978e0');

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <header id="header">SPACE TRADE CENTER</header>
        <text>
          {data &&
            <p>
              Trader: {data.user.username}<br />
              #Ships : {data.user.ships.length}<br />
              Funds : {data.user.credits} $<br />
              #Loans : {data.user.loans.length} Total : {data.user.loans.reduce((loansT, loan) => loansT + loan, 0)}$<br />
            </p>
          }
        </text>
      </div>
    );
  }
};

export default TraderInfo;


