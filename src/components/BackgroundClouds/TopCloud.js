import React from "react";
import styled, { css } from "styled-components";

const Svg = styled.svg`
	position: absolute;
	z-index: -1;
	${p =>
		p.isLoading &&
		css`
			animation: hover2 2s ease-in infinite alternate;
		`}
`;

const TopCloud = ({ isLoading }) => {
	return (
		<Svg
			isLoading={isLoading}
			width="233px"
			height="135px"
			viewBox="0 0 233 135"
			version="1.1"
		>
			<g
				id="Page-6"
				stroke="none"
				stroke-width="1"
				fill="none"
				fill-rule="evenodd"
			>
				<g id="weather-app-copy-5" fill="#F9F1EB">
					<circle id="Oval-Copy-3" cx="80" cy="-30" r="154"></circle>
				</g>
			</g>
		</Svg>
	);
};

export default TopCloud;
