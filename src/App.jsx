import { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchPhoto } from "./servises/api";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [photos, setPhotos] = useState([]);
  // const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchPhoto();
      setPhotos(data);
    };
    getData();
  }, []);

  const handleSetQuery = () => {
    // setQuery(searchValue);
    console.log("sdfv");
  };

  return (
    <div>
      <SearchBar onSubmit={handleSetQuery} />
      <ImageGallery photos={photos} />
    </div>
  );
};

export default App;

/* */

// const getData = async () => {
//   try {
//     const data = await fetchPhoto(query);
//     setPhotos((prev) => [...prev, ...data.hits]);
//   } catch {
//     console.log("error");
//   }

//   getData();
// };
