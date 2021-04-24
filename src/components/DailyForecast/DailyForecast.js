import SubHead from "components/shared-parts/SubHead";
import styled from "styled-components";

const mockTemps = [
	{
		day: "MON",
		temp: 76,
	},
	{
		day: "TUE",
		temp: 54,
	},
	{
		day: "WED",
		temp: 31,
	},
	{
		day: "THU",
		temp: 60,
	},
	{
		day: "FRI",
		temp: 67,
	},
];

const Temp = styled.p`
	color: var(--orange);
	font-size: var(--font-md);
`;

const UL = styled.ul`
	display: flex;
	justify-content: space-between;
	grid-column: 1/4;
	background-color: var(--light-blue);
	padding: 48px 74px 42px;
	border-radius: var(--radius-lg);
	border: var(--border-lg);
	@media (max-width: 1016px) {
		grid-column:1/5;
	}
`;

const LI = styled.li`
	text-align: center;
`;

const config = {
	color: "var(--warm-white)",
	marginBottom: "12px",
};

const DailyForecast = () => {
	const renderedList = mockTemps.map(day => {
		return (
			<LI key={day.day}>
				<SubHead config={config}>{day.day}</SubHead>
				<Temp>{day.temp}</Temp>
			</LI>
		);
	});

	return <UL>{renderedList}</UL>;
};

export default DailyForecast;
