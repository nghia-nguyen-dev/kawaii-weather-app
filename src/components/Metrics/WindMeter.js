import Container from "components/Metrics/parts/Container";
import Fill from "components/Metrics/parts/Fill";
import SubHead from "components/Metrics/parts/SubHead";
import { multiplier } from "utils/helper";
import { useState } from "react";

const WindMeter = ({ weatherData }) => {
	const [onHover, setOnHover] = useState(false);

	const handleMouseEnterLeave = e => {
		setOnHover(prevState => !prevState);
	};

	const renderedSubhead = onHover
		? `${Math.round(weatherData.current?.windSpeed)} mph`
		: "windy";

	return (
		<Container
			onMouseEnter={handleMouseEnterLeave}
			onMouseOut={handleMouseEnterLeave}
		>
			<SubHead>{renderedSubhead}</SubHead>
			<Fill width={`${weatherData.current?.windSpeed * multiplier}%`} />
		</Container>
	);
};

export default WindMeter;
