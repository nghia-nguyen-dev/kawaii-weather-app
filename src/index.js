import ReactDOM from "react-dom";
import App from "components/App";
import "css/index.css";

// navigator.geolocation.getCurrentPosition(position => {
// 	console.log(position.coords.latitude, position.coords.longitude);
// });

ReactDOM.render(<App />, document.querySelector("#root"));
