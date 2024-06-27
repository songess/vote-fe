'use client';
import { useRouter } from 'next/navigation';

export default function NeedLogin() {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-[40px]">
      <div className="font-semibold text-[28px]">프론트 파트장 투표 완료!</div>
      <button
        className="bg-themeColor text-white	 text-[18px] rounded-[10px] border-none w-fit h-[40px] p-2 min-w-[80px]"
        onClick={() => {
          router.replace('/vote/fe-result');
        }}
      >
        확인
      </button>
    </div>
  );
}
