import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AllRoutes } from "./frontend/Routes/AllRoutes";

function App() {
	return (
		<div className="App">
			<AllRoutes />
			<ToastContainer />
		</div>
	);
}

export default App;
