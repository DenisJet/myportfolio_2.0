export default function Home(): JSX.Element {
  return (
    <main>
      <div className='container p-4 mx-auto max-w-4xl home-container w-full flex flex-col'>
        <div className='text-[5.8rem] font-bold mb-4 leading-[5.5rem] md:leading-[6.4rem] xl:leading-[7rem] mt-8 sm:mt-28 gradient'>
          Hi, my name is Denis
        </div>
        <div className='text-4xl'>I'm a full stack developer.</div>
      </div>
    </main>
  );
}
