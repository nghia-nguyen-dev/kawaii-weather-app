import { useState, useEffect } from "react";
import SearchBar from "components/SearchBar/SearchBar";
import WeatherMetrics from "components/WeatherMetrics/WeatherMetrics";
import Units from "components/Units/Units";
import WeatherMain from "components/WeatherMain/WeatherMain";
import DailyForecast from "components/DailyForecast/DailyForecast";
import BackgroundClouds from "components/BackgroundClouds/BackgroundCouds";
import TopCloud from "components/BackgroundClouds/TopCloud";
import BottomClouds from "components/BackgroundClouds/BottomClouds";
import {
	fetchWeatherData,
	extractWeather,
	askForPos,
	extractCoords,
} from "utils/helper";
import { isEmpty, pipe } from "ramda";
import Grid from "components/App/parts/Grid";
import styled from "styled-components";
import Hero from "components/WeatherMain/parts/Hero"

const ErrorMsg = styled(Hero)`
	color: var(--orange);
`;

const App = () => {
	const [weatherData, setWeatherData] = useState({});
	const [location, setLocation] = useState("");
	const [isCelsius, setIsCelsius] = useState(false);
	const [error, setError] = useState({});
	const [isLoading, setIsLoading] = useState(true)

	console.log(weatherData.constructor)
	
	useEffect(() => {
		askForPos()
			.then(extractCoords)
			.then(fetchWeatherData)
			.then(pipe(extractWeather, setWeatherData))
			.catch(setWeatherData)
			.finally(() => setIsLoading(false))
	}, []);

	const mainContent = (
		<Grid>
			<SearchBar
				setError={setError}
				setWeatherData={setWeatherData}
				setLocation={setLocation}
			/>
			<Units isCelsius={isCelsius} setIsCelsius={setIsCelsius} />

			{}

			<WeatherMain
				isCelsius={isCelsius}
				location={location}
				weatherData={weatherData}
			/>
			<WeatherMetrics weatherData={weatherData} />
			<DailyForecast weatherData={weatherData} isCelsius={isCelsius} />
		</Grid>
	);

	const loadingImg = (
		<svg width="435px" height="421px" viewBox="0 0 435 421" version="1.1">
			<title>rain-cloud</title>
			<g
				id="Page-6"
				stroke="none"
				stroke-width="1"
				fill="none"
				fill-rule="evenodd"
			>
				<g
					id="weather-app-copy-6"
					transform="translate(-334.000000, -135.000000)"
					fill="#F9F1EB"
					fill-rule="nonzero"
				>
					<g
						id="rain-cloud"
						transform="translate(334.000000, 135.000000)"
					>
						<path
							d="M0,198.850312 C0,174.702703 7.55426918,153.284823 22.6628075,134.386694 C37.7713459,115.488565 56.8668596,103.519751 79.9493488,98.0602911 C86.4544139,69.5031185 101.353111,45.985447 124.22576,27.5072765 C147.098408,9.02910603 173.328509,0 202.916064,0 C231.874096,0 257.474674,9.02910603 280.137482,26.8773389 C302.800289,44.7255717 317.489146,67.8232848 324.204052,95.960499 L330.918958,95.960499 C349.59479,95.960499 367.011577,100.580042 382.959479,109.609148 C398.907381,118.638254 411.70767,131.237006 420.940666,146.985447 C430.173661,162.733888 435,180.162162 435,198.850312 C435,217.328482 430.593343,234.336798 421.780029,250.085239 C412.966715,265.83368 400.795948,278.432432 385.477569,287.881497 C370.15919,297.330561 353.371925,302.370062 335.115774,302.790021 C332.387844,302.790021 330.918958,301.530146 330.918958,299.220374 L330.918958,271.293139 C330.918958,268.773389 332.387844,267.513514 335.115774,267.513514 C352.952243,266.673597 368.270622,259.534304 380.861071,246.095634 C393.45152,232.656965 399.746744,216.908524 399.746744,198.640333 C399.746744,180.372141 392.821997,164.623701 379.182344,151.185031 C365.542692,137.746362 349.384949,131.027027 330.709117,131.027027 L296.924747,131.027027 C294.406657,131.027027 293.147612,129.767152 293.147612,127.45738 L291.468886,115.278586 C289.160637,92.6008316 279.298119,73.4927235 262.301013,58.3742204 C245.094067,43.045738 225.36903,35.4864865 202.496382,35.4864865 C179.623734,35.4864865 159.479016,43.045738 142.691751,58.3742204 C125.694645,73.7027027 116.251809,92.6008316 114.153401,115.278586 L112.684515,126.407484 C112.684515,128.927235 111.21563,130.397089 108.487699,130.397089 L97.366136,131.027027 C79.9493488,133.126819 65.260492,140.686071 53.2995658,153.494802 C41.3386397,166.303534 35.463097,181.422037 35.463097,198.850312 C35.463097,217.118503 41.7583213,232.866944 54.3487699,246.305613 C66.9392185,259.744283 82.2575977,266.883576 100.094067,267.723493 C102.402315,267.723493 103.66136,268.983368 103.66136,271.503119 L103.66136,299.430353 C103.66136,301.740125 102.402315,303 100.094067,303 C71.975398,301.740125 48.2633864,291.031185 28.748191,270.873181 C9.23299566,250.715177 0,226.777547 0,198.850312 Z"
							id="cloud"
						></path>
						<g
							id="rain"
							transform="translate(112.000000, 201.000000)"
						>
							<path
								d="M0,138.548387 C0,137.709677 0.209130618,136.241935 0.836522472,134.354839 L34.9248132,13.3709677 C36.1795969,9.38709677 38.4800337,6.24193548 41.616993,4.14516129 C44.7539522,2.0483871 48.1000421,1 51.2370014,1 C52.7009157,1 54.3739607,1.20967742 56.2561362,1.62903226 C61.2752711,2.46774194 65.0396222,5.19354839 67.5491896,9.38709677 C70.058757,13.5806452 70.6861489,18.1935484 69.2222345,23.4354839 L35.1339438,143.580645 C32.6243764,152.596774 26.7687191,157 17.9852331,157 C17.1487107,157 16.5213188,156.790323 15.6847963,156.580645 C14.4300126,156.16129 13.8026208,155.951613 13.5934902,155.951613 C8.99261657,154.693548 5.64652668,152.387097 3.34608989,149.032258 C1.04565309,145.467742 0,142.112903 0,138.548387 Z"
								id="Path"
							></path>
							<path
								d="M54.8593219,197.156938 L106.208189,13.3645933 C107.049973,9.38277512 109.154435,6.23923445 112.521574,4.14354067 C115.888713,2.04784689 119.255852,1 122.833437,1 C124.727452,1 126.621468,1.20956938 128.515483,1.62870813 C133.145299,2.8861244 136.512438,5.61052632 138.827346,9.80191388 C141.142254,13.9933014 141.563146,18.3942584 140.300469,23.2143541 L89.1620485,207.216268 C88.3202638,210.778947 86.4262482,213.712919 83.0591094,216.227751 C79.6919706,218.742584 76.3248318,220 72.3263544,220 C70.4323389,220 68.5383233,219.580861 67.0652001,218.952153 C62.8562765,217.904306 59.2786916,215.179904 56.1219989,210.778947 C53.807091,207.006699 53.3861987,202.605742 54.8593219,197.156938 Z"
								id="Path"
							></path>
							<path
								d="M142,138.363392 C142,137.523553 142.209091,136.053836 142.836364,133.53432 L176.918182,12.3876178 C178.172727,8.39838493 180.263636,5.24899058 183.190909,3.14939435 C186.327273,1.04979812 189.463636,0 192.809091,0 C194.481818,0 196.363636,0.209959623 198.245455,0.629878869 C202.636364,1.88963661 205.772727,3.98923284 207.863636,7.13862719 C209.954545,10.2880215 211,13.6473755 211,17.0067295 C211,17.6366083 210.790909,18.6864065 210.581818,19.9461642 C210.372727,21.2059219 210.163636,22.0457604 210.163636,22.4656797 L176.081818,142.772544 C175.245455,146.761777 173.363636,150.121131 170.227273,152.430686 C167.090909,154.740242 163.536364,156 159.563636,156 L154.545455,154.950202 C150.363636,153.690444 147.227273,151.590848 144.927273,148.231494 C143.045455,145.0821 142,141.722746 142,138.363392 Z"
								id="Path"
							></path>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);

	return (
		<>
			{isLoading ? loadingImg : mainContent}
			<BackgroundClouds>
				<TopCloud />
				<BottomClouds />
			</BackgroundClouds>
		</>
	);
};

export default App;
