import React, { useState } from "react";
import SearchIcon from "components/SearchBar/SearchIcon";
import Input from "components/SearchBar/Input";
import styled from "styled-components";

const Form = styled.form`
	grid-column: 1/3;
	height: max-content;
	width: 60%;
`;

const SearchBar = () => {
	const [location, setLocation] = useState("");
	const handleChange = e => setLocation(e.target.value);

	return (
		<Form>
			<SearchIcon />
			<Input
				onChange={handleChange}
				value={location}
				placeholder="city, country or zip"
			></Input>
		</Form>
	);
};

export default SearchBar;
