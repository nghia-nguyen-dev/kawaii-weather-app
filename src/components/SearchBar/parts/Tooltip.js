import styled from "styled-components";

const Tooltip = styled.div`
	color: var(--warm-white);
	font-family: Helvetica, Arial, sans-serif;
	position: absolute;
	background-color: var(--red);
	border-radius: 10px;
	padding: 14px 16px;
	font-size: 12px;
	letter-spacing: 0.6px;
	line-height: 1.4;
	top: 132%;
	left: 9%;
	visibility: hidden;
	width: 192px;
	&::before {
		content: "";
		position: absolute;
		width: 15px;
		height: 15px;
		left: 22%;
		top: -15px;
		transform: translate(-50%, 50%) rotate(45deg);
		background-color: var(--red);
		/* border-top-left-radius: 2px; */
	}
`;

export default Tooltip;
