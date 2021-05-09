import React from "react";
import styled from "styled-components";

const Svg = styled.svg`
	width: 160px;
	height: min-content;
`;

const getIcon = id => {
	if (id > 800 && id < 805) return cloudy;
};

const WeatherIcon = ({ weatherData }) => {
	return getIcon(weatherData.current.weatherID);
};

export default WeatherIcon;

const cloudy = (
	<Svg
		version="1.1"
		x="0px"
		y="0px"
		viewBox="0 0 100 111.11000000000001"
		enable-background="new 0 0 100 88.888"
	>
		<path
			fill="#ffd7b4"
			d="M96.295,48.146h-7.408c-2.045,0-3.704-1.657-3.704-3.703c0-2.045,1.659-3.701,3.704-3.701h7.408
	c2.044,0,3.704,1.658,3.704,3.701C100,46.489,98.339,48.146,96.295,48.146z"
		/>
		<path
			fill="#ffd7b4"
			d="M81.744,23.492c-1.447,1.446-3.791,1.446-5.238,0c-1.447-1.445-1.447-3.791,0-5.236l5.238-5.238
	c1.446-1.446,3.791-1.446,5.237,0c1.447,1.445,1.447,3.792,0,5.238L81.744,23.492z"
		/>
		<path
			fill="#ffd7b4"
			d="M76.285,52.396c0.947-2.471,1.49-5.147,1.494-7.953c0-12.27-9.951-22.222-22.226-22.222
	c-7.142,0-13.481,3.384-17.547,8.619c-2.653-0.781-5.465-1.21-8.377-1.21C13.266,29.63,0,42.895,0,59.258
	c0,16.365,13.266,29.63,29.629,29.63c5.921,0,24.491,0,29.628,0c12.274,0,22.226-9.951,22.226-22.222
	C81.483,61.232,79.526,56.259,76.285,52.396z M55.553,29.63c8.183,0,14.817,6.634,14.817,14.813c0,0.969-0.102,1.912-0.279,2.828
	c-3.204-1.793-6.897-2.828-10.834-2.828c-1.289,0-2.535,0.17-3.766,0.38C53.003,40.375,49.4,36.64,45.067,33.98
	C47.747,31.293,51.456,29.63,55.553,29.63z M59.257,81.48c-5.592,0-22.933,0-29.63,0c-12.273,0-22.221-9.948-22.221-22.222
	s9.948-22.22,22.221-22.22c10.541,0,19.325,7.358,21.604,17.204c2.315-1.498,5.062-2.392,8.026-2.392
	c8.183,0,14.813,6.635,14.813,14.816C74.071,74.846,67.44,81.48,59.257,81.48z"
		/>
		<path
			fill="#ffd7b4"
			d="M55.553,14.813c-2.045,0-3.704-1.658-3.704-3.702V3.704c0-2.046,1.66-3.704,3.704-3.704
	c2.046,0,3.704,1.658,3.704,3.704v7.407C59.257,13.157,57.601,14.813,55.553,14.813z"
		/>
		<path
			fill="#ffd7b4"
			d="M29.365,23.492l-5.236-5.236c-1.447-1.446-1.447-3.793,0-5.238c1.444-1.446,3.791-1.446,5.236,0l5.237,5.238
	c1.447,1.445,1.447,3.791,0,5.236C33.158,24.938,30.811,24.938,29.365,23.492z"
		/>
	
	</Svg>
);
