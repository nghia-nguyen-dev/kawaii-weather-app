import WeatherIcon from "components/Hero/WeatherIcon";
import { renderedTemp, renderedLocation } from "utils/helper";
import Flex from "components/Hero/parts/Flex";
import BigTemp from "components/Hero/parts/BigTemp";
import Location from "components/Hero/parts/Location";
import Div from "components/Hero/parts/Div";

const Hero = ({ weatherData, location, isCelsius }) => {
	const temp = weatherData.current?.temp;
	return (
		<Div>
			<Location>{renderedLocation(location)}</Location>
			<Flex>
				<WeatherIcon />
				<BigTemp>{renderedTemp(isCelsius, temp)}</BigTemp>
			</Flex>
		</Div>
	);
};

export default Hero;
