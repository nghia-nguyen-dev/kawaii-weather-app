import { useState } from "react";
import SearchBar from "components/SearchBar/SearchBar";
import WeatherMetrics from "components/WeatherMetrics/WeatherMetrics";
import Units from "components/Units/Units";
import WeatherMain from "components/WeatherMain/WeatherMain";
import DailyForecast from "components/DailyForecast/DailyForecast";
import BackgroundClouds from "components/BackgroundClouds/BackgroundCouds";
import TopCloud from "components/BackgroundClouds/TopCloud";
import BottomClouds from "components/BackgroundClouds/BottomClouds";

import styled from "styled-components";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	max-width: 970px;
	gap: 40px 38px;
	@media (max-width: 985px) {
		gap: 30px;
	}
`;

const App = () => {
	const [weatherData, setWeatherData] = useState({});
	const [location, setLocation] = useState("");
	const [isCelsius, setIsCelsius] = useState(false);

	console.log(weatherData)
	console.log(location)

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
				<WeatherMetrics />
				<DailyForecast weatherData={weatherData}/>
			</Grid>
			<BackgroundClouds>
				<TopCloud />
				<BottomClouds />
			</BackgroundClouds>
		</>
	);
};

export default App;
