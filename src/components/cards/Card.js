import React from "react";
import "./card.css";

const Card = ({info}) => {
  return (
    <li >
      <ul>
        {Object.entries(info).map(
          ([key, value]) => 
            <li class="flex-item">{` ${key} : ${value}`}</li>
          )
        }
      </ul>
    </li>
  )
    
};

export default Card;