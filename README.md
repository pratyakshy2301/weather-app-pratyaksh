# WEATHER-APPLICATION

### Overview
 * Create an react app by command npx create-react-app weatherapp
 * Now go to openweather.org, create an account and login and get api keys by clicking on profile
 * copy api key and keep it
 * Also, we will get a mail for api key and example of api call copy it and keep it or can also be done 
    by current weather data->api docs
 * Like this : [https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid={apikey}]
 * My apikey is : [d5c86de0b1094457e7871d5c2a74805d]
 * In src folder make a components folder in which define a pages folder and a utils folder.
 * The pages folder will contain the Home.js file, Login.js file and a NotFound.js file.
 * The utils folder will contain the common.js file and a PublicRoutes.js file.
 * The components will have Navbar.js file, SearchForm.jsx file, weather.jsx file, WeatherDetails.jsx file and a weather.css file.
 * Navbar is showing the checkbox button to change the theme of page and displaying the title "PRATYAKSH's WEATHER APPLICATION" and my CSI ID - CT-CSI23/RJ0643.
 * The SearchForm.jsx file will help in taking input the city name for fetching its weather details from the openweather.org. It will also handle the search query, input change, form submit.
 * weather.css file to apply all styles and mediaquerys and also make a responsive web site.
 * In second file weather.jsx from components folder, we are fetching time for every sec , temperature , humidity, wind, visibility, favorite city and displaying to UI.
 * Handles Every request useffect and usestate hook to manage the state effectively
 * Fetching the current Weather Using openweathermap Api and manage their data and handles their errors as well as showing temperature in celcius and fahrenheit.
 * Also displaying the current situation weather image.
 * And Another file weatherDetails.jsx  to maintain Ui  components and details to display
### Wanna Try
  * If Have reference  click here : [https://weatherapp-ap.netlify.app/]
