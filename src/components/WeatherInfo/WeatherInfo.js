import WeatherMain from "components/WeatherMain/WeatherMain";
import WeatherMetrics from "components/WeatherMetrics/WeatherMetrics";
import DailyForecast from "components/DailyForecast/DailyForecast";

const WeatherInfo = ({isCelsius, location, weatherData}) => {
	return (
		<>
			<WeatherMain
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
