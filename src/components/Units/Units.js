import React, { useState } from "react";
import Fahrenheit from "components/Units/Fahrenheit";
import Celsius from "components/Units/Celsius";
import FlexContainer from "components/Units/parts/FlexContainer";

const Units = ({ unit, setUnit }) => {
	const handleClick = e => setUnit(e.target.innerText);
	return (
		<FlexContainer>
			<Celsius unit={unit} onClick={handleClick}>
				C
			</Celsius>
			<Fahrenheit unit={unit} onClick={handleClick}>
				F
			</Fahrenheit>
		</FlexContainer>
	);
};

export default Units;
