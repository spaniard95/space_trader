import {  useFetch } from "../../lib";
import React from "react";

//it fetches loans for now
const withFetch = (Component, url) => (props) => {
    const {data , loading, error} = useFetch(url);
    
    return <Component {...props} data={data} loading={loading} error={error} />

} 

export default withFetch;