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

const getDayName = index => {
	const td = new Date().getDay();
	const dayNum = td + index + 1;
	return dayNames[dayNum > 6 ? 0 : dayNum]; // Handle edge case for SUN
};

const dayNames = {
	0: "SUN",
	1: "MON",
	2: "TUE",
	3: "WED",
	4: "THU",
	5: "FRI",
	6: "SAT",
};

const DailyForecast = ({ weatherData, isCelsius }) => {
	const renderedList = weatherData.daily?.map((temp, index) => {
		console.log(weatherData);
		return (
			<Li>
				<SubHead config={config}>{getDayName(index)}</SubHead>
				<Temp>{renderedTemp(isCelsius, temp)}</Temp>
			</Li>
		);
	});

	return <Ul>{renderedList}</Ul>;
};

export default DailyForecast;
