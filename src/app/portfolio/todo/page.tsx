import Link from 'next/link';
import Image from 'next/image';

export default function Todo(): JSX.Element {
  return (
    <main className=''>
      <div className='container main p-4 mx-auto max-w-4xl'>
        <h1 className='gradient text-6xl leading-tight font-bold mt-6 mb-5'>My ToDo List</h1>
        <p className='font-light mb-4 text-lg'>Task list app</p>
        <Image src='/projects/mytodo.png' alt='site image' width={1605} height={902} className='w-full h-auto' />
        <p className='font-light mt-4 text-lg'>
          The application implements the functionality of adding a new task indicating the title, description and
          status. It is also possible to change and delete existing tasks. The application is deployed on the server
          from a Docker container (you can add a couple of tasks for me).
        </p>
        <p className='font-light mt-1 text-lg'>
          The project was created using <strong>Nest JS, Next JS, MongoDB, TypeScript, Docker</strong>.
        </p>
        <p className='font-light mt-1 mb-4 text-lg'>
          This is just the initial state of the project. I plan to develop a convenient and pleasant interface and add a
          set of cool functions.
        </p>
        <p className='font-light mb-1 text-lg'>Additional resources:</p>
        <ul>
          <li>
            <Link href='http://5.35.89.103:3000/' target='_blank' className='font-light hover:underline'>
              - http://5.35.89.103:3000/
            </Link>
          </li>
          <li>
            <Link
              href='https://github.com/DenisJet/mytodo-client'
              target='_blank'
              className='font-light hover:underline'
            >
              - https://github.com/DenisJet/mytodo-client
            </Link>
          </li>
          <li>
            <Link
              href='https://github.com/DenisJet/mytodo-server'
              target='_blank'
              className='font-light hover:underline'
            >
              - https://github.com/DenisJet/mytodo-server
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
