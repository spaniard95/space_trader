import { useState } from "react";
import "./expand.css";
import ExpandList from "./ExpandList";

//hoc can be used
const ExpandClick = ({data, dataKey, type}) => {
    const [expand, setExpand] = useState(false);
    console.log(data)
    return (
        <li id="expand-item">
            <button id="expand-button" onClick={() => setExpand(prev => !prev)}>+</button>
            {dataKey}: {expand ? 
                <li><ExpandList info={data[dataKey]}/></li>
                : 
                null 
            }
        </li> 
    );
};

export default ExpandClick;