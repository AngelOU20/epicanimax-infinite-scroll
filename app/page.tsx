// "use client";

import { AnimeList, LoadMore } from '@/components';
import { fetchAnimes } from '@/services/animes';
import { AnimeProp } from '@/interfaces/interface';
import { fetchAnime } from '@/services/action';
import { useEffect, useState } from 'react';

export default async function Home () {
  // const data = await fetchAnime(1);
  const result = await fetchAnimes({ page: 1 });

  // const [animes, setAnimes] = useState<AnimeProp[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetchAnimes({ page: 1 });
  //     setAnimes(result);
  //   };

  //   fetchData();
  // }, []);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      <AnimeList animes={result} />
      <LoadMore />
    </main>
  );
}
