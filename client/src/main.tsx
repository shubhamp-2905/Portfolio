// Import React's createRoot function to render our app
import { createRoot } from "react-dom/client";

// Import our main App component
import App from "./App";

// Import global CSS styles
import "./index.css";

// Find the HTML element with id="root" and create a React root
const rootElement = document.getElementById("root");

// Create the root and render our App component inside it
createRoot(rootElement!).render(<App />);