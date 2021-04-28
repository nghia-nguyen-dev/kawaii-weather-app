import Hero from "components/Hero/Hero";
import Metrics from "components/Metrics/Metrics";
import DailyForecast from "components/DailyForecast/DailyForecast";

const WeatherInfo = ({ isCelsius, location, weatherData }) => {
	return (
		<>
			<Hero
				isCelsius={isCelsius}
				location={location}
				weatherData={weatherData}
			/>
			<Metrics weatherData={weatherData} />
			<DailyForecast weatherData={weatherData} isCelsius={isCelsius} />
		</>
	);
};

export default WeatherInfo;
