import axios from "axios";

function TypesList({ types }) {
  const loadPokemans = async (type) => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/type/" + type,
      {}
    );
    console.log(response);
  };
  const renderedTypes = types.map((type) => {
    return (
      <li onClick={() => loadPokemans(type.name)} key={type.name}>
        {type.name}
      </li>
    );
  });
  return (
    <div>
      <ul>{renderedTypes}</ul>
    </div>
  );
}

export default TypesList;
