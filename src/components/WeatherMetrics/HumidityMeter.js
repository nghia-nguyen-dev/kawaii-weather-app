import React from "react";
import Container from "components/WeatherMetrics/parts/Container";
import Fill from "components/WeatherMetrics/parts/Fill";
import SubHead from "components/WeatherMetrics/parts/SubHead";

const HumidityMeter = () => {
	return (
		<Container>
			<SubHead>Humidity</SubHead>
			<Fill />
		</Container>
	);
};

export default HumidityMeter;
