

async function postData(url, options) {
    
    const response = await fetch(url, options);
    return response.json(); 
}


export default postData;