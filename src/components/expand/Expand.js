import "./expand.css";
import { Card } from "../cards";

const Expand = ({info}) => {
    
    if (info==null) {
        return (info.map(item  => 
            <li class="list-items"><Card info={item} /></li>)
        )
    } else {
        return" no ships"
    }
}
   


export default Expand;