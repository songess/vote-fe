import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { loginId, password, email, part, username, teamId } = await req.json();
  const sendingDataObject = {
    loginId,
    password,
    email,
    part,
    username,
    teamId,
  };

  try {
    const tmpResponse = await fetch(
      'http://43.202.139.24:8080/api/user/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendingDataObject),
      }
    );
    if (!tmpResponse.ok) {
      throw new Error('Signup Failed');
    }

    const headers = tmpResponse.headers;

    return NextResponse.json({
      message: '회원 가입이 정상적으로 완료되었습니다',
    });
  } catch (error) {
    console.log(error);
    return new Response('Sign up Failed!', {
      status: 400,
    });
  }
}
