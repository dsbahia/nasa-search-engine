import axios from "axios";

const getImages = async (query) => {
  if(!query) {
    return [];
  }

  try {
    const response = await axios.get(`https://images-api.nasa.gov/search?q=${query}`);
    const imageResults = response.data.collection.items;
    const parsedImages = imageResults.filter(
      (imageResult) => imageResult.data[0].media_type === "image"
    );
    const images = parsedImages.map((image) => image.links[0].href);
    return images;
  } catch (error) {
    console.error(error);
    throw error;
  } 
}

export default getImages;
