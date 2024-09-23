import axios from "axios";

export const fetchPhoto = async () => {
  const AccessKey = "8D7P1yJV46O80rFVy5nPpT81oO6pOspldbBTrXvhF6g";
  const { data } = await axios.get(
    `https://api.unsplash.com/photos/?client_id=${AccessKey}`
  );
  return data;
};
