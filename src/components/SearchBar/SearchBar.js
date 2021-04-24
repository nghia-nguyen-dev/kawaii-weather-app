import React, { useState } from "react";
import SearchIcon from "components/SearchBar/SearchIcon";
import SearchInput from "components/SearchBar/SearchInput";
import styled from "styled-components";

const Form = styled.form`
	grid-column: 1/3;
	height: max-content;
	width: 60%;
	@media (max-width: 1016px) {
		width: 75%;
	}
	@media (max-width: 744px) {
		width: 100%;
	}
`;

const SearchBar = () => {
	const [location, setLocation] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		console.log(location);
	};

	return (
		<Form onSubmit={handleSubmit}>
			<SearchIcon />
			<SearchInput location={location} setLocation={setLocation} />
		</Form>
	);
};

export default SearchBar;
