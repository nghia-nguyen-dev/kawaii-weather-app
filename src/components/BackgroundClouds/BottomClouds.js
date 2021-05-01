import React from "react";
import styled, { css } from "styled-components";

const Svg = styled.svg`
	transform: translate(40%, 47%);
	@media (max-width: 744px) {
		transform: translate(-10%, 53%);
		z-index: -1;
		position: absolute;
	}
	@media (min-width: 1600px) {
		z-index:-1;
		position:absolute;
	}
	${p => p.isLoading && css`
		animation: hover1 5s ease-in-out infinite alternate;
	`}
`;

const BottomClouds = ({ isLoading }) => {
	return (
		<Svg
			isLoading={isLoading}
			width="1098px"
			height="1088px"
			viewBox="0 0 1098 1088"
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
					id="weather-app-copy-5"
					transform="translate(-639.000000, -491.000000)"
					fill="#F9F1EB"
				>
					<g
						id="bottomCloud"
						transform="translate(639.000000, 491.000000)"
					>
						<circle
							id="right-cloud"
							cx="801"
							cy="297"
							r="297"
						></circle>
						<circle
							id="left-cloud"
							cx="448"
							cy="640"
							r="448"
						></circle>
					</g>
				</g>
			</g>
		</Svg>
	);
};

export default BottomClouds;
