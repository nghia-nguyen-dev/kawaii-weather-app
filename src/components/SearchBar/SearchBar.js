import React, { useState } from "react";
import SearchIcon from "components/SearchBar/SearchIcon";
import SearchInput from "components/SearchBar/SearchInput";
import Form from "components/SearchBar/parts/Form";
import Tooltip from "components/SearchBar/parts/Tooltip";
import {
	fetchCoordinates,
	fetchWeatherData,
	extractWeather,
	extractLocation,
} from "utils/helper";
import { pipe } from "ramda";

const SearchBar = ({ setWeatherData, setLocation }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		fetchCoordinates(searchTerm)
			.then(location => {
				pipe(extractLocation, setLocation)(location);
				return location;
			})
			.then(fetchWeatherData)
			.then(pipe(extractWeather, setWeatherData))
			.catch(console.log);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<SearchIcon />
			<SearchInput
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>
			<Tooltip className="Tooltip">
				For places in the US, search by city + state + US
				<br /> or zipcode.
			</Tooltip>
		</Form>
	);
};

export default SearchBar;
