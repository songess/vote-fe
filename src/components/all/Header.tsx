'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Header() {
  const [part, setPart] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    setPart(localStorage.getItem('part'));
    setUsername(localStorage.getItem('username'));
  }, []);

  return (
    <header className="w-full h-[80px] bg-white flex justify-between items-center px-[20px] absolute top-0 left-0">
      <h1
        className="text-[28px] text-themeColor font-bold cursor-pointer"
        onClick={() => {
          router.push('/');
        }}
      >
        CEOS
      </h1>
      <div className="flex gap-2 items-center">
        {part && username && (
          <span className="text-[14px]">{`${part === 'FRONTEND' ? 'FE' : 'BE'} ${username}`}</span>
        )}
        {part !== null && username !== null ? (
          <button
            className="bg-themeColor text-white	 text-[16px] rounded-[10px] border-none w-[80px] h-[40px]"
            onClick={() => {
              localStorage.removeItem('jwtToken');
              localStorage.removeItem('part');
              localStorage.removeItem('username');
              setPart(null);
              setUsername(null);
              router.push('/');
            }}
          >
            로그 아웃
          </button>
        ) : (
          <button
            className="bg-themeColor text-white	 text-[18px] rounded-[10px] border-none w-[80px] h-[40px]"
            onClick={() => {
              router.push('/login');
            }}
          >
            로그인
          </button>
        )}
      </div>
    </header>
  );
}
