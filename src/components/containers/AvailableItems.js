import React, {useState, useEffect} from 'react';
import { Card } from "../cards";
import { useFetch } from '../../lib';
import './containers.css';

//deprecated
const AvailableItems = (dataKey) => {
  const { data, loading, error} = useFetch("https://api.spacetraders.io/game/loans?token=8cd386ec-1c4c-4c0f-9a39-f175a2bc0f24");
  const [items] = Object.values(dataKey);   //gives the key for the json
  
  if (error) return <div>Error: {error.message}</div>;
  
  return (loading)
    ?<div>Loading...</div>
    :<div>
        <p id="divider">Available loans</p>
        <ul class="flex-container">
          {data &&
            data[items].map(item  => 
              <Card info={item} />
            )
          }
        </ul>
      </div>
    
}

export default AvailableItems;