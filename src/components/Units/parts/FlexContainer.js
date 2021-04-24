import styled from "styled-components";

const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 80px;
	grid-column: 3/4;
	justify-self: flex-end;
	align-self: center;
	transform: translateY(2px);
	@media (max-width: 1016px) {
		grid-column: 4/5;
	}
`;

export default FlexContainer;
