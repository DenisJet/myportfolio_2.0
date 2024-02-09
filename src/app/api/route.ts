import { NextRequest, NextResponse } from 'next/server';
import mailer from 'nodemailer';
import { Options } from 'nodemailer/lib/mailer';

const smtpTransport = mailer.createTransport({
  //service: 'Yandex',
  //pool: true,
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'deniskalkopf@yandex.ru',
    pass: 'daboesihiywncyij',
  },
  //tls: { rejectUnauthorized: false },
  from: 'deniskalkopf <deniskalkopf@yandex.ru>',
});

const sendEmail = (message: Options) => {
  smtpTransport.sendMail(message, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent successfully', info);
    }
    smtpTransport.close();
  });
};

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  console.log(data);
  const message = {
    to: 'deniskalkopf@yandex.ru',
    subject: `Письмо с сайта deniskalkopf от ${data.name}`,
    text: `
      Name: ${data.name},
      Email: ${data.email},
      Message: ${data.message},
    `,
  };
  sendEmail(message);
  console.log(message);
  return NextResponse.json(data);
}

// export async function POST(req: NextRequest, res: NextResponse) {
//   const data = await req.json();
//   console.log(data);

//   return NextResponse.json(data);
// }
