'use client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  async function handleSubmitLoginForm(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (idRef.current && passwordRef.current) {
      const userIdValue = idRef.current.value;
      const userPasswordValue = passwordRef.current.value;

      const sendingDataObject = {
        loginId: userIdValue,
        password: userPasswordValue,
      };

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/api/user/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(sendingDataObject),
          }
        );

        if (!response.ok) {
          throw new Error('Login error');
        } else {
          const headers = response.headers;

          // 일단 타입 단언으로 오류를 뜷어주기
          const jwtToken = headers.get('Authorization') as string;

          const { part, username } = await response.json();

          localStorage.setItem('jwtToken', jwtToken);
          localStorage.setItem('part', part);
          localStorage.setItem('username', username);

          router.push('/');
        }
      } catch (error) {
        alert(error);
      }
    }
  }
  return (
    <form
      action=""
      className="w-full h-[370px] flex flex-col gap-y-5 items-center relative mb-4"
      onSubmit={handleSubmitLoginForm}
    >
      <div className="loginSignupItem">
        <label htmlFor="userId" className="w-full">
          아이디
        </label>
        <input
          type="text"
          id="userId"
          className="w-full h-8"
          placeholder="Enter your name"
          ref={idRef}
        />
      </div>

      <div className="loginSignupItem">
        <label htmlFor="userPassword" className="w-full">
          비밀번호
        </label>
        <input
          type="password"
          id="userPassword"
          className="w-full h-8"
          placeholder="Enter your password"
          ref={passwordRef}
        />
      </div>

      <button className="bg-themeColor text-white absolute bottom-0 w-[90px] h-[45px] rounded-lg">
        로그인
      </button>
    </form>
  );
}
