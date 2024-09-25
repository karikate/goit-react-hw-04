import { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchPhoto } from "./servises/api";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchPhoto(query);
        setPhotos(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query]);

  // const handleSetQuery = (searchValue) => {
  //   setQuery(searchValue);
  //   setPhotos([]);
  //   console.log("sdfv");
  // };

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {photos.length > 0 && <ImageGallery photos={photos} />}
      {isLoading && <Loader />}
      {isError && <p>Sorry, error!</p>}
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
