import * as icon from "components/Hero/parts/icons";

const getIcon = id => {
	if (id > 800 && id < 805) return icon.clouds;
};

const WeatherIcon = ({ weatherData }) => {
	const name = weatherData.current.main || "defaultIcon";
	return icon[name];
};

export default WeatherIcon;

