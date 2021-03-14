import React from "react";
import "./card.css";

const Card = ({info}) => {
  return (
    <li >
      <ul>
        {Object.entries(info).map(
          ([key, value]) => 
            <li class="list-items">{` ${key} : ${value}`}</li>
          )
        }
        <button>buy</button>
      </ul>
    </li>
  )
    
};

export default Card;