import React, { useState } from "react";
import SearchIcon from "components/SearchBar/SearchIcon";
import SearchInput from "components/SearchBar/SearchInput";
import Form from "components/SearchBar/parts/Form";
import axios from "axios";
import { slice, map, compose } from "ramda";

const fetchCoordinates = location => {
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

const fetchWeatherData = coordinates => {
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

const extractWeather = data => {
	return {
		current: {
			temp: data.current.temp,
			clouds: data.current.clouds,
			windSpeed: data.current.wind_speed,
			weatherID: data.current.weather[0].id,
		},
		daily: compose(map(day => day.temp.day), slice(0, 5))(data.daily),
	};
};

const extractLocation = location => {
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

const SearchBar = ({ setWeatherData, setLocation }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSubmit = e => {
		e.preventDefault();

		fetchCoordinates(searchTerm)
			.then(location => {
				compose(setLocation, extractLocation)(location);
				return location;
			})
			.then(fetchWeatherData)
			.then(res => compose(setWeatherData, extractWeather)(res.data));
	};

	return (
		<Form onSubmit={handleSubmit}>
			<SearchIcon />
			<SearchInput
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>
		</Form>
	);
};

export default SearchBar;
