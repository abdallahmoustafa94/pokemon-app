import { PokemonDetail } from "../../../types/pokemon.types";

interface PokemonCardProps {
  pokemon: PokemonDetail;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => (
  <div className="pokemon-card">
    <h2>{pokemon.name}</h2>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <div className="pokemon-info">
      <div>Height: {pokemon.height}</div>
      <div>Weight: {pokemon.weight}</div>
      <div>Types: {pokemon.types.map((type) => type.type.name).join(", ")}</div>
    </div>
  </div>
);
