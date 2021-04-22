import React from "react";
import SearchBar from "components/SearchBar/SearchBar";
import WeatherMetrics from "components/WeatherMetrics/WeatherMetrics";

const App = () => {
	return (
		<div className="App">
			<SearchBar />
			<WeatherMetrics />
		</div>
	);
};

export default App;
