import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
	font-size: var(--font-sm);
	font-family: "Proxima Soft";
	color: var(--dark-blk);
	text-transform: uppercase;
	letter-spacing: var(--letter-spacing-sm);
	border: var(--border-md);
	border-radius: var(--radius-md);
	padding: 18px 50px 16px var(--padding-left);
	width: 100%;
	::placeholder {
		font-size: calc(var(--font-sm) + 2px);
		color: #adadad;
		text-transform: none;
	}
`;

const SearchInput = () => {
	const [location, setLocation] = useState("");
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
