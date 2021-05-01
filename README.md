# Weather App

The most kawaii weather app in the entire world. WIP

## Goals

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
- Searching with some US zipcodes does not work. (Ex. New York)
- Location will no be displayed when fetching weather data using the client's current position. This is intentional since the Geolocation coordinates response does not map well with the openweathermap api. For example the response location could possibly be a nearby city/town

### Notes/ observations

- Using styled-components forces me to work more with composition and component nesting.
