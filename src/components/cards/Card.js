import React from "react";
import "./card.css";
import { ExpandClick } from "../expand";

const Card = ({ info }) => {
  return (
   <ul>
      {Object.entries(info).map(
        ([key, value]) => 
          (typeof value!=="object")? //hoc can be used
            <li class="row-items">{` ${key} : ${value}`}</li> : 
            <ExpandClick data={info} dataKey={key} /> 
        )
      }
    </ul>
  );
};

export default Card;