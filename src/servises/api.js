import axios from "axios";

export const fetchPhoto = async (query) => {
  const AccessKey = "8D7P1yJV46O80rFVy5nPpT81oO6pOspldbBTrXvhF6g";
  const BaseUrl = `https://api.unsplash.com/search/photos`;

  const { data } = await axios.get(BaseUrl, {
    params: {
      client_id: AccessKey,
      query: query,
    },
  });

  return data.results;
};
