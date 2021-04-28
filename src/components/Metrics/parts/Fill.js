import styled from "styled-components";

export const Fill = styled.div`
	background-color: var(--orange);
	height: 100%;
	position: absolute;
	width:${({width}) => width};
	left: 0;
	top: 0;
	z-index: -1;
	border-radius: 0px;
`;

export default Fill;
