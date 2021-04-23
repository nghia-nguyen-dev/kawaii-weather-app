import styled from "styled-components";

export const SubHead = styled.h3`
	letter-spacing: var(--letter-spacing-sm);
	text-transform: uppercase;
	font-size: 12px;

	// CONFIG
	color: ${p => p.config?.color};
	margin-bottom: ${p => p.config?.marginBottom};
`;

export default SubHead;
