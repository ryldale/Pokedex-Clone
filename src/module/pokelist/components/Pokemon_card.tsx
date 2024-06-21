"use client";

import { PokemonInfo, PokemonResult } from "@/shared/interfaces/pokemon_types";
import Link from "next/link";
import { useEffect, useState } from "react";

interface propInterface {
  data: PokemonResult;
}

const PokemonCard = ({ data }: propInterface) => {
  const [info, setInfo] = useState<PokemonInfo | null>(null);

  useEffect(() => {
    fetch(`${data.url}`).then(async (res) => {
      const data: PokemonInfo = await res.json();
      console.log(data);
      setInfo(data);
    });
  }, []);

  return (
    <li>
      {info === null ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>{}</p>
          <Link href={'/pokemoninfo/' + info.id}>{data.name}</Link>
        </>
      )}
    </li>
  );
};

export default PokemonCard;
