"use client";

import { AnimeProp } from '@/interfaces/interface';
import { AnimeCard } from '..';

interface AnimeListProps {
  animes: AnimeProp[];
}

function AnimeList ({ animes }: AnimeListProps) {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {animes.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ))}
    </section>
  );
}

export default AnimeList;
