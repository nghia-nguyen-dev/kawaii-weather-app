import styled from "styled-components";
import Hero from "components/Hero/parts/Div";

const Div = styled(Hero)`
	max-width: 650px;
	color: var(--orange);
	font-size: var(--font-md);
	padding: 40px;
	line-height: 1.1;
	@media (min-width: 1600px) {
		padding: 60px;
		max-width: 980px;
	}
`;

const handleMsg = ({ message }) =>
	message.toUpperCase().includes("GEOLOCATION")
		? `Sorry we were unable to access your location.`
		: "Sorry we were unable to obtain the weather info for that location.";

const ErrorMsg = ({ weatherData }) => {
	return <Div>{handleMsg(weatherData)}</Div>;
};

export default ErrorMsg;
