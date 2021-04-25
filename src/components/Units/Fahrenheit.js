import Circle, { highlight } from "components/Units/parts/Circle";
import styled from "styled-components";

const Fahrenheit = styled(Circle)`
	${p => !p.isCelsius && highlight}
`;

export default Fahrenheit;
