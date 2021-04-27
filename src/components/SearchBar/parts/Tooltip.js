import styled from "styled-components";

const Tooltip = styled.div`
	color: var(--warm-white);
	font-family: Helvetica, Arial, sans-serif;
	position: absolute;
	background-color: var(--red);
	border-radius: 10px;
	padding: 12px 16px;
	font-size: 12px;
	letter-spacing: 0.6px;
	line-height: 1.4;
	top: 132%;
	left: 9%;
	opacity: 0;
	width: 192px;
	&::before {
		content: "";
		position: absolute;
		width: 14px;
		height: 14px;
		left: 22%;
		top: -14px;
		transform: translate(-50%, 50%) rotate(45deg);
		background-color: var(--red);
		/* border-top-left-radius: 2px; */
	}
`;

export default Tooltip;
