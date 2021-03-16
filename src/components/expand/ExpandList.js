import "./expand.css";
import { Card } from "../cards";

const ExpandList = ({info}) => {
    
    return (true)?  //what should be the condition
         (info.map(item  => 
            <li class="new-items"><Card info={item} /></li>)
         )
            :<li>No items</li>
    
}
   
export default ExpandList;