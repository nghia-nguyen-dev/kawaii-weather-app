import Circle, { highlight } from "components/Units/parts/Circle";
import styled from "styled-components";

const Celsius = styled(Circle)`
	${p => p.unit === "C" && highlight}
`;

export default Celsius;
