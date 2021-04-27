# Weather App

The most kawaii weather app in the entire world. WIP

## Issues faced

- Working with the geolocation web API and the openweather API was difficult since their data does not sync up well when it comes to location coordinates(latitude/longitude)
    -   Ex. coordinates received from the Geolocation API, would not would not translate to the correct location when used as the parameters to call the openweathermap reverse geocoding API. This in terms does not yield a significant difference in the weather temp but it does when it comes to the city name being displayed. This lead me to make a decision to **not show the location name on the "inital" data fetching**. But when using the search bar, the location will show up(if it is found).