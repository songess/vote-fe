'use client';
import { useRouter } from 'next/navigation';

export default function NeedLogin() {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-[40px]">
      <div className="font-semibold text-[28px]">투표는 한 번씩만 가능합니다.</div>
      <button
        className="bg-themeColor text-white	 text-[18px] rounded-[10px] border-none w-fit h-[40px] p-2 min-w-[80px]"
        onClick={() => {
          router.push('/');
        }}
      >
        확인
      </button>
    </div>
  );
}
