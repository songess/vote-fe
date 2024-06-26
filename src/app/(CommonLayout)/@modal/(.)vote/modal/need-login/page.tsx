'use client';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return (
    <section
      className="w-full bg-black bg-opacity-50 fixed top-0 left-0 h-full flex justify-center items-center"
      onClick={() => {
        router.back();
      }}
    >
      <div className="w-[50%] h-[120px] min-w-[300px] bg-white rounded-xl flex flex-col justify-center items-center gap-[20px]">
        <div className="font-semibold">로그인하지 않은 사용자는 투표할 수 없습니다!</div>
        <button
          className="bg-themeColor text-white	 text-[18px] rounded-[10px] border-none w-[80px] h-[40px]"
          onClick={() => {
            router.push('/');
          }}
        >
          확인
        </button>
      </div>
    </section>
  );
}
