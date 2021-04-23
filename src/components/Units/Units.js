import React, { useState } from "react";
import Fahrenheit from "components/Units/Fahrenheit";
import Celsius from "components/Units/Celsius";

const Units = () => {
	const [unit, setUnit] = useState("F");

    const handleClick = e => setUnit(e.target)

	return (
		<div>
			<Celsius unit={unit}>C</Celsius>
			<Fahrenheit unit />
		</div>
	);
};

export default Units;
