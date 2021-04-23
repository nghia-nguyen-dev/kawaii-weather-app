import React, { useState } from "react";
import SearchIcon from "components/SearchBar/SearchIcon";
import Input from "components/SearchBar/Input";

const SearchBar = () => {
	const [location, setLocation] = useState("");

	const handleChange = e => setLocation(e.target.value)

	return (
		<form>
			<SearchIcon />
			<Input
				onChange={handleChange}
				value={location}
				placeholder="city, country or zip"
			></Input>
		</form>
	);
};

export default SearchBar;
