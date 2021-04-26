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

export const fetchCoordinates = location => {
	const base = `http://api.openweathermap.org/geo/1.0/direct?`;
	return axios
		.get(base, {
			params: {
				q: location,
				limit: 1,
				appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
			},
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
	const base = `https://api.openweathermap.org/data/2.5/onecall?`;
	return axios.get(base, {
		params: {
			lat: coordinates.lat,
			lon: coordinates.lon,
			exclude: `minutely,hourly,alerts`,
			units: "imperial",
			appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
		},
	});
};

export const extractWeather = data => {
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
		coord: {
			lat: location.lat,
			lon: location.lon,
		},
	};
};