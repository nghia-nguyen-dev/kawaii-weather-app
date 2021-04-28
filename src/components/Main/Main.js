import { useState, useEffect } from "react";
import SearchBar from "components/SearchBar/SearchBar";
import styled from "styled-components";
import Units from "components/Units/Units";
import ErrorMsg from "components/ErrorMsg/ErrorMsg";
import WeatherInfo from "components/WeatherInfo/WeatherInfo";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	max-width: 970px;
	gap: 40px 38px;
	@media (max-width: 985px) {
		gap: 30px;
	}
`;

const Main = ({ weatherData, setWeatherData }) => {
	const [location, setLocation] = useState("");
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
