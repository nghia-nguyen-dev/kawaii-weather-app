import React from "react";
import Input from "components/SearchBar/parts/Input";
import { compose, toUpper } from "ramda";

const SearchInput = ({ location, setLocation }) => {
	const handleChange = e => {
		compose(setLocation, toUpper)(e.target.value);
	};

	return (
		<Input
			onChange={handleChange}
			value={location}
			placeholder="city, country or zip"
		/>
	);
};

export default SearchInput;
