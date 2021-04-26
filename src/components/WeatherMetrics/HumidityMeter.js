import {useState} from "react";
import Container from "components/WeatherMetrics/parts/Container";
import Fill from "components/WeatherMetrics/parts/Fill";
import SubHead from "components/WeatherMetrics/parts/SubHead";

const HumidityMeter = ({ weatherData }) => {
	const [onHover, setOnHover] = useState(false);

	const handleMouseEnterLeave = e => {
		setOnHover(prevState => !prevState);
	};

	const renderedSubhead = onHover
		? `${Math.round(weatherData.current?.humidity)} %`
		: "humidity";

	return (
		<Container
			onMouseEnter={handleMouseEnterLeave}
			onMouseOut={handleMouseEnterLeave}
		>
			<SubHead>{renderedSubhead}</SubHead>
			<Fill width={`${weatherData.current?.humidity}%`} />
		</Container>
	);
};

export default HumidityMeter;
