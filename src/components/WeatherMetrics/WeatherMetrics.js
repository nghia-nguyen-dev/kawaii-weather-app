import React from "react";
import WindMeter from "components/WeatherMetrics/WindMeter";
import HumidityMeter from "components/WeatherMetrics/HumidityMeter";
import CloudMeter from 'components/WeatherMetrics/CloudMeter';

const WeatherMetrics = () => {
	return (
		<div className="WeatherMetrics">
			<WindMeter />
			<HumidityMeter />
			<CloudMeter />
		</div>
	);
};

export default WeatherMetrics;
