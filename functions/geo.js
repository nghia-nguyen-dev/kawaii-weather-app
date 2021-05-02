const process = require("process");

const axios = require("axios");
const qs = require("qs");

const handler = async function (event) {
	// apply our function to the queryStringParameters and assign it to a variable
	const { q } = event.queryStringParameters;
	// Get env var values defined in our Netlify site UI

	// TODO: customize your URL and API keys set in the Netlify Dashboard
	// this is secret too, your frontend won't see this
	const { REACT_APP_OPEN_WEATHER_KEY } = process.env;
	const URL = `http://api.openweathermap.org/geo/1.0/direct?`;

	try {
		const { data } = await axios.get(URL, {
			params: {
				q,
				limit: 1,
				appid: REACT_APP_OPEN_WEATHER_KEY,
			},
		});
		// refer to axios docs for other methods if you need them
		// for example if you want to POST data:
		//    axios.post('/user', { firstName: 'Fred' })
		return {
			statusCode: 200,
			body: JSON.stringify(data),
		};
	} catch (error) {
		const { status, statusText, headers, data } = error.response;
		return {
			statusCode: error.response.status,
			body: JSON.stringify({ status, statusText, headers, data }),
		};
	}
};

module.exports = { handler };
