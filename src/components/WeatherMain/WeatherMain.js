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
		grid-column: 1/5;
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
	@media (max-width: 744px) {
		font-size: 260px;
		line-height: 197px;
	}
`;

const Flex = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 102px;
	@media (max-width: 744px) {
		margin-top: 72px;
	}
`;

const WeatherMain = ({ weatherData, location }) => {
	console.log(weatherData)
	return (
		<Div>
			<Location>
				{location.city}, {location.state || location.country}
			</Location>
			<Flex>
				<WeatherIcon />
				<BigTemp>{Math.round(weatherData.current?.temp)}</BigTemp>
			</Flex>
		</Div>
	);
};

export default WeatherMain;
