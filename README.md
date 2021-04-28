# Weather App

The most kawaii weather app in the entire world. WIP

## Goals

-   Use styled components more and less css. Offload the styling logic from classes to props
-   Keep components nice and slim
-   Try my best to keep components which are at the same level of abstraction together
-   Found a needed situation where I had to actually create a promise object(usually it is consumed)

## Tech

-   html
-   css
-   javascript
-   react

## APIs

- Geolocation
- Openweathermap


## Issues

- Working with the geolocation web API and the openweather API was difficult since their data does not sync up well when it comes to location coordinates(latitude/longitude)
    -   Ex. coordinates received from the Geolocation API, would not translate to the correct location when used as the parameters to call the openweathermap reverse geocoding API. This in terms does not yield a significant difference in the weather temp but it does when it comes to the city name being displayed. This lead me to make a decision to **not show the location name on the "inital" data fetching**. But when using the search bar, the location will show up(if it is found).

- In certain situation I had a hard time figuring out if a component should be a function or the jsx element return from a function.

### Notes/ observations

- Using styled-components forces me to work more with composition and component nesting.
- Created my first closure to hold the running count to get the name of day.