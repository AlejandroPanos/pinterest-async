export const imageCard = (image) => {
  console.log(image);
  const imageSrc = image.urls.regular || "/mountain.jpg";
  const userSrc = image.user.profile_image.large || "/user.jpg";
  const username = image.user.name || "Unknown";
  const date = image.created_at.split("T")[0];
  const alt = image.alt_description;
  const likes = image.likes;
  const photos = image.user.total_photos;

  return `
        <div class="is-card">
            <div class="card-image">
                <img class="is-card-image" src="${imageSrc}" alt="${alt}" />
                <div class="likes">❤️ ${likes}</div>
                <div class="photos">📸 ${photos}</div>
                <button class="is-card-button">Visitar</button>
                <div class="user-image">
                    <img class="is-user-image" src="${userSrc}" alt="A user photo" />
                </div>
            </div>
            <div class="user-info">
                <p>${username}</p>
                <p>⤴️ ${date}</p>
            </div>
        </div>
    `;
};
