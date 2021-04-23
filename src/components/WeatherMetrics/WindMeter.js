import Container from "components/WeatherMetrics/parts/Container";
import Fill from "components/WeatherMetrics/parts/Fill";
import SubHead from "components/WeatherMetrics/parts/SubHead";

const WindMeter = () => {
	return (
		<Container>
			<SubHead>Wind</SubHead>
			<Fill width="35%"/>
		</Container>
	);
};

export default WindMeter;
