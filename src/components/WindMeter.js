import React from "react";
import styled from "styled-components";

const Container = styled.div`
	position: relative;
	border: var(--border-md);
	border-radius: var(--border-radius-md);
	padding: 18px 28px 15px;
`;

const Fill = styled.div`
	background-color: var(--orange);

	height: 100%;
	position: absolute;
	width: 65%;
	left: 0;
	top: 0;
	z-index: -1;
	border-radius: 0px;
`;

const SubHead = styled.h3`
	letter-spacing:var(--letter-spacing-sm);
	text-transform:uppercase;
	font-size: 12px;
`;

const WindMeter = () => {
	return (
		<Container>
			<SubHead>Wind</SubHead>
			<Fill />
		</Container>
	);
};

export default WindMeter;
