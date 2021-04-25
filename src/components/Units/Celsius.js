import Circle, { highlight } from "components/Units/parts/Circle";
import styled from "styled-components";

const Celsius = styled(Circle)`
	${p => p.isCelsius && highlight}
`;

export default Celsius;
