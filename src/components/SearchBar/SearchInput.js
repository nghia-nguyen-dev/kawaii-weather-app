import React from "react";
import Input from "components/SearchBar/parts/Input";
import { compose, toUpper } from "ramda";

const SearchInput = ({ searchTerm, setSearchTerm }) => {
	const handleChange = e => {
		compose(setSearchTerm, toUpper)(e.target.value);
	};

	return (
		<Input
			onChange={handleChange}
			value={searchTerm}
			placeholder="city, country or zip"
		/>
	);
};

export default SearchInput;
