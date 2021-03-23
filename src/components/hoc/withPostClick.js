import { postData } from "../../lib";

const token = "8cd386ec-1c4c-4c0f-9a39-f175a2bc0f24";

const options = (item) => {
  const {type, location} = item;

  console.log("item is " + type);
 
  return {
    method: 'post',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({type, location})  //ex data= {'type' : "STARTUP"}, {'type' : 'STARTUP', 'location' : 'OE-PM-TR'}
  };
};

const withPostClick = (Component, dataKey) => (props) => {
  const url = `https://api.spacetraders.io/users/spaniard/${dataKey}?token=${token}`;
  
  if (dataKey === "ships"){
    return <li><Component {...props} /></li> 
  }else{ 
    return <li onClick={() => postData(url, options(props.info))} id="hoc-item">  
      <Component {...props}/>
    </li>;
  }
}
  

export default withPostClick;
