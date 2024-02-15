"use server";

import { AnimeCard } from "@/components";
import { AnimeProp } from "@/interfaces/interface";

const API_BASE_URL = process.env.VITE_API_BASE_URL;
const MAX_LIMIT = 8;

export async function fetchAnime(page: number) {
  const response = await fetch(
    `${API_BASE_URL}?page=${page}&limit=${MAX_LIMIT}&order=popularity`
  );

  const data = await response.json();

  return data.map((anime: AnimeProp, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
}
