// console.log("sanity check");

// Get Quote from API
async function getQuote() {
	const proxyUrl = "https://cors-anywhere.herokuapp.com/";
	const apiUrl =
		"https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
	try {
		const response = await fetch(proxyUrl + apiUrl);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		// getQuote();
		console.log("whoops! No Quote", error);
	}
}

// Going to work on a seperate projet for now... not able to get the api to work except through postman.

// Run Function OnLoad
getQuote();

/*
One issue the api caused was a CORS error. To get a around this, I used the proxy link first and then called the apiUrl;
- the next issue is the api wasn't made in the best manner. Now, not only do I get the proxy issue, I am getting a 429 error with an unexpected token in JSON
  - to bypass/temporarily bypass, if we get this error, I made the function recall the function again. --> but this caused another errror which was a never-ending
    loop.
*/
