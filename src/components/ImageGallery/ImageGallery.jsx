const ImageGallery = ({ photos }) => {
  return (
    <div>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <a href={photo.urls.regular}>
              <img
                src={photo.urls.small}
                alt="${photo.tags}"
                loading="lazy"
                width="400"
                height="300"
              />
            </a>
            <p>{photo.alt_description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;

// const ImageGallery = ({ photos }) => {
//   return (
//     <ul>
//       {photos.map((photo) => (
//         <li key={photo.id}>
//           <a href={photo.urls.regular}>
//             <img
//               src={photo.urls.small}
//               loading="lazy"
//               width="400"
//               height="300"
//             />
//           </a>
//           <p>{photo.alt_description}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ImageGallery;
