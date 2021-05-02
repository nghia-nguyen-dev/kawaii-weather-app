import styled from "styled-components";

const Input = styled.input`
	font-size: var(--font-sm);
	font-family: "Proxima Soft";
	color: var(--dark-blk);
	text-transform: uppercase;
	letter-spacing: var(--letter-spacing-sm);
	border: var(--border-md);
	border-radius: var(--radius-md);
	padding: var(--padding-bar);
	width: 100%;
	::placeholder {
		font-size: var(--font-sm);
		color: #adadad;
		text-transform: none;
	}
	@media (min-width: 1600px) {
		padding: 26px 24px 23px;
	}
`;

export default Input;
