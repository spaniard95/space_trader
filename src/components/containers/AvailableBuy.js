import React, {useState, useEffect} from 'react';
import { Card } from "../cards";
import './containers.css';

//similar to AvailableItems component but it gets fetch data from Hoc withShipsFetch
const AvailableBuy = ({dataKey, data, loading ,error}) => {
  // const [items] = Object.values(dataKey); //get the key for the json
  
  if (error) return <div>Error: {error.message}</div>;
  
  return (loading)
    ?<div>Loading...</div>
    :<div>
        <p id="divider">Available loans</p>
        <ul class="flex-container">
        {data &&
            data[dataKey]?.map(item  => 
              <Card info={item} />
            )
        }
        </ul>
      </div>
    
}

export default AvailableBuy;