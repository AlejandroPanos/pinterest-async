/* Create imports */
import "./css/styles.css";
import { header } from "./components/header";
import { imageGrid } from "./components/imageGrid";

/* Select elemtents */
const app = document.querySelector("#app");

/* Use elements */
app.appendChild(header());
app.appendChild(imageGrid());

/* ===== OLD CODE ===== */
// app.innerHTML = `
//     ${header()}
//     ${imageGrid()}
// `;

/* Go back to inital page state */
const logo = document.querySelector("a .logo-holder");
logo.addEventListener("click", (e) => {
  // Prevent browser default
  e.preventDefault();

  // Select grid and empty it
  const gridContainer = document.querySelector("#grid");
  const newGrid = imageGrid();
  gridContainer.replaceWith(newGrid);
});

/* Check first search since reload */
const wasReloaded = performance.getEntriesByType("navigation")[0].type === "reload";

if (wasReloaded) {
  const firstSearch = localStorage.getItem("firstSearch");

  if (firstSearch) {
    const gridContainer = document.querySelector("#grid");
    gridContainer.innerHTML = `
        <section id="grid">
            <main>
                <div class="container">
                    <p>Tu primera búsqueda antes de refrescar fue <strong>${firstSearch}</strong>.</p>
                </div>
            </main>
        </section>
    `;
  }

  localStorage.removeItem("firstSearch");
}
