import React from "react";
import WindMeter from "components/Metrics/WindMeter";
import HumidityMeter from "components/Metrics/HumidityMeter";
import CloudMeter from "components/Metrics/CloudMeter";
import styled from "styled-components";

const Div = styled.div`
	div {
		margin-bottom: 12px;
	}
	@media (max-width: 1016px) {
		gap: 30px;
		display: none;
	}
	@media (min-width: 1600px) {
		width: 90%;
		div {
			margin-bottom: 16px;
		}
	}
`;

const Metrics = ({ weatherData }) => {
	return (
		<Div>
			<WindMeter weatherData={weatherData} />
			<HumidityMeter weatherData={weatherData} />
			<CloudMeter weatherData={weatherData} />
		</Div>
	);
};

export default Metrics;
