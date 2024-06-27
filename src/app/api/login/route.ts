import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { loginId, password } = await req.json();
  const sendingDataObject = { loginId: loginId, password: password };

  try {
    const tmpResponse = await fetch(
      'http://43.202.139.24:8080/api/user/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sendingDataObject),
      }
    );
    if (!tmpResponse.ok) {
      throw new Error('Login Failed');
    }

    const headers = tmpResponse.headers;
    const authToken = headers.get('Authorization');

    return NextResponse.json({ token: authToken });
  } catch (error) {
    console.log(error);
    return new Response('Login Failed!', {
      status: 400,
    });
  }
}
