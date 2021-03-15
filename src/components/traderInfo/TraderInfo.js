import React, { useState } from "react";
import { withHoverClick } from "../hoc";
import{ Card } from "../cards";
import Expand from "../expand";
import "./traderInfo.css";

const TraderInfo = ({data, loading, error}) => {
    const Ho = withHoverClick(Expand);

    const [shipsExpand, setShipsExpand] = useState(false);
    
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (loading) {
        return <div>Loading...</div>;
      } else {
        const Ho = withHoverClick(<Card info={data.user.username}/>);
        return (
          <div>
            <text>
              {data &&
                <ul class="trader-items">
                  <li>Trader: {data.user.username}</li>
                  <li>Funds : {data.user.credits} </li>
                  <li id="ships-item" onClick= {() => {setShipsExpand(prev => !prev)}}>Ships: {shipsExpand ? <Expand info={data.user.ships}/>: null }<br /></li>
                  <li id="loans-item"> Loans : {data.user.loans.length} </li>
                  {/* Total : {data.user.loans.reduce((loansT, loan) => loansT + loan, 0)} */}
                </ul>
              }
            </text>
          </div>
        );
      }
}

export default TraderInfo;