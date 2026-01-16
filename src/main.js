/* Create imports */
import "./css/styles.css";
import { header } from "./components/header/header";
import { imageGrid } from "./components/imageGrid/imageGrid";
import { loadInitialImages, setupSearch } from "./helpers/api";

/* Select elemtents */
const app = document.querySelector("#app");

/* Use elements */
app.appendChild(header());
app.appendChild(imageGrid());

/* Load initial images & initialise search */
setupSearch();
loadInitialImages("random");

/* Go back to inital page state */
const logo = document.querySelector("a .logo-holder");
logo.addEventListener("click", async (e) => {
  // Prevent browser default
  e.preventDefault();

  await loadInitialImages("random");
});
