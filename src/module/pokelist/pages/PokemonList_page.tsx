import { PokemonList } from "@/shared/interfaces/pokemon_types";
import PokemonCard from "../components/Pokemon_card";

interface propInterface {
    data: PokemonList
}

const PokemonListPage = ({data}:propInterface) => {
  return (
    <>
      <h1>POKEMON</h1>
      <ul>
        {data.results.map((pokemon, index) => (
          <PokemonCard data={pokemon} key={index} />
        ))}
      </ul>
    </>
  );
};

export default PokemonListPage;
