import { useState } from "react";
import SearchBar from "components/SearchBar/SearchBar";
import Units from "components/Units/Units";
import ErrorMsg from "components/ErrorMsg/ErrorMsg";
import WeatherInfo from "components/WeatherInfo/WeatherInfo";
import Grid from "components/Main/parts/Grid"

const Main = ({ weatherData, setWeatherData, location, setLocation }) => {
	const [isCelsius, setIsCelsius] = useState(false);

	return (
		<Grid>
			<SearchBar
				setWeatherData={setWeatherData}
				setLocation={setLocation}
			/>
			<Units isCelsius={isCelsius} setIsCelsius={setIsCelsius} />

			{weatherData.current ? (
				<WeatherInfo
					isCelsius={isCelsius}
					location={location}
					weatherData={weatherData}
				/>
			) : (
				<ErrorMsg weatherData={weatherData} />
			)}
		</Grid>
	);
};

export default Main;
