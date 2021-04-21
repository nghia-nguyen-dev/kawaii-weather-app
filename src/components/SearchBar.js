import React from "react";
import SearchIcon from 'components/SearchIcon'
import Input from "components/Input"

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
