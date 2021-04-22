import React from "react";
import WindMeter from "components/WeatherMetrics/WindMeter";
import HumidityMeter from "components/WeatherMetrics/HumidityMeter";

const WeatherMetrics = () => {
	return (
		<div className="WeatherMetrics">
			<WindMeter />
			<HumidityMeter />
		</div>
	);
};

export default WeatherMetrics;
