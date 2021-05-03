import styled from "styled-components";

const Form = styled.form`
	position: relative;
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
`;

export default Form;
