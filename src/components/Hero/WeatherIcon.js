import * as icon from "components/Hero/parts/icons";

const WeatherIcon = ({ weatherData }) => {
	const name = weatherData.current.main || "defaultIcon";
	return icon[name];
};

export default WeatherIcon;

