'use client';
import { voteFetchWithToken } from '@apis/fetchAPI';
import { Header } from '@components/all/Header';
import ArrowBackSVG from '@public/arrowBack.svg';
import CrownSVG from '@public/crown.svg';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Candidate {
  leaderName: string;
  voteCount: number;
}

const DUMMYCANDIDATERANKING: Candidate[] = [
  { leaderName: '김다희', voteCount: 10 },
  { leaderName: '김동혁', voteCount: 9 },
  { leaderName: '김민영', voteCount: 8 },
  { leaderName: '김수현', voteCount: 7 },
  { leaderName: '김승완', voteCount: 6 },
  { leaderName: '송은수', voteCount: 5 },
  { leaderName: '안혜연', voteCount: 4 },
  { leaderName: '이나현', voteCount: 3 },
  { leaderName: '이지인', voteCount: 2 },
  { leaderName: '조유담', voteCount: 1 },
];

export default function Page() {
  const router = useRouter();
  const [candidateRanking, setCandidateRanking] = useState<Candidate[]>(
    DUMMYCANDIDATERANKING
  );

  useEffect(() => {
    const fetchData = async () => {
      const token = 'token';

      try {
        const response = await voteFetchWithToken.get('/vote/fe-result', token);
        if (response.ok) {
          const data = await response.json();
          if (data) {
            setCandidateRanking(data);
          }
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);
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
        {candidateRanking[0].leaderName}
      </div>
      <div className="my-[10px]">{candidateRanking[0].voteCount}표</div>
      <section className="w-full bg-white rounded-t-xl overflow-y-scroll">
        {candidateRanking.slice(1).map((candidate, idx) => {
          return (
            <div
              key={candidate.leaderName}
              className="flex justify-between items-center w-[100%] h-[70px] text-[28px] px-[30px] border-b border-gray-200"
            >
              <div className="basis-[40px] flex justify-center">{idx + 2}</div>
              <div className="flex items-center">{candidate.leaderName}</div>
              <div>{candidate.voteCount}표</div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
