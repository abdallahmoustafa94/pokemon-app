import { useGetPokemonByNameQuery } from "../../../store/pokemonApi";
import { LoadingSpinner } from "../../atoms/LoadingSpinner/LoadingSpinner";
import { ErrorMessage } from "../../atoms/ErrorMessage/ErrorMessage";
import { PokemonCard } from "../../molecules/PokemonCard/PokemonCard";

interface PokemonDetailProps {
  pokemonName: string | null;
}

export const PokemonDetail = ({ pokemonName }: PokemonDetailProps) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(
    pokemonName ?? "",
    {
      skip: !pokemonName,
    }
  );

  if (!pokemonName)
    return <ErrorMessage message="Select a Pokemon to see details" />;
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message="Error loading Pokemon details" />;
  if (!data) return null;

  return <PokemonCard pokemon={data} />;
};
