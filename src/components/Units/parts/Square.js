import styled, { css } from "styled-components";

export const highlight = css`
	color: var(--warm-white);
	background-color: var(--red);
	border: var(--border-sm);
	border-radius: var(--radius-sm);
`;

const Square = styled.div`
	height: 30px;
	width: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default Square;
