import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { PokemonDetail } from "../organisms/PokemonDetail/PokemonDetail";

describe("PokemonDetail", () => {
  it("shows select message when no pokemon is selected", () => {
    render(
      <Provider store={store}>
        <PokemonDetail pokemonName={null} />
      </Provider>
    );
    expect(
      screen.getByText("Select a Pokemon to see details")
    ).toBeInTheDocument();
  });

  it("shows loading state when fetching pokemon details", () => {
    render(
      <Provider store={store}>
        <PokemonDetail pokemonName="bulbasaur" />
      </Provider>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
