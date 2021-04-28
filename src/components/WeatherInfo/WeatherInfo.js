import Hero from "components/Hero/Hero";
import WeatherMetrics from "components/WeatherMetrics/WeatherMetrics";
import DailyForecast from "components/DailyForecast/DailyForecast";

const WeatherInfo = ({ isCelsius, location, weatherData }) => {
	return (
		<>
			<Hero
				isCelsius={isCelsius}
				location={location}
				weatherData={weatherData}
			/>
			<WeatherMetrics weatherData={weatherData} />
			<DailyForecast weatherData={weatherData} isCelsius={isCelsius} />
		</>
	);
};

export default WeatherInfo;
