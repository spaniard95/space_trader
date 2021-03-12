import {  useFetch } from "../../lib";
import React from "react";

//it fetches loans for now
const withShipsFetch = (Component) => (props) => {
    const {data , loading, error} = useFetch("https://api.spacetraders.io/game/loans?token=7b6c05e1-7371-409d-a14a-39db9c8978e0");
    console.log(props?.dataKey)
    return <Component {...props} data={data} loading={loading} error={error} />

} 

export default withShipsFetch;