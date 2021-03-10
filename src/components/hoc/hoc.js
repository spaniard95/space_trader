import react from "react";

const hoc = (Component) => (props) => {
    return ( 
     <Component {...props} id={3}/>
    )
}

export default hoc;