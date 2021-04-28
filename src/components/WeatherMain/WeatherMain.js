import WeatherIcon from "components/WeatherMain/WeatherIcon";
import { renderedTemp, renderedLocation } from "utils/helper";
import Flex from "components/WeatherMain/parts/Flex";
import BigTemp from "components/WeatherMain/parts/BigTemp";
import Location from "components/WeatherMain/parts/Location";
import Hero from "components/WeatherMain/parts/Hero";

const WeatherMain = ({ weatherData, location, isCelsius }) => {
	const temp = weatherData.current?.temp;
	return (
		<Hero>
			<Location>{renderedLocation(location)}</Location>
			<Flex>
				<WeatherIcon />
				<BigTemp>{renderedTemp(isCelsius, temp)}</BigTemp>
			</Flex>
		</Hero>
	);
};

export default WeatherMain;
