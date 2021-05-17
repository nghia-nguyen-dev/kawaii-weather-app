import { useState, useEffect } from "react";
import BackgroundClouds from "components/BackgroundClouds/BackgroundCouds";
import TopCloud from "components/BackgroundClouds/TopCloud";
import BottomClouds from "components/BackgroundClouds/BottomClouds";
import {
	fetchWeatherData,
	fetchLocation,
	extractWeather,
	askForPos,
	extractCoords,
} from "utils/helper";
import Main from "components/Main/Main";
import WhiteCloud from "components/BackgroundClouds/WhiteCloud";

const App = () => {
	const [weatherData, setWeatherData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [location, setLocation] = useState("");

	useEffect(() => {
		askForPos()
			.then(extractCoords)
			.then(fetchLocation)
			.then(location => {
				setLocation(location);
				return location;
			})
			.then(fetchWeatherData)
			.then(extractWeather)
			.then(setWeatherData)
			.catch(setWeatherData)
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			{!isLoading && (
				<Main
					location={location}
					setLocation={setLocation}
					weatherData={weatherData}
					setWeatherData={setWeatherData}
				/>
			)}
			<BackgroundClouds>
				<TopCloud isLoading={isLoading} />
				<WhiteCloud isLoading={isLoading} />
				<BottomClouds isLoading={isLoading} />
			</BackgroundClouds>
		</>
	);
};

export default App;
