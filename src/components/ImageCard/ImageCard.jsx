const ImageCard = ({ photo, openModal }) => {
  return (
    <div>
      {/* <a href={photo.urls.regular}> */}
      <img
        src={photo.urls.small}
        alt={photo.alt_description}
        loading="lazy"
        width="400"
        height="300"
        onClick={openModal}
      />
      {/* </a> */}
    </div>
  );
};

export default ImageCard;
