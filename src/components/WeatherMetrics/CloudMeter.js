import Container from "components/WeatherMetrics/parts/Container";
import Fill from "components/WeatherMetrics/parts/Fill";
import SubHead from "components/WeatherMetrics/parts/SubHead";

const CloudMeter = () => {
	return (
		<Container>
			<SubHead>Clouds</SubHead>
			<Fill width="75%"/>
		</Container>
	);
};

export default CloudMeter;