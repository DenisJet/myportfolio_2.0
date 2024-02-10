import Image from 'next/image';
import Link from 'next/link';

export default function About(): JSX.Element {
  return (
    <main>
      <div className='container p-4 mx-auto max-w-4xl'>
        <h1 className='gradient text-6xl font-bold mt-6 mb-3'>About Me</h1>
        <div className='my-6 flex'>
          <Link
            href='https://assets.htmlacademy.ru/certificates/profession/39/1875311.pdf?1665069782&_ga=2.193242148.86894964.1665994142-270059664.1655958253'
            target='_blank'
            className='m-5 hover:opacity-100 opacity-75'
          >
            <Image src='/front-sert.png' alt='' width={100} height={50} className='w-full h-auto' />
          </Link>
          <Link
            href='https://assets.htmlacademy.ru/certificates/profession/47/1875311.pdf?1692890714'
            target='_blank'
            className='m-5 hover:opacity-100 opacity-75'
          >
            <Image src='/react-sert.png' alt='' width={100} height={50} className='w-full h-auto' />
          </Link>
        </div>
        <p className='font-light text-lg mb-5'>
          I have a great passion for Internet technologies and web development in particular. I started by studying the
          frontend, but today I also have experience writing the backend.
        </p>
        <h2 className='text-xl font-semibold mb-2'>Professional skills</h2>
        <div className='p-0 mt-2 flex items-start flex-wrap'>
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>HTML</div>
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>CSS</div>
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>SCSS</div>
        </div>
        <div className='p-0 mt-2 flex items-start flex-wrap'>
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>JavaScript</div>
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>TypeScript</div>
        </div>
        <div className='p-0 mt-2 flex items-start flex-wrap'>
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>React.Js</div>
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>Next.Js</div>
        </div>
        <div className='p-0 mt-2 flex items-start flex-wrap'>
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>Node.Js</div>
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>Nest.Js</div>
        </div>
        <div className='p-0 mt-2 flex items-start flex-wrap'>
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>MongoDB</div>
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>PostgreSQL</div>
        </div>
        <div className='p-0 mt-2 flex items-start flex-wrap'>
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>Gulp</div>
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>Webpack</div>
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>Git/Github</div>
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>Docker</div>
        </div>
      </div>
    </main>
  );
}
