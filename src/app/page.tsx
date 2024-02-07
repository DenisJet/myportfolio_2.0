import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      <div className='container main p-4 mx-auto max-w-4xl home-container w-full flex flex-col'>
        <div className='text-[5.8rem] font-bold mb-4 leading-[5.5rem] md:leading-[6.4rem] xl:leading-[7rem] mt-8 sm:mt-28 gradient-header'>
          Hi, my name is Denis
        </div>
        <div className='text-4xl'>I'm a full stack developer</div>
      </div>
    </main>
  );
}
