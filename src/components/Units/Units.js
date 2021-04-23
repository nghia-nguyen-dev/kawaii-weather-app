import React, { useState } from "react";
import Fahrenheit from "components/Units/Fahrenheit";
import Celsius from "components/Units/Celsius";

const Units = () => {
	const [unit, setUnit] = useState("F");

	const handleClick = e => setUnit(e.target.innerText);

	return (
		<div className="Units">
			<Celsius unit={unit} onClick={handleClick}>
				C
			</Celsius>
			<Fahrenheit unit={unit} onClick={handleClick}>
				F
			</Fahrenheit>
		</div>
	);
};

export default Units;
