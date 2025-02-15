import { useGetPokemonListQuery } from "../../../store/pokemonApi";
import { Button } from "../../atoms/Button/Button";
import { LoadingSpinner } from "../../atoms/LoadingSpinner/LoadingSpinner";
import { ErrorMessage } from "../../atoms/ErrorMessage/ErrorMessage";

interface PokemonListProps {
  onSelectPokemon: (name: string) => void;
}

export const PokemonList = ({ onSelectPokemon }: PokemonListProps) => {
  const { data, error, isLoading } = useGetPokemonListQuery();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message="Error loading Pokemon" />;

  return (
    <div className="pokemon-list">
      {data?.results.map((pokemon) => (
        <Button
          key={pokemon.name}
          onClick={() => onSelectPokemon(pokemon.name)}
        >
          {pokemon.name}
        </Button>
      ))}
    </div>
  );
};
