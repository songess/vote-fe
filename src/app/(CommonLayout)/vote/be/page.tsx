'use client';
import ArrowBackSVG from '@public/arrowBack.svg';
import { Header } from '@components/all/Header';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { voteFetchWithToken } from '@apis/fetchAPI';
// import { cookies } from 'next/headers';

const CandidateName = [
  '임형준',
  '장영환',
  '이도현',
  '이진우',
  '전민',
  '김성현',
  '박수빈',
  '박시영',
  '정기민',
  '권찬',
];

// 일단 프론트엔드 사용자가 백엔드 투표에 들어왔다는 것을 상정한 투표
const DUMMYRESPONSE = { isVoted: false, status: 'FE' };

export default function Page() {
  const router = useRouter();
  const [votedIdx, setVotedIdx] = useState<number>(-1);
  const [isVoted, setIsVoted] = useState<boolean>(false);
  // 사용자의 상태는 크게 3가지이다. FE, BE, null(가입도 안한 경우에 투표 페이지 접근)
  const [part, setPart] = useState<string>('BE');

  const handleSubmit = async () => {
    // const cookie = cookies();
    // const token = cookie.get('token');

    const token = 'token';

    try {
      // const response = await voteFetchWithToken.post(
      //   '/vote/fe',
      //   { leaderName: CandidateName[votedIdx], userName: 'name' },
      //   token
      // );
      const sendingDataObject = {
        leaderName: CandidateName[votedIdx],
        username: 'name',
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/vote/be-vote`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sendingDataObject),
        }
      );
      if (response.ok) {
        alert('백엔드 투표가 완료되었습니다.');
        router.push('/vote/be-result');
      } else {
        throw new Error('백엔드 투표에 실패했습니다.');
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // const cookie = cookies();
      // const token = cookie.get('token');

      try {
        // const response = await voteFetchWithToken.get('/vote/fe', token);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/vote/fe`,
          {
            method: 'POST',
          }
        );
        if (response.ok) {
          const data = await response.json();
          setIsVoted(data.isVoted);
          setPart(data.status);
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col w-full h-full px-[30px] relative pt-[80px] items-center">
      <Header />
      <ArrowBackSVG
        className="absolute top-[120px] left-[25px] cursor-pointer"
        onClick={() => {
          router.push('/');
        }}
      />
      <h1 className="py-[30px] text-[28px]">BE 파트장 투표</h1>
      <section className="flex flex-wrap gap-[30px] w-full">
        {CandidateName.map((name, idx) => (
          <button
            key={idx}
            onClick={() => {
              setVotedIdx(idx);
            }}
            className={`basis-[calc(50%-15px)] h-[70px] bg-white rounded-[10px] flex justify-center items-center shadow-md text-[28px] font-semibold ${
              idx === votedIdx ? 'border-2 border-themeColor' : ''
            }`}
          >
            {name}
          </button>
        ))}
      </section>
      <div
        className="text-themeColor text-[20px] font-semibold self-end mt-[20px] grow cursor-pointer"
        onClick={() => {
          router.push('/vote/fe-result');
        }}
      >
        결과보기 ▶︎
      </div>
      <button
        onClick={handleSubmit}
        className={`bg-themeColor text-white w-full h-[70px] rounded-[10px] mt-[20px] mb-[40px] text-[28px] font-semibold ${
          isVoted || part !== 'BE' || votedIdx === -1
            ? 'opacity-50 cursor-not-allowed'
            : ''
        }`}
        disabled={isVoted || part !== 'BE' || votedIdx === -1}
      >
        {DUMMYRESPONSE.isVoted ? '투표완료' : '투표하기'}
      </button>
    </div>
  );
}
