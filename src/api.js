import axios from "axios";

const fetchTypes = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/type", {});
  return response.data.results;
};

export default fetchTypes;
