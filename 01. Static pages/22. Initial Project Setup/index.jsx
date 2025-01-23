import App from "./App"
import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
Challenge: Project setup


- Import and render the App component inside of index.jsx using ReactDOM
    - At this point you should have your "Navbar goes here" etc. showing up
      in the mini-browser.
- Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
  Put the `<links />` to those fonts ABOVE the style.css link in index.html.
  You may need to do some extra research to figure out how this 
  works if you haven't done it before.
*/

root.render(
  <App />
)