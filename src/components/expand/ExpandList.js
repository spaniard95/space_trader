import { Card } from "../cards";
import "./expand.css";
import { withPostClick } from "../hoc";

const ExpandList = ({info}) => {
   const PostClickCard = withPostClick(Card) 
   //add in future hoc with click on Expandable  
   
   return (true)?  
         (info.map(item  => 
            <li class="new-items"><PostClickCard info={item} /></li>))
            :
            <li>No items</li>   
};
   
export default ExpandList;
