import "../css/header.css";

export const header = () => {
  // Create elements
  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const container = document.createElement("div");
  const navHolder = document.createElement("div");

  // Logo
  const logoLink = document.createElement("a");
  logoLink.href = "";
  const logoHolder = document.createElement("div");
  logoHolder.className = "logo-holder";
  const logoImg = document.createElement("img");
  logoImg.className = "is-nav-logo";
  logoImg.src = "/pinterest.png";
  logoImg.alt = "Pinterest Logo";

  // Nav links
  const linkInicio = document.createElement("a");
  linkInicio.href = "";
  linkInicio.className = "is-nav-link is-active";
  linkInicio.textContent = "Inicio";

  const linkExplorar = document.createElement("a");
  linkExplorar.href = "";
  linkExplorar.className = "is-nav-link";
  linkExplorar.textContent = "Explorar";

  const linkCrear = document.createElement("a");
  linkCrear.href = "";
  linkCrear.className = "is-nav-link";
  linkCrear.textContent = "Crear";

  // Search input
  const searchInput = document.createElement("input");
  searchInput.className = "is-nav-search";
  searchInput.type = "text";
  searchInput.placeholder = "🔎 Buscar";

  // Profile button
  const profileButton = document.createElement("button");
  profileButton.className = "is-profile";
  profileButton.textContent = "A";

  // Assign classes to containers
  container.className = "container";
  navHolder.className = "nav-holder";

  // Create structure
  logoHolder.appendChild(logoImg);
  logoLink.appendChild(logoHolder);

  navHolder.appendChild(logoLink);
  navHolder.appendChild(linkInicio);
  navHolder.appendChild(linkExplorar);
  navHolder.appendChild(linkCrear);
  navHolder.appendChild(searchInput);
  navHolder.appendChild(profileButton);

  container.appendChild(navHolder);
  nav.appendChild(container);
  header.appendChild(nav);

  return header;
};

/* ===== OLD CODE ===== */

// export const header = () => {
//   return `
//     <header>
//       <nav>
//         <div class="container">
//           <div class="nav-holder">
//             <a href="">
//               <div class="logo-holder">
//                 <img class="is-nav-logo" src="/pinterest.png" alt="Pinterest Logo" />
//               </div>
//             </a>
//             <a href="" class="is-nav-link is-active">Inicio</a>
//             <a href="" class="is-nav-link">Explorar</a>
//             <a href="" class="is-nav-link">Crear</a>
//             <input class="is-nav-search" type="text" placeholder="🔎 Buscar" />
//             <button class="is-profile">A</button>
//           </div>
//         </div>
//       </nav>
//     </header>
//     `;
// };
