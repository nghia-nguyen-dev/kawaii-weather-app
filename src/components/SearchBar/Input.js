import styled from "styled-components";

const Input = styled.input`
	font-size: var(--font-sm);
	font-family: "Proxima Soft";
	color: var(--dark-blk);
	text-transform: uppercase;
	letter-spacing: var(--letter-spacing-sm);


	border: var(--border-md);
	border-radius: var(--border-radius-md);

	padding:18px 28px 16px;
	width: 282px;

	::placeholder {
		font-size: calc(var(--font-sm) + 2px);
		color: #ADADAD;
		text-transform: none;
	}
`;

export default Input;