import styled from "styled-components";

const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
	grid-column: 1/4;
	background-color: var(--light-blue);
	padding: 48px 74px 42px;
	border-radius: var(--radius-lg);
	border: var(--border-lg);
	@media (max-width: 1016px) {
		grid-column: 1/5;
	}
	@media (max-width: 744px) {
		padding: 38px 52px 32px;
	}
	@media (min-width: 1600px) {
		padding-top: 54px;
		gap: 70px;
	}
`;
export default Ul;
