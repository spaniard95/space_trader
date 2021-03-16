import { useState } from "react";
import "./expand.css";
import ExpandList from "./ExpandList";

const ExpandClick = ({data, dataKey}) => {
    
    const [expand, setExpand] = useState(false);
    // const numItems = data[dataKey].length;
    return (
        <li id="expand-item" 
            onClick= {() => {setExpand(prev => !prev)}}>
                {dataKey}: {expand ? <ExpandList info={data[dataKey]}/> : null }
        </li>
    );
}

export default ExpandClick;