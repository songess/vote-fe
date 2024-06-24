'use client';

import ArrowBackSVG from '@public/arrowBack.svg';
import { Header } from '@components/all/Header';
import { useRouter } from 'next/navigation';

const TeamName = ['AZITO', 'BEATBUDDY', 'TIG', 'BULDOG', 'COUPLELOG'];

export default function TeamPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full h-full px-[30px] relative pt-[80px] items-center">
      <Header />
      <ArrowBackSVG
        className="absolute top-[120px] left-[25px] cursor-pointer"
        onClick={() => {
          router.push('/');
        }}
      />

      <h1 className="py-[30px] text-[28px]">TEAM 투표</h1>

      <section className="flex flex-col items-center gap-y-[30px] w-full h-fit">
        {TeamName.map((name, idx) => (
          <div
            key={idx}
            className="w-[80%] h-[60px] text-2xl flex justify-center items-center rounded-xl bg-white shadow-teamBoxShadow"
          >
            {name}
          </div>
        ))}
      </section>

      <div
        className="text-themeColor text-[20px] font-semibold self-end mt-[20px] grow cursor-pointer"
        onClick={() => {
          router.push('/vote/team-result');
        }}
      >
        결과보기 ▶︎
      </div>
      <button className="bg-themeColor text-white w-full h-[70px] rounded-[10px] mt-[20px] mb-[40px] text-[28px] font-semibold">
        투표하기
      </button>
    </div>
  );
}
