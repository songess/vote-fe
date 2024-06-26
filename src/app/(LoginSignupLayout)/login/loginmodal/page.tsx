'use client';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-[40px]">
      <div className="font-semibold text-[28px]">아이디와 비밀번호를 확인해주세요.</div>
      <button
        className="bg-themeColor text-white	 text-[18px] rounded-[10px] border-none w-fit h-[40px] p-2 min-w-[80px]"
        onClick={() => {
          router.push('/login');
        }}
      >
        확인
      </button>
    </div>
  );
}
