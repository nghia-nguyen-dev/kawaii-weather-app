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
			lat: coordinates.lat,
			lon: coordinates.lon,
		},
	});
};

export const extractWeather = ({ data }) => {
	const {temp, clouds, humidity, wind_speed: windSpeed, weather} = data.current;

	return {
		current: {
			temp,
			clouds,
			humidity,
			windSpeed,
			weatherID: weather[0].id,
			main: weather[0].main.toLowerCase(),
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
			lat: location.lat,
			lon: location.lon,
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
	return {
		lat: coords.latitude,
		lon: coords.longitude,
	};
};

export const renderedLocation = ({ city, state, country }) => {
	if (!city) return null;
	return `${city}, ${state || country}`;
};

export const getDay = index => {
	const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	const td = new Date().getDay();
	const withinArray = days[td + (index + 1)];
	return withinArray || days[td + index - (days.length - 1)];
};
