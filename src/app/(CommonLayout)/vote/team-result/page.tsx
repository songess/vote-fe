'use client';

import { Header } from '@components/all/Header';
import ArrowBackSVG from '@public/arrowBack.svg';
import CrownSVG from '@public/crown.svg';
import { useRouter } from 'next/navigation';

interface TEAM {
  name: string;
  voteCount: number;
}

const DUMMYTEAMRANKING: TEAM[] = [
  { name: 'AZITO', voteCount: 10 },
  { name: 'BEATBUDDY', voteCount: 9 },
  { name: 'TIG', voteCount: 8 },
  { name: 'BULDOG', voteCount: 7 },
  { name: 'COUPLELOG', voteCount: 6 },
];

export default function TeamResultPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full h-full relative px-5 pt-[120px] items-center">
      <Header />
      <ArrowBackSVG
        className="absolute top-[120px] left-[25px] cursor-pointer"
        onClick={() => {
          router.back();
        }}
      />
      <div className="w-[120px] h-[120px] bg-white flex justify-center items-center rounded-full text-[24px] font-semibold relative">
        <div className="absolute top-[-24px] left-[-18px]">
          <CrownSVG />
        </div>
        {DUMMYTEAMRANKING[0].name}
      </div>
      <div className="my-[10px]">{DUMMYTEAMRANKING[0].voteCount}표</div>
      <section className="w-full bg-white rounded-t-xl overflow-y-scroll">
        {DUMMYTEAMRANKING.slice(1).map((team, idx) => {
          return (
            <div
              key={team.name}
              className="flex justify-between items-center w-[100%] h-[70px] text-[28px] px-[30px] border-b border-gray-200"
            >
              <div className="basis-[40px] flex justify-center">{idx + 2}</div>
              <div className="flex items-center">{team.name}</div>
              <div>{team.voteCount}표</div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
