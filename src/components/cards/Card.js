import React from "react";

const Card = ({info}) => {
  return (
    <li >
      <ul>
        {Object.entries(info).map(
          ([key, value]) => 
            <li>{` ${key} : ${value}`}</li>
          )
        }
      </ul>
    </li>
  )
    
};

export default Card;