import React from "react";
import styled from "styled-components";
import SearchIcon from 'components/SearchIcon'

const Input = styled.input`
	font-size: var(--font-sm);
	font-family: "Proxima Soft";
	color: var(--dark-blk);
	text-transform: uppercase;
	letter-spacing: var(--letter-spacing-sm);


	border: var(--border-md) solid var(--dark-blk);
	border-radius: var(--border-radius-md);

	padding:18px 18px 17px;
	width: 282px;

	::placeholder {
		font-size: calc(var(--font-sm) + 2px);
		color: #ADADAD;
		text-transform: none;
	}
`;

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
