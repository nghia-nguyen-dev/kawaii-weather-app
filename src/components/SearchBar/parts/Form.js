import styled from "styled-components";

const Form = styled.form`
	grid-column: 1/3;
	height: max-content;
	width: 60%;
	:hover .Tooltip {
		transition: opacity 0.25s ease-in;
		opacity: 1;
	}
	:focus-within .Tooltip {
		opacity: 0;
	}
	@media (max-width: 1016px) {
		width: 75%;
	}
	@media (max-width: 744px) {
		width: 100%;
	}
	@media (min-width: 1600px) {
		width: 65%;
	}
`;

export default Form;
