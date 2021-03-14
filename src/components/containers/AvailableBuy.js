import React, {useState, useEffect} from 'react';
import { Card } from "../cards";
import './containers.css';


const AvailableBuy = ({dataKey, data, loading ,error}) => {
  
  if (error) return <div>Error: {error.message}</div>;
  
  return (loading)
    ?<div>Loading...</div>
    :<div>  
        {data &&
            data[dataKey]?.map(item  => 
              <li class="list-items"><Card info={item} /></li>
            )
        }   
      </div>
    
}

export default AvailableBuy;