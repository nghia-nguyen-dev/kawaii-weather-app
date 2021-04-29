import { useState, useEffect } from "react";
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
import Main from "components/Main/Main";
import WhiteCloud from "components/BackgroundClouds/WhiteCloud";

const App = () => {
	const [weatherData, setWeatherData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	console.log(weatherData);

	useEffect(() => {
		askForPos()
			.then(extractCoords)
			.then(fetchWeatherData)
			.then(pipe(extractWeather, setWeatherData))
			.catch(setWeatherData)
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			{!isLoading && (
				<Main
					weatherData={weatherData}
					setWeatherData={setWeatherData}
				/>
			)}
			<BackgroundClouds>
				<TopCloud isLoading={isLoading}/>
				<WhiteCloud/>
				<BottomClouds isLoading={isLoading}/>
			</BackgroundClouds>
		</>
	);
};

export default App;
