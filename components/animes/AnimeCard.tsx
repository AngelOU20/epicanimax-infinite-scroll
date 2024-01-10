import { Prop } from '@/interfaces/interface';
import { MotionDiv } from '..';
import Image from 'next/image';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

function AnimeCard ({ anime, index }: Prop) {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: 'easeInOut',
        duration: 0.5
      }}
      className="max-w-sm rounded relative w-ful">
      <div className="relative w-full h-[37vh]">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#272b33] rounded-lg">
            <p className="text-white text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="./episodes.svg"
            alt="episodes"
            width={20}
            height={20}
            className="object-contain"
          />
          <p className="text-base text-white font-bold">
            {anime.episodes || anime.episodes_aired}
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center bg-[#12D357]/80 p-2 rounded-lg absolute top-4 left-2">
          <Image
            src="./star.svg"
            alt="star"
            width={18}
            height={18}
            className="object-contain"
          />
          <p className="text-base font-bold text-[#FFFFFF]">{anime.score}</p>
        </div>
      </div>
    </MotionDiv>
  );
}

export default AnimeCard;