/* Create imports */
import axios from "axios";
import { imageGrid } from "../components/imageGrid";

/* Create variables */
const navSearch = document.querySelector(".is-nav-search");

/* Add event listeners */
navSearch.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    const query = e.target.value.trim();
    if (query) {
      if (!localStorage.getItem("firstSearch")) {
        localStorage.setItem("firstSearch", query);
      }
      await searchImages(query);
      e.target.value = "";
    }
  }
});

const searchImages = async (query) => {
  const url = `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_ACCESS_KEY
  }&query=${query}&per_page=20`;
  try {
    const response = await axios.get(url);
    const images = response.data.results;
    const gridContainer = document.querySelector("#grid");

    const newGrid = imageGrid(images);
    gridContainer.replaceWith(newGrid);
  } catch (error) {
    console.log("An error occurred:", error);
  }
};
