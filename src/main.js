/* Create imports */
import "./styles.css";
import { header } from "./components/header";
import { imageGrid } from "./components/imageGrid";

/* Select elemtents */
const app = document.querySelector("#app");

/* Use elements */
app.innerHTML = `
    ${header()}
    ${imageGrid()}
`;

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
                    <p>Tu primera búsqueda tras refrescar fue <strong>${firstSearch}</strong>.</p>
                </div>
            </main>
        </section>
    `;
  }

  localStorage.removeItem("firstSearch");
}
