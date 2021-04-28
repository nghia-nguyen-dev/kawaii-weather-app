import Container from "components/Metrics/parts/Container";
import Fill from "components/Metrics/parts/Fill";
import SubHead from "components/Metrics/parts/SubHead";
import { useState } from "react";

const CloudMeter = ({ weatherData }) => {
	const [onHover, setOnHover] = useState(false);

	const handleMouseEnterLeave = e => {
		setOnHover(prevState => !prevState);
	};

	const renderedSubhead = onHover
		? `${Math.round(weatherData.current?.clouds)} %`
		: "cloudy";

	return (
		<Container
			onMouseEnter={handleMouseEnterLeave}
			onMouseOut={handleMouseEnterLeave}
		>
			<SubHead>{renderedSubhead}</SubHead>
			<Fill width={`${weatherData.current?.clouds}%`} />
		</Container>
	);
};

export default CloudMeter;
