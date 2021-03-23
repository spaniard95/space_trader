import React, {useState, useEffect} from 'react';
import { Card } from "../cards";
import { withPostClick} from "../hoc";
import './containers.css';

const AvailableBuy = ({dataKey, data, loading ,error}) => {
  const PostClick = withPostClick(Card, dataKey);
  
  if (error) return <div>Error: {error.message}</div>;
  
  return (loading)
    ?<div>Loading...</div>
    :<div>  
      {data &&
        data[dataKey]?.map(item  => 
          <li class="container-items">
              <PostClick info={item} />
          </li>
        )
      }   
    </div>
}

export default AvailableBuy;