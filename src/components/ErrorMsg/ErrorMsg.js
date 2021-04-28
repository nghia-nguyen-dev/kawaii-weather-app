import styled from "styled-components";
import Hero from "components/Hero/parts/Div";

const Div = styled(Hero)`
	color: var(--orange);
	font-size: var(--font-md);
	padding: 50px;
	line-height: 1.1;
`;

const handleMsg = ({ message }) =>
	message.toUpperCase().includes("GEOLOCATION")
		? `Sorry we were unable to access your location.`
		: "Sorry we were unable to obtain the weather info for that location.";

const ErrorMsg = ({ weatherData }) => {
	return <Div>{handleMsg(weatherData)}</Div>;
};

export default ErrorMsg;
