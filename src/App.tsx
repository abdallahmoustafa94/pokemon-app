import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { PokemonTemplate } from "./components/templates/PokemonTemplate/PokemonTemplate";
import "./App.css";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  return (
    <Provider store={store}>
      <PokemonTemplate
        selectedPokemon={selectedPokemon}
        onSelectPokemon={setSelectedPokemon}
      />
    </Provider>
  );
}

export default App;
