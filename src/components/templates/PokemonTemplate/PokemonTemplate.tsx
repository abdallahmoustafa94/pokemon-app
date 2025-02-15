import { PokemonList } from "../../organisms/PokemonList/PokemonList";
import { PokemonDetail } from "../../organisms/PokemonDetail/PokemonDetail";

interface PokemonTemplateProps {
  selectedPokemon: string | null;
  onSelectPokemon: (name: string) => void;
}

export const PokemonTemplate = ({
  selectedPokemon,
  onSelectPokemon,
}: PokemonTemplateProps) => (
  <div className="app">
    <h1>Pokemon Directory</h1>
    <div className="container">
      <div className="list-container">
        <PokemonList onSelectPokemon={onSelectPokemon} />
      </div>
      <div className="detail-container">
        <PokemonDetail pokemonName={selectedPokemon} />
      </div>
    </div>
  </div>
);
