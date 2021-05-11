# Weather App
Often times I find myself checking the weather through google. But then I wanted to make my own. Introducing the most kawaii weather app in the entire world.

[**VIEW DEMO**](https://quirky-cray-e4f6c1.netlify.app)

## Features

-   Get current and 5 day weather forecast
-   Choose temperature units
-   On hover see more details about weather metrics
-   Handle different error message (for example user deny location or fetch error)
-   Climacons by Adam Whitcroft via [the noun project](https://thenounproject.com/adamwhitcroft/collection/climacons/)

## In progress

-   Update weather icon
-   Retry button to start up Geolocation API???
-   responsive down to mobile view

## Goals

-   Use a serverless function to act as a proxy server to hide API key on the frontend
-   Use styled components
-   Keep components nice and slim
-   Keep components which are at the same level of abstraction together

## Tech

-   html
-   css
-   javascript
-   react

## APIs

- Geolocation
- Openweathermap

## Known Issues

- City name with more than one word is tricky to handle when building up a search query. (Ex. New York City) Might need to implement some search algorithm to handle this?
- Searching with some US zipcodes does not work and point to a different location.
- Location name will not be displayed when fetching weather data using the client's current position. This is intentionally left out since the Geolocation coordinates(lat/lon) response does not map well with the openweathermap geocoding API . For example the response location could highly be 1 town/city over.

### Notes/ observations

- Working with styled-components forces me to work more with composition and component nesting.
- Handling logic that changes the css is a lot easier with styled components.
