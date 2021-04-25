import Container from "components/WeatherMetrics/parts/Container";
import Fill from "components/WeatherMetrics/parts/Fill";
import SubHead from "components/shared-parts/SubHead";

const CloudMeter = ({ weatherData }) => {
	return (
		<Container>
			<SubHead>cloudy</SubHead>
			<Fill width={`${weatherData.current?.clouds}%`} />
		</Container>
	);
};

export default CloudMeter;
