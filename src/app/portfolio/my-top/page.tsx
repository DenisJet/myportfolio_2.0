import Link from 'next/link';

export default function MyTop(): JSX.Element {
  return (
    <main className=''>
      <div className='container main p-4 mx-auto max-w-4xl'>
        <h1 className='gradient text-6xl font-bold mt-6 mb-5'>My Top</h1>
        <p className='font-light mb-4 text-lg'>One of my educational projects. Rating of courses, services, books...</p>
        <img src='/projects/mytop.png' alt='site image' />
        <p className='font-light mt-4 text-lg'>
          Using <strong>NestJS</strong> and <strong>MongoDB</strong>, an api for creating, deleting, editing, and
          searching pages and products has been implemented. Telegram bot has been integrated using{' '}
          <strong>telegraf</strong>. Registration and authorization using <strong>passport-jwt</strong> are also
          implemented
        </p>
        <p className='font-light mt-1 text-lg'>
          Implemented SSR on <strong>NextJS</strong>. There is dynamic routing, working with{' '}
          <strong>React Hook Form</strong>, some animation using <strong>Frame Motion</strong>.
        </p>
        <p className='font-light mt-1 mb-4 text-lg'>
          Working with <strong>Github Actions</strong>, <strong>Docker</strong> and much more...
        </p>
        <p className='font-light mb-1 text-lg'>Additional resources:</p>
        <ul>
          <li>
            <Link href='https://github.com/DenisJet/mytop-app' target='_blank' className='font-light hover:underline'>
              - https://github.com/DenisJet/mytop-app
            </Link>
          </li>
          <li>
            <Link href='https://github.com/DenisJet/mytop-api' target='_blank' className='font-light hover:underline'>
              - https://github.com/DenisJet/mytop-api
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
