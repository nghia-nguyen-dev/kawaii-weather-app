import styled from "styled-components";
import Hero from "components/Hero/parts/Div";

const Div = styled(Hero)`
	color: var(--orange);
	font-size: var(--font-md);
	padding: 50px;
`;

const handleMsg = ({ message }) =>
	message.toUpperCase().includes("GEOLOCATION")
		? message
		: "sorry we were unable to obtain the weather data for that location.";

const ErrorMsg = ({ weatherData }) => {
	return <Div>{handleMsg(weatherData)}</Div>;
};

export default ErrorMsg;
