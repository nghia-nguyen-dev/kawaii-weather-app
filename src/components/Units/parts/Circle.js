import styled, { css } from "styled-components";

export const highlight = css`
	color: var(--warm-white);
	background-color: var(--red);
	border: var(--border-sm);
	border-radius: 100%;
`;

const Circle = styled.div`
	cursor: pointer;
	font-size: 14px;
	height: 32px;
	width: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (min-width: 1600px) {
		font-size: 16px;
		height: 42px;
		width: 42px;
	}
`;

export default Circle;
