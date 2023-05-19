import { useState } from "react";
import { useEffect } from "react";
import FavouritesList from "./components/FavouritesList";
import PokemansList from "./components/PoekmansList";
import TypesList from "./components/TypesList";
import fetchTypes from "./api";

function App() {
  const [types, setTypes] = useState([]);
  const handleTypes = async () => {
    const result = await fetchTypes();
    setTypes(result);
  };

  useEffect(() => {
    handleTypes();
  }, []);

  return (
    <div id="container">
      <section className="hero is-small is-primary">
        <div className="hero-body">
          <p className="title">pokemans</p>
          <p className="subtitle">github.com/humantorch</p>
        </div>
      </section>
      <div className="columns is-gapless is-fullheight">
        <div className="typeslist column is-one-fifth ">
          <TypesList types={types} />
        </div>
        <div className="pokemanslist column is-three-fifths ">
          <PokemansList />
        </div>
        <div className="favouriteslist column is-one-fifth ">
          <FavouritesList />
        </div>
      </div>
    </div>
  );
}

export default App;
