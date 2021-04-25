export const toCelsius = f => ((f - 32) * 5) / 9;
export const renderedTemp = (isCelsius, temp) =>
	Math.round(isCelsius ? toCelsius(temp) : temp);

/* To determine meter width in css (wind speed in mph)
 ** max width of bar is 100%
 ** max wind speed 75
 ** need to use a multiplier
 */
const maxWindSpeed = 75;
export const multiplier = 100 / maxWindSpeed;
