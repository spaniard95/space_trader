import "./hoc.css";

const withHoverClick = (Component) => (props) => {
    return ( 
     <Component {...props} onClick={() => console.log("clicked")} />
    )
}

export default withHoverClick;