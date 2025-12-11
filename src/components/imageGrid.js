import { imageCard } from "./imageCard";

export const imageGrid = (images = []) => {
  if (!images || images.length === 0) {
    return `
      <main id="grid">
        <section>
          <div class="container">
            <div class="is-card-grid">
              <p>Busca algo para empezar...</p>
            </div>
          </div>
        </section>
      </main>
    `;
  }

  const cards = images.map((image) => imageCard(image)).join("");

  return `
        <section id="grid">
            <main>
                <div class="container">
                    <div class="is-card-grid">
                        ${cards}
                    </div>
                </div>
            </main>
        </section>
    `;
};
