import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	border: var(--border-md);
	border-radius: var(--radius-md);
	padding: 14px var(--padding-left) 12px;
	:hover > div  {
		background-color: var(--light-blue);
	}
	/* :hover {
		color:var(--warm-white);
	} */
`;

export default Container;
