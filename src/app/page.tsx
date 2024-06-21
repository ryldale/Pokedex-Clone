/* LINK https://pokeapi.co/api/v2/pokemon?limit=100&offset=0 */


import PokemonListPage from "@/module/pokelist/pages/PokemonList_page";
import { PokemonList } from "@/shared/interfaces/pokemon_types";
import Link from "next/link";





const HomePage = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
  );
  const data: PokemonList = await res.json();

  return (
    <PokemonListPage data={data} />
  );
};

export default HomePage;
