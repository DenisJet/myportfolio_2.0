import Link from 'next/link';

export default function LiveChat(): JSX.Element {
  return (
    <main className=''>
      <div className='container main p-4 mx-auto max-w-4xl'>
        <h1 className='gradient text-6xl leading-tight font-bold mt-6 mb-5'>On-Line Chat</h1>
        <p className='font-light mb-4 text-lg'>Live chat</p>
        <img src='/projects/online-chat.png' alt='site image' />
        <p className='font-light mt-4 text-lg'>
          A small project created to get acquainted with <strong>WebSocket.</strong>
        </p>
        <p className='font-light mt-1 text-lg'>
          The project was created using <strong>Nest JS, PostgreSQL, Prisma, Socket.IO</strong>.
        </p>
        <p className='font-light mt-1 mb-4 text-lg'>Currently in final stages of development</p>
        <p className='font-light mb-1 text-lg'>Additional resources:</p>
        <ul>
          <li>
            <Link
              href='https://online-chat-c8eu.onrender.com/chat'
              target='_blank'
              className='font-light hover:underline'
            >
              - https://online-chat-c8eu.onrender.com/chat
            </Link>
          </li>
          <li>
            <Link
              href='https://github.com/DenisJet/live-chat-server'
              target='_blank'
              className='font-light hover:underline'
            >
              - https://github.com/DenisJet/live-chat-server
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
