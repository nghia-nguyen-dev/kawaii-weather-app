import React from "react";
import SearchBar from "components/SearchBar";
import WeatherMetrics from "components/WeatherMetrics";

const App = () => {
	return (
		<div className="App">
			<SearchBar />
			<WeatherMetrics />
		</div>
	);
};

export default App;
