import React from "react";
import SearchBar from "components/SearchBar/SearchBar";
import WeatherMetrics from "components/WeatherMetrics/WeatherMetrics";
import Units from 'components/Units/Units'

const App = () => {
	return (
		<div className="App">
			<SearchBar />
			<Units/>
			<WeatherMetrics />
		</div>
	);
};

export default App;
