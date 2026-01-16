import "./imageGrid.css";
import { imageCard } from "../imageCard/imageCard";

export const imageGrid = (images = []) => {
  // Create elements
  const main = document.createElement("main");
  main.id = "grid";

  const section = document.createElement("section");
  const container = document.createElement("div");
  container.className = "container";

  const cardGrid = document.createElement("div");
  cardGrid.className = "is-card-grid";

  // Empty state
  if (!images || images.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = "Cargando imágenes..."; // ✅ Cambiado
    emptyMessage.style.textAlign = "center";
    emptyMessage.style.margin = "2rem 0";
    cardGrid.appendChild(emptyMessage);
  } else {
    // Data state
    images.forEach((image) => {
      const card = imageCard(image);
      cardGrid.appendChild(card);
    });
  }

  // Create structure
  container.appendChild(cardGrid);
  section.appendChild(container);
  main.appendChild(section);

  return main;
};
