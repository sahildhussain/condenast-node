const fetch = require('node-fetch');
let keyData = require("../keys");
const countryUrl = "https://newsapi.org/v2/top-headlines?";
const searchUrl = "https://newsapi.org/v2/everything?"

newsService = (data) => {
	let url = customUrl(data);
	console.log(url)
    return new Promise((resolve, reject)=>{
        fetch(url)
		.then(result => {
            resolve(result)
		}).catch(err=>reject(err))
    })
};

let customUrl = (data={country: 'gb'}) => {
	let url
	if(data.q)
	url = searchUrl
	else
	url = countryUrl
	data = {...data, ...keyData}
	
	console.log("baseUrl:"+ url)
	return (
		url + 
		Object.entries(data)
			.map(([key, val]) => key + "=" + val)
			.join("&")
	);
};

module.exports = {newsService}
