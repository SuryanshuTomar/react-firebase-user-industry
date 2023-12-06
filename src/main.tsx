import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UserProviderComp } from "./context/userContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	// <React.StrictMode>
		<UserProviderComp>
			<App />
		</UserProviderComp>
	// </React.StrictMode>
);
