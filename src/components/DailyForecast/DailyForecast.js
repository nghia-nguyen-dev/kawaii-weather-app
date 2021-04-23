import SubHead from "components/shared-parts/SubHead";
import styled from "styled-components";

const mockTemps = [76, 54, 31, 60, 67];

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
`;

const LI = styled.li`
	text-align: center;
`;

const config = {
	color: "var(--warm-white)",
	marginBottom: "12px",
};

const DailyForecast = () => {
	return (
		<UL>
			<LI>
				<SubHead config={config}>Mon</SubHead>
				<Temp>76</Temp>
			</LI>
		</UL>
	);
};

export default DailyForecast;
