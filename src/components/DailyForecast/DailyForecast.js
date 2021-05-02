import { renderedTemp, getDay } from "utils/helper";
import Temp from "components/DailyForecast/parts/Temp";
import Ul from "components/DailyForecast/parts/Ul";
import Li from "components/DailyForecast/parts/Li";
import Day from "components/DailyForecast/parts/Day";

const DailyForecast = ({ weatherData, isCelsius }) => {
	const renderedList = weatherData.daily?.map((temp, index) => {
		const day = getDay(index);
		return (
			<Li key={day}>
				<Day>{day}</Day>
				<Temp>{renderedTemp(isCelsius, temp)}</Temp>
			</Li>
		);
	});

	return <Ul>{renderedList}</Ul>;
};

export default DailyForecast;
