import "../css/imageCard.css";

export const imageCard = (image) => {
  // Get data
  const imageSrc = image.urls.regular || "/mountain.jpg";
  const userSrc = image.user.profile_image.large || "/user.jpg";
  const username = image.user.name || "Unknown";
  const date = image.created_at.split("T")[0];
  const alt = image.alt_description || "Unsplash image";
  const likes = image.likes;
  const photos = image.user.total_photos;

  // Create main div
  const card = document.createElement("div");
  card.className = "is-card";

  // Create image div
  const cardImage = document.createElement("div");
  cardImage.className = "card-image";

  // Main image
  const mainImage = document.createElement("img");
  mainImage.className = "is-card-image";
  mainImage.src = imageSrc;
  mainImage.alt = alt;

  // Likes
  const likesDiv = document.createElement("div");
  likesDiv.className = "likes";
  likesDiv.textContent = `❤️ ${likes}`;

  // Photos
  const photosDiv = document.createElement("div");
  photosDiv.className = "photos";
  photosDiv.textContent = `📸 ${photos}`;

  // Visit btn
  const visitButton = document.createElement("button");
  visitButton.className = "is-card-button";
  visitButton.textContent = "Visitar";

  // User image container
  const userImageDiv = document.createElement("div");
  userImageDiv.className = "user-image";

  const userImage = document.createElement("img");
  userImage.className = "is-user-image";
  userImage.src = userSrc;
  userImage.alt = "A user photo";

  userImageDiv.appendChild(userImage);

  // Create cardImage
  cardImage.appendChild(mainImage);
  cardImage.appendChild(likesDiv);
  cardImage.appendChild(photosDiv);
  cardImage.appendChild(visitButton);
  cardImage.appendChild(userImageDiv);

  // Create user info
  const userInfo = document.createElement("div");
  userInfo.className = "user-info";

  const usernameParagraph = document.createElement("p");
  usernameParagraph.textContent = username;

  const dateParagraph = document.createElement("p");
  dateParagraph.textContent = `⤴️ ${date}`;

  userInfo.appendChild(usernameParagraph);
  userInfo.appendChild(dateParagraph);

  // Create card
  card.appendChild(cardImage);
  card.appendChild(userInfo);

  return card;
};

/* ===== OLD CODE ===== */

// export const imageCard = (image) => {
//   const imageSrc = image.urls.regular || "/mountain.jpg";
//   const userSrc = image.user.profile_image.large || "/user.jpg";
//   const username = image.user.name || "Unknown";
//   const date = image.created_at.split("T")[0];
//   const alt = image.alt_description;
//   const likes = image.likes;
//   const photos = image.user.total_photos;

//   return `
//         <div class="is-card">
//             <div class="card-image">
//                 <img class="is-card-image" src="${imageSrc}" alt="${alt}" />
//                 <div class="likes">❤️ ${likes}</div>
//                 <div class="photos">📸 ${photos}</div>
//                 <button class="is-card-button">Visitar</button>
//                 <div class="user-image">
//                     <img class="is-user-image" src="${userSrc}" alt="A user photo" />
//                 </div>
//             </div>
//             <div class="user-info">
//                 <p>${username}</p>
//                 <p>⤴️ ${date}</p>
//             </div>
//         </div>
//     `;
// };
