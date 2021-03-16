import React from "react";
import "./card.css";
import { ExpandClick } from "../expand";

const Card = ({info}) => {
  return (
    <li >
      <ul>
        {Object.entries(info).map(
          ([key, value]) => 
            (typeof value!=="object")? 
              <li class="row-items">{` ${key} : ${value}`}</li> : 
              <ExpandClick data={info} dataKey={key}/>
            // <li class="list-items">{` ${key} : ${value}`}</li>
          )
        }
      </ul>
    </li>
  )
    
};

export default Card;