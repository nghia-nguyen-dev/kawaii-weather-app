import React from "react";
import SearchBar from "components/SearchBar/SearchBar";
import WeatherMetrics from "components/WeatherMetrics/WeatherMetrics";
import Units from "components/Units/Units";
import WeatherMain from "components/WeatherMain/WeatherMain";
import DailyForecast from "components/DailyForecast/DailyForecast";
import styled from "styled-components";

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	max-width: 970px;
	gap: 40px 38px;
`;

const App = () => {
	return (
		<Grid>
			<SearchBar />
			<Units />
			<WeatherMain />
			<WeatherMetrics />
			<DailyForecast />
		</Grid>
	);
};

export default App;
