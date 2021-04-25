import React, { useState } from "react";
import Fahrenheit from "components/Units/Fahrenheit";
import Celsius from "components/Units/Celsius";
import FlexContainer from "components/Units/parts/FlexContainer";

const Units = ({ isCelsius, setIsCelsius }) => {
	const handleClick = e =>
		e.target.innerText === "C" ? setIsCelsius(true) : setIsCelsius(false);

	return (
		<FlexContainer>
			<Celsius isCelsius={isCelsius} onClick={handleClick}>
				C
			</Celsius>
			<Fahrenheit isCelsius={isCelsius} onClick={handleClick}>
				F
			</Fahrenheit>
		</FlexContainer>
	);
};

export default Units;
