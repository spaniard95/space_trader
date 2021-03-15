import { useState } from "react";
import "./hoc.css";

const withHoverClick = (Component) => (props) => {
    const [expand, setExpand] = useState(false);
    
    return ( 
     <Component {...props} onClick={() => console.log("clicked")} />
    )
}

export default withHoverClick;