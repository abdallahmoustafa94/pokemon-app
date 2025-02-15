import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  PokemonList,
  PokemonDetail,
  PokemonListQuery,
  PokemonDetailQuery,
} from "../types/pokemon.types";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || "https://pokeapi.co/api/v2/",
  }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonList, void | PokemonListQuery>({
      query: (params) => ({
        url: "pokemon",
        params: { limit: 151, ...params },
      }),
    }),
    getPokemonByName: builder.query<PokemonDetail, PokemonDetailQuery["name"]>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonByNameQuery } = pokemonApi;
