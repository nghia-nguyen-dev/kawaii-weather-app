const { default: styled } = require("styled-components");

const Hero = styled.div`
	background-color: var(--blue);
	border-radius: var(--radius-lg);
	border: var(--border-lg);
	padding-left: var(--padding-left);
	padding-top: 19px;
	padding-right: 40px;
	grid-column: 1/4;
	@media (max-width: 1016px) {
		grid-column: 1/5;
	}
`;

export default Hero;
