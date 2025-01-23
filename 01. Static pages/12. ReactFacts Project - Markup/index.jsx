/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding more styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="react-logo.png"` in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */
  import { createElement } from "react"
  import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))
root.render(
  <main>
    <img src="react-logo.png" />
    <h1></h1>
  </main>
)