import React, { useState, useEffect } from "react";


 const TraderInfo = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [trader, setTrader] = useState(null);

  useEffect(async () => {
    await fetch('https://api.spacetraders.io/users/spaniard?token=24718f66-093b-4575-a119-503fd47b9beb', {
      method:"GET"
    })
      .then(res => res.json())
      .then(
        data => {
          setIsLoaded(true);
          setTrader(data.user);
          console.log(data.user)
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <text>
          {trader &&
            <p>
              Trader: {trader.username}<br />
              #Ships : {trader.ships.length}<br />
              Funds : {trader.credits}<br />
              #Loans : {trader.loans.length} Total : {trader.loans.reduce((loansT, loan) => loansT + loan, 0)}<br />
            </p>
          }
        </text>
      </div>
    );
  }
};

export default TraderInfo;


