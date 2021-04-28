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
import styled from "styled-components";

const US = styled.span`
	color: var(--warm-white);
`;

const SearchBar = ({ setWeatherData, setLocation, setError }) => {
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
			.catch(err => setError(err));
	};

	return (
		<Form onSubmit={handleSubmit}>
			<SearchIcon />
			<SearchInput
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
			/>
			<Tooltip className="Tooltip">
				For places in the US, search by <US>city + state + US</US>
				<br /> or zipcode alone.
			</Tooltip>
		</Form>
	);
};

export default SearchBar;
