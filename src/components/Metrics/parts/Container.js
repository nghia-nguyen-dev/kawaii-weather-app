import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	border: var(--border-md);
	border-radius: var(--radius-md);
	padding: var(--padding-bar);
	:hover {
		border-color: var(--warm-white);
	}
`;

export default Container;
