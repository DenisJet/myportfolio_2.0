import Link from 'next/link';

export default function GithubSearch(): JSX.Element {
  return (
    <main className=''>
      <div className='container main p-4 mx-auto max-w-4xl'>
        <h1 className='gradient text-6xl font-bold mt-6 mb-5'>Github Seasch</h1>
        <p className='font-light mb-4 text-lg'>Service for searching repositories on Github by username.</p>
        <img src='/projects/githubsearch.png' alt='site image' />
        <p className='font-light mt-4 text-lg'>
          Not a big application, allows you to find repositories on Github by user name. The function of adding and
          removing repository from favorites is implemented.
        </p>
        <p className='font-light mt-1 mb-4 text-lg'>
          The project was created using <strong>TypeScript</strong>, <strong>React</strong>,<strong> RTKQuery</strong>,{' '}
          <strong>Tailwind CSS</strong>,<strong> Axios</strong>. Hosted on Netlify.
        </p>
        <p className='font-light mb-1 text-lg'>Additional resources:</p>
        <ul>
          <li>
            <Link
              href='https://denisjet-githubsearch.netlify.app/'
              target='_blank'
              className='font-light hover:underline'
            >
              - https://denisjet-githubsearch.netlify.app/
            </Link>
          </li>
          <li>
            <Link
              href='https://github.com/DenisJet/github-search'
              target='_blank'
              className='font-light hover:underline'
            >
              - https://github.com/DenisJet/github-search
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
