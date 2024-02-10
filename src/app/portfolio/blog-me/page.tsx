import Link from 'next/link';
import Image from 'next/image';

export default function BlogMe(): JSX.Element {
  return (
    <main className=''>
      <div className='container main p-4 mx-auto max-w-4xl'>
        <h1 className='gradient text-6xl leading-tight font-bold mt-6 mb-5'>Blog Me</h1>
        <p className='font-light mb-4 text-lg'>
          One of my educational projects. Blog, with the ability to write articles.
        </p>
        <Image src='/projects/blog-me.png' alt='site image' width={1218} height={687} className='w-full h-auto' />
        <p className='font-light mt-4 text-lg'>
          My first full stack project, during the writing of which I learned how to create my own backend. The project
          implements user registration and authorization. Reading, creating, deleting, changing articles. Uploading
          images to the server. Possibility to leave comments, etc.
        </p>
        <p className='font-light mt-1 mb-4 text-lg'>
          The project was created using{' '}
          <strong>MongoDB, Express, React, Material Ui, Redux Toolkit, Axios, JWT, BCrypt, Multer</strong>...
        </p>
        <p className='font-light mb-1 text-lg'>Additional resources:</p>
        <ul>
          <li>
            <Link
              href='https://github.com/DenisJet/blog-mern-front'
              target='_blank'
              className='font-light hover:underline'
            >
              - https://github.com/DenisJet/blog-mern-front
            </Link>
          </li>
          <li>
            <Link
              href='https://github.com/DenisJet/blog-mern-beck'
              target='_blank'
              className='font-light hover:underline'
            >
              - https://github.com/DenisJet/blog-mern-beck
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
