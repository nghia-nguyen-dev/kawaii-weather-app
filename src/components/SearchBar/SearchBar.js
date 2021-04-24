import React, { useState } from "react";
import SearchIcon from "components/SearchBar/SearchIcon";
import SearchInput from "components/SearchBar/SearchInput";
import Form  from "components/SearchBar/parts/Form"

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
