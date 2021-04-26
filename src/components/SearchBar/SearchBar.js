import React, { useState } from "react";
import SearchIcon from "components/SearchBar/SearchIcon";
import SearchInput from "components/SearchBar/SearchInput";
import Form from "components/SearchBar/parts/Form";
import {
	fetchCoordinates,
	fetchWeatherData,
	extractWeather,
	extractLocation,
} from "utils/helper";
import { compose } from "ramda";

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
			.then(res => compose(setWeatherData, extractWeather)(res.data))
			.catch(err => console.log(err));
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
