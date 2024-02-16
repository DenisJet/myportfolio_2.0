import { NextRequest, NextResponse } from 'next/server';
import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
  user: 'deniskalkopf@yandex.ru',
  password: 'daboesihiywncyij',
  host: 'smtp.yandex.ru',
  ssl: true,
});

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  client.send(
    {
      text: `
        Name: ${data.name},
        Email: ${data.email},
        Message: ${data.message},
      `,
      from: `Portfolio 2.0 <deniskalkopf@yandex.ru>`,
      to: '<deniskalkopf@yandex.ru>',
      subject: 'Portfolio 2.0 contact emailjs',
    },
    (err, message) => {
      console.log(err || message);
    }
  );
  return NextResponse.json(data);
}
