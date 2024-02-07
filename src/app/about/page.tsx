export default function About(): JSX.Element {
  return (
    <main>
      <div className='container p-4 mx-auto max-w-4xl'>
        <h1 className='gradient text-6xl font-bold mt-6 mb-3'>About Me</h1>
        <p className='font-light text-lg mb-5'>
          I have a great passion for Internet technologies and web development in particular. I started by studying the
          frontend, but today I also have experience writing the backend.
        </p>
        <h2 className='text-xl font-semibold mb-2'>Professional Skillset</h2>
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
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>React</div>
          <div className='flex bg-slate-200 py-[3px] px-[15px] mr-2 mb-2 rounded space-x-2'>Next.Js</div>
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
