import Square, { highlight } from "components/Units/parts/Square";
import styled from "styled-components";

const Fahrenheit = styled(Square)`
	${({ unit }) => unit === "F" && highlight}
`;

export default Fahrenheit;
