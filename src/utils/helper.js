export const toCelsius = f => ((f - 32) * 5) / 9;
export const renderedTemp = (isCelsius, temp) => Math.round(isCelsius ? toCelsius(temp) : temp);