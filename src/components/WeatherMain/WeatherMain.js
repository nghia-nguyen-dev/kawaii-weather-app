import React from "react";
import styled from "styled-components";
import WeatherIcon from "components/WeatherMain/WeatherIcon";

const Div = styled.div`
	background-color: var(--blue);
	border-radius: var(--radius-lg);
	border: var(--border-lg);
	padding-left: var(--padding-left);
	padding-top: 19px;
	padding-right: 40px;
	grid-column: 1/4;
	@media (max-width: 1016px) {
		grid-column:1/5;
	}
`;

const Location = styled.h2`
	color: var(--warm-white);
	letter-spacing: var(--letter-spacing-sm);
	text-transform: uppercase;
	font-size: 12px;
`;

const BigTemp = styled.h1`
	color: var(--orange);
	letter-spacing: -8px;
	font-size: 342px;
	line-height: 257px;
	text-align: right;
`;

const Flex = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 102px;
`;

const WeatherMain = () => {
	return (
		<Div>
			<Location>Boston, Ma</Location>
			<Flex>
				<WeatherIcon />
				<BigTemp>72</BigTemp>
			</Flex>
		</Div>
	);
};

export default WeatherMain;
