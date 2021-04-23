import Square, { highlight } from "components/Units/parts/Square";
import styled from "styled-components";

const Celsius = styled(Square)`
	${({ unit }) => unit.toUpperCase() === "C" && highlight}
`;

export default Celsius;
