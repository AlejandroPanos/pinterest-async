export const header = () => {
  return `
    <header>
      <nav>
        <div class="container">
          <div class="nav-holder">
            <a href="">
              <div class="logo-holder">
                <img class="is-nav-logo" src="/pinterest.png" alt="Pinterest Logo" />
              </div>
            </a>
            <a href="" class="is-nav-link is-active">Inicio</a>
            <a href="" class="is-nav-link">Explorar</a>
            <a href="" class="is-nav-link">Crear</a>
            <input class="is-nav-search" type="text" placeholder="🔎 Buscar" />
            <button class="is-profile">A</button>
          </div>
        </div>
      </nav>
    </header>
    `;
};
