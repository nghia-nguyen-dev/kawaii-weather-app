import styled from "styled-components";

const Div = styled.div`
	background-color: var(--blue);
	border-radius: var(--radius-lg);
	border: var(--border-lg);
	padding: 42px 74px 32px;
	grid-column: 1/4;
	@media (max-width: 1016px) {
		grid-column: 1/5;
	}
	@media (min-width: 1600px) {
		padding-bottom: 20px;
	}
`;

export default Div;
