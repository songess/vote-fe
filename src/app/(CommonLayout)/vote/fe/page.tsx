'use client';
import ArrowBackSVG from '@public/arrowBack.svg';
import { Header } from '@components/all/Header';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { voteFetchWithToken } from '@apis/fetchAPI';

const CandidateName = [
  '김다희',
  '김동혁',
  '김민영',
  '김수현',
  '김승완',
  '송은수',
  '안혜연',
  '이나현',
  '이지인',
  '조유담',
];

const DUMMYRESPONSE = { isVoted: false, status: 'FE' };

export default function Page() {
  const router = useRouter();
  const [votedIdx, setVotedIdx] = useState<number>(-1);
  const [isVoted, setIsVoted] = useState<boolean>(false);
  const [part, setPart] = useState<string>('FE');

  const handleSubmitFrontendVote = async () => {
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
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/vote/fe-vote`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sendingDataObject),
        }
      );
      if (response.ok) {
        alert('프론트엔드 투표가 완료되었습니다.');
        router.push('/vote/fe-result');
      } else {
        throw new Error('프론트엔드 투표에 실패했습니다. ');
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    // 아래 함수에서 post 요청으로 jwt를 싣어보내 사용자가 투표했는지, 소속은 어디인지 확인할 수 있어야함. 추후에 이를 isVoted, status 상태와 엮어준다
    const fetchData = async () => {
      const token = 'token';

      try {
        // const response = await voteFetchWithToken.get('vote/fe', token);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/vote/fe`,
          {
            method: 'POST',
          }
        );
        if (response.ok) {
          const data = await response.json();

          //data.result 필드를 통해 접근해야함
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
      <h1 className="py-[30px] text-[28px]">FE 파트장 투표</h1>
      <section className="flex flex-wrap gap-[30px] w-full">
        {CandidateName.map((name, idx) => (
          <button
            key={name}
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
        onClick={handleSubmitFrontendVote}
        className={`bg-themeColor text-white w-full h-[70px] rounded-[10px] mt-[20px] mb-[40px] text-[28px] font-semibold ${
          isVoted || part !== 'FE' || votedIdx === -1
            ? 'opacity-50 cursor-not-allowed'
            : ''
        }`}
        disabled={isVoted || part !== 'FE' || votedIdx === -1}
      >
        {DUMMYRESPONSE.isVoted ? '투표완료' : '투표하기'}
      </button>
    </div>
  );
}
