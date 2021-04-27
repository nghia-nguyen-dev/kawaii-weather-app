import { useState, useEffect } from "react";
import SearchBar from "components/SearchBar/SearchBar";
import WeatherMetrics from "components/WeatherMetrics/WeatherMetrics";
import Units from "components/Units/Units";
import WeatherMain from "components/WeatherMain/WeatherMain";
import DailyForecast from "components/DailyForecast/DailyForecast";
import BackgroundClouds from "components/BackgroundClouds/BackgroundCouds";
import TopCloud from "components/BackgroundClouds/TopCloud";
import BottomClouds from "components/BackgroundClouds/BottomClouds";
import { fetchWeatherData, extractWeather } from "utils/helper";
import { compose } from "ramda";
import styled from "styled-components";
import axios from "axios";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	max-width: 970px;
	gap: 40px 38px;
	@media (max-width: 985px) {
		gap: 30px;
	}
`;

const askForPos = () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject, {
			enableHighAccuracy: true,
		});
	});
};

const extractCoords = ({ coords }) => {
	return {
		lat: coords.latitude,
		lon: coords.longitude,
	};
};

// const reverseGeocode = ({ lat, lon }) => {
// 	const base = `http://api.openweathermap.org/geo/1.0/reverse?`;
// 	return axios.get(base, {
// 		params: {
// 			lat,
// 			lon,
// 			limit: 1,
// 			appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
// 		},
// 	})
// 	.then(console.log)
// 	;
// };

const App = () => {
	const [weatherData, setWeatherData] = useState({});
	const [location, setLocation] = useState("");
	const [isCelsius, setIsCelsius] = useState(false);

	useEffect(() => {
		askForPos()
			.then(extractCoords)
			// .then(reverseGeocode)
			// .then(console.log)
			.then(fetchWeatherData)
			.then(console.log)
			// .then(res => compose(setWeatherData, extractWeather)(res.data))
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
