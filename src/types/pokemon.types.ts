// API Response Types
export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonList {
  count: number;
  results: Pokemon[];
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

export interface PokemonListQuery {
  limit?: number;
  offset?: number;
}

export interface PokemonDetailQuery {
  name: string;
}
