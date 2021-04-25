import React from "react";
import WindMeter from "components/WeatherMetrics/WindMeter";
import HumidityMeter from "components/WeatherMetrics/HumidityMeter";
import CloudMeter from "components/WeatherMetrics/CloudMeter";
import styled from "styled-components";

const Div = styled.div`
	div {
		margin-bottom: 12px;
	}
	@media (max-width: 1016px) {
		gap: 30px;
		display: none;
	}
`;

const WeatherMetrics = ({weatherData}) => {
	return (
		<Div>
			<WindMeter weatherData={weatherData}/>
			<HumidityMeter weatherData={weatherData}/>
			<CloudMeter weatherData={weatherData}/>
		</Div>
	);
};

export default WeatherMetrics;
