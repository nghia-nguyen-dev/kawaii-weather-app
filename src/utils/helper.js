import { slice, map, compose } from "ramda";
import axios from "axios";

export const toCelsius = f => ((f - 32) * 5) / 9;
export const renderedTemp = (isCelsius, temp) =>
	Math.round(isCelsius ? toCelsius(temp) : temp);

/* To determine meter width in css (wind speed in mph)
 ** max width of bar is 100%
 ** max wind speed 75
 ** need to use a multiplier
 */
const maxWindSpeed = 75;
export const multiplier = 100 / maxWindSpeed;

const formatStr = location => location.toUpperCase().replaceAll(" ", ",");

export const fetchCoordinates = location => {
	const URL = `/.netlify/functions/geo?`;
	return axios
		.get(URL, {
			params: { q: formatStr(location) },
		})
		.then(({ data }) => {
			return {
				city: data[0].name,
				state: data[0].state,
				country: data[0].country,
				lat: data[0].lat,
				lon: data[0].lon,
			};
		});
};

export const fetchWeatherData = coordinates => {
	const URL = `/.netlify/functions/onecall?`;
	return axios.get(URL, {
		params: {
			lat: coordinates.latitude,
			lon: coordinates.longitude,
		},
	});
};

export const extractWeather = ({ data }) => {
	return {
		current: {
			temp: data.current.temp,
			clouds: data.current.clouds,
			humidity: data.current.humidity,
			windSpeed: data.current.wind_speed,
			weatherID: data.current.weather[0].id,
		},
		daily: compose(
			map(day => day.temp.day),
			slice(0, 5)
		)(data.daily),
	};
};

export const extractLocation = location => {
	return {
		city: location.city,
		state: location.state,
		country: location.country,
		coords: {
			latitude: location.lat,
			longitude: location.lon,
		},
	};
};

export const askForPos = () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject, {
			enableHighAccuracy: true,
		});
	});
};

export const extractCoords = ({ coords }) => {
	const { latitude, longitude } = coords;
	return {
		latitude,
		longitude,
	};
};

export const renderedLocation = ({ city, state, country }) => {
	if (!city) return null;
	return `${city}, ${state || country}`;
};

// export const getDay = index => {
// 	// SUN index = 3 ----- + 1
// 	const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// 	const td = new Date().getDay(); // td = 3/WED
// 	let pointer = td;
// 	let counter = index + 1;

// 	while(counter > 0) {
// 		pointer++
// 		counter--
// 		if (pointer > days.length - 1) pointer = 0;
// 	}

// 	return days[pointer]

// };

export const getDay = index => {
	const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	const td = new Date().getDay();
	const itemWithinArray = days[td + (index + 1)];
	return itemWithinArray || days[index - td];
};
