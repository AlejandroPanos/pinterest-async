import "../css/imageGrid.css";
import { imageCard } from "./imageCard";

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
    emptyMessage.textContent = "Busca algo para empezar...";
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

/* ===== OLD CODE ===== */

// import { imageCard } from "./imageCard";

// export const imageGrid = (images = []) => {
//   if (!images || images.length === 0) {
//     return `
//       <main id="grid">
//         <section>
//           <div class="container">
//             <div class="is-card-grid">
//               <p>Busca algo para empezar...</p>
//             </div>
//           </div>
//         </section>
//       </main>
//     `;
//   }

//   const cards = images.map((image) => imageCard(image)).join("");

//   return `
//         <section id="grid">
//             <main>
//                 <div class="container">
//                     <div class="is-card-grid">
//                         ${cards}
//                     </div>
//                 </div>
//             </main>
//         </section>
//     `;
// };
