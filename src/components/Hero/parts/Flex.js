import styled from "styled-components";

const Flex = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 102px;
	gap: 30px;
	@media (max-width: 744px) {
		margin-top: 72px;
	}
	@media (min-width: 1600px) {
		justify-content: space-between;
	}
`;

export default Flex;
