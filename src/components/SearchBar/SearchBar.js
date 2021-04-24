import React, { useState } from "react";
import SearchIcon from "components/SearchBar/SearchIcon";
import SearchInput from "components/SearchBar/SearchInput";
import Form from "components/SearchBar/parts/Form";
import axios from "axios";

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
				lat: data[0].lat,
				lon: data[0].lon,
			};
		});
};

const SearchBar = () => {
	const [location, setLocation] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		fetchCoordinates(location).then(res => console.log(res));
	};

	return (
		<Form onSubmit={handleSubmit}>
			<SearchIcon />
			<SearchInput location={location} setLocation={setLocation} />
		</Form>
	);
};

export default SearchBar;
