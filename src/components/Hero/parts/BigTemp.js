import styled from "styled-components";

const BigTemp = styled.h1`
	color: var(--orange);
	letter-spacing: -8px;
	font-size: var(--font-lg);
	line-height: 257px;
	text-align: right;
	@media (max-width: 744px) {
		font-size: 260px;
		line-height: 197px;
	}
	@media (min-width: 1600px) {
		line-height: 375px;
	}
`;
export default BigTemp;