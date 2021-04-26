import React from "react";
import Input from "components/SearchBar/parts/Input";

const SearchInput = ({ searchTerm, setSearchTerm }) => {
	const handleChange = e => setSearchTerm(e.target.value);

	return (
		<Input
			onChange={handleChange}
			value={searchTerm}
			placeholder="city, country or zip"
		/>
	);
};

export default SearchInput;
