import styled, { css } from "styled-components";

const Svg = styled.svg`
	position: absolute;
	z-index: -2;
	left: 25%;
	top:55%;
	opacity: 0;
	transition: opacity 2s ease-out 0.1s;
	animation: none;
	${p =>
		p.isLoading &&
		css`
			opacity: 1;
			animation: hover3 4s ease-in-out infinite
				alternate;
		`}
`;

const WhiteCloud = ({ isLoading }) => {
	return (
		<Svg
			isLoading={isLoading}
			width="500px"
			height="333px"
			viewBox="0 0 500 333"
			version="1.1"
		>
			<g
				id="Page-6"
				stroke="none"
				stroke-width="1"
				fill="none"
				fill-rule="evenodd"
			>
				<g
					id="loading-screen-copy-3"
					transform="translate(-485.000000, -211.000000)"
					fill="#FFFFFF"
				>
					<path
						d="M888.125,336.7075 C873.958333,264.904375 810.833333,211 735,211 C674.791667,211 622.5,245.1325 596.458333,295.0825 C533.75,301.7425 485,354.814375 485,419.125 C485,488.014375 541.041667,544 610,544 L880.833333,544 C938.333333,544 985,497.38 985,439.9375 C985,384.9925 942.291667,340.45375 888.125,336.7075 L888.125,336.7075 Z"
						id="Mask"
					></path>
				</g>
			</g>
		</Svg>
	);
};

export default WhiteCloud;
