import React from "react";
import Input from "components/SearchBar/parts/Input";

const SearchInput = ({ location, setLocation }) => {
	const handleChange = e => setLocation(e.target.value);

	return (
		<Input
			onChange={handleChange}
			value={location}
			placeholder="city, country or zip"
		/>
	);
};

export default SearchInput;
