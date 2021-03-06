import React, { useState } from "react";
import SearchIcon from "components/SearchBar/SearchIcon";
import SearchInput from "components/SearchBar/SearchInput";
import Form from "components/SearchBar/parts/Form";
import Tooltip from "components/SearchBar/parts/Tooltip";
import Highlight from "components/SearchBar/parts/Highlight";
import {
	fetchCoordinates,
	fetchWeatherData,
	extractWeather,
	extractLocation,
	extractCoords,
} from "utils/helper";



const SearchBar = ({ setWeatherData, setLocation }) => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		fetchCoordinates(searchTerm)
			.then(extractLocation)
			.then(location => {
				setLocation(location);
				return location;
			})
			.then(extractCoords)
			.then(fetchWeatherData)
			.then(extractWeather)
			.then(setWeatherData)
			.catch(setWeatherData);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<SearchIcon />
			<SearchInput
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>
			<Tooltip className="Tooltip">
				For places in the US, search by{" "}
				<Highlight>city + state + US</Highlight> or zipcode alone.
			</Tooltip>
		</Form>
	);
};

export default SearchBar;
