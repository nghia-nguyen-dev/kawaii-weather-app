import Circle, { highlight } from "components/Units/parts/Circle";
import styled from "styled-components";

const Fahrenheit = styled(Circle)`
	${({ unit }) => unit === "F" && highlight}
`;

export default Fahrenheit;
