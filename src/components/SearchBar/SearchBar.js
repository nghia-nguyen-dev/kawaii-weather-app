import React from "react";
import SearchIcon from 'components/SearchBar/SearchIcon'
import Input from "components/SearchBar/Input"

const SearchBar = () => {
	return (
		<div>
			<form>
				<SearchIcon/>
				<Input placeholder="city, country or zip"></Input>
			</form>
		</div>
	);
};

export default SearchBar;
