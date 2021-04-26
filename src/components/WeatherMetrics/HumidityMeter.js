import React from "react";
import Container from "components/WeatherMetrics/parts/Container";
import Fill from "components/WeatherMetrics/parts/Fill";
import SubHead from "components/WeatherMetrics/parts/SubHead";

const HumidityMeter = ({weatherData}) => {
	return (
		<Container>
			<SubHead>Humidity</SubHead>
			<Fill width={`${weatherData.current?.humidity}%`} />
		</Container>
	);
};

export default HumidityMeter;
