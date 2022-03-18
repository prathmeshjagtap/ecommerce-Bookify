import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider, DataProvider } from "./frontend/contexts";

// Call make Server
makeServer();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<DataProvider>
				<FilterProvider>
					<App />
				</FilterProvider>
			</DataProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
