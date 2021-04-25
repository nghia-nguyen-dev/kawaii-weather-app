import Container from "components/WeatherMetrics/parts/Container";
import Fill from "components/WeatherMetrics/parts/Fill";
import SubHead from "components/shared-parts/SubHead";
import { multiplier } from "utils/helper";

const WindMeter = ({ weatherData }) => {
	return (
		<Container>
			<SubHead>windy</SubHead>
			<Fill width={`${weatherData.current?.windSpeed * multiplier}%`} />
		</Container>
	);
};

export default WindMeter;
