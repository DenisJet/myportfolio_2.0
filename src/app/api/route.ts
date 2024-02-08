//import { NextRequest, NextResponse } from 'next/server';
//
// export function POST(req: NextRequest) {
//   console.log('Data', req.body);
//   return NextResponse.json({ message: 'Hello from Next.js!' }, { status: 500 });
// }

import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import type { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.MAILGUN_DOMAIN || '';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const res = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        message,
      }),
      headers: {
        'content-type': 'application/json',
      },
    });
  } catch (err: any) {
    console.error('Err', err);
  }

  console.log('Data', req.body);

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({ username: 'api', key: API_KEY });

  const { name, email, message } = req.body;

  const messageData = {
    from: 'Contact Form <contact@me.deniskalkopf.org>',
    to: 'deniskalkopf@gmail.com',
    subject: 'New Contact Form!',
    text: `Hello,
    You have a new form entry from: ${name} ${email}.
    ${message}
    `,
  };

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData);
    console.log(emailRes);
  } catch (err: any) {
    console.error('Error sending email', err);
  }

  res.status(200).json({ submitted: true });
}
