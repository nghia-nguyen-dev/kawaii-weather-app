import SubHead from "components/shared-parts/SubHead";
import { renderedTemp } from "utils/helper";
import styled from "styled-components";

const Temp = styled.p`
	color: var(--orange);
	font-size: var(--font-md);
`;

const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
	grid-column: 1/4;
	background-color: var(--light-blue);
	padding: 48px 74px 42px;
	border-radius: var(--radius-lg);
	border: var(--border-lg);
	@media (max-width: 1016px) {
		grid-column: 1/5;
	}
	@media (max-width: 744px) {
		padding: 38px 52px 32px;
	}
`;

const Li = styled.li`
	text-align: center;
`;

const config = {
	color: "var(--warm-white)",
	marginBottom: "12px",
};

// Create closure
const getDay = (function () {
	let runningCount = new Date().getDay();
	const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

	return () => {
		runningCount++;
		if (days[runningCount] === undefined) runningCount = 0;
		return days[runningCount];
	};
}());

const DailyForecast = ({ weatherData, isCelsius }) => {
	const renderedList = weatherData.daily?.map((temp, index) => {
		return (
			<Li>
				<SubHead config={config}>{getDay()}</SubHead>
				<Temp>{renderedTemp(isCelsius, temp)}</Temp>
			</Li>
		);
	});

	return <Ul>{renderedList}</Ul>;
};

export default DailyForecast;
