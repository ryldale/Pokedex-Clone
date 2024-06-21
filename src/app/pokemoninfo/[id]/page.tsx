const PokemonInfoPage = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  return (
    <div>
      <h1>Pokemon ID: {params.id}</h1>
    </div>
  );
};

export default PokemonInfoPage;
