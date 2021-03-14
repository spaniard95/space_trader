import React from "react";
import { withHoverClick } from "../hoc";
import{ Card } from "../cards";
import Expand from "../expand";
import "./traderInfo.css";

const TraderInfo = ({data, loading, error}) => {
    const Ho = withHoverClick(Expand);
    
    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (loading) {
        return <div>Loading...</div>;
      } else {
        const co = withHoverClick(<Card info={data.user.username}/>);
        return (
          <div>
            <text>
              {data &&
                <ul class="trader-items">
                  <li>Trader: {data.user.username}</li>
                  <li onClick={() => console.log("afsd")}> #Ships : {data.user.ships.length}<br /></li>
                  {/* <Ho info={data.user.username}/> */}
                  <Expand/>
                  <li>Funds : {data.user.credits} </li>
                  <li> #Loans : {data.user.loans.length}   Total : {data.user.loans.reduce((loansT, loan) => loansT + loan, 0)}</li>
                </ul>
              }
            </text>
          </div>
        );
      }
}

export default TraderInfo;