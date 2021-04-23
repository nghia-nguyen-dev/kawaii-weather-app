import styled, { css } from "styled-components";

export const highlight = css`
	color: var(--warm-white);
	background-color: var(--red);
	border: var(--border-sm);
	border-radius: 100%;
`;

const Square = styled.div`
	font-size: 14px;
	height: 32px;
	width: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Square;
