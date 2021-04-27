import { useState, useEffect } from "react";
import SearchBar from "components/SearchBar/SearchBar";
import WeatherMetrics from "components/WeatherMetrics/WeatherMetrics";
import Units from "components/Units/Units";
import WeatherMain from "components/WeatherMain/WeatherMain";
import DailyForecast from "components/DailyForecast/DailyForecast";
import BackgroundClouds from "components/BackgroundClouds/BackgroundCouds";
import TopCloud from "components/BackgroundClouds/TopCloud";
import BottomClouds from "components/BackgroundClouds/BottomClouds";
import {
	fetchWeatherData,
	extractWeather,
	askForPos,
	extractCoords,
} from "utils/helper";
import { pipe } from "ramda";
import Grid from "components/App/parts/Grid"

const App = () => {
	const [weatherData, setWeatherData] = useState({});
	const [location, setLocation] = useState("");
	const [isCelsius, setIsCelsius] = useState(false);

	useEffect(() => {
		askForPos()
			.then(extractCoords)
			.then(fetchWeatherData)
			.then(pipe(extractWeather, setWeatherData))
			.catch(console.log);
	}, []);

	return (
		<>
			<Grid>
				<SearchBar
					setWeatherData={setWeatherData}
					setLocation={setLocation}
				/>
				<Units isCelsius={isCelsius} setIsCelsius={setIsCelsius} />
				<WeatherMain
					isCelsius={isCelsius}
					location={location}
					weatherData={weatherData}
				/>
				<WeatherMetrics weatherData={weatherData} />
				<DailyForecast
					weatherData={weatherData}
					isCelsius={isCelsius}
				/>
			</Grid>
			<BackgroundClouds>
				<TopCloud />
				<BottomClouds />
			</BackgroundClouds>
		</>
	);
};

export default App;
