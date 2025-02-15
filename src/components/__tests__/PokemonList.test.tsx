import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { PokemonList } from "../organisms/PokemonList/PokemonList";

describe("PokemonList", () => {
  it("renders loading state initially", () => {
    render(
      <Provider store={store}>
        <PokemonList onSelectPokemon={() => {}} />
      </Provider>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("calls onSelectPokemon when a pokemon is clicked", async () => {
    const mockOnSelect = vi.fn();
    render(
      <Provider store={store}>
        <PokemonList onSelectPokemon={mockOnSelect} />
      </Provider>
    );

    const bulbasaurButton = await screen.findByText("bulbasaur");
    fireEvent.click(bulbasaurButton);

    expect(mockOnSelect).toHaveBeenCalledWith("bulbasaur");
  });
});
