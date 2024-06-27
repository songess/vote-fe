'use client';
import { Header } from '@components/all/Header';
import { useRouter } from 'next/navigation';

const Cards = [
  { name: 'FE 파트장 투표', url: '/vote/fe' },
  { name: 'BE 파트장 투표', url: '/vote/be' },
  { name: '팀 투표', url: '/vote/team' },
];
export default function Page() {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-[60px] w-full h-full px-[30px] relative justify-center items-center">
      <Header />
      {Cards.map((card) => (
        <div
          key={card.name}
          className="w-full h-[120px] bg-white flex justify-center items-center rounded-[12px] shadow-md cursor-pointer max-w-[400px]"
          onClick={() => {router.push(card.url)}}
        >
          <h1 className="text-[32px] font-bold">{card.name}</h1>
        </div>
      ))}
    </div>
  );
}
