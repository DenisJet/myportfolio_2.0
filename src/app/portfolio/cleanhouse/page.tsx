import Link from 'next/link';

export default function CleanHouse(): JSX.Element {
  return (
    <main className=''>
      <div className='container main p-4 mx-auto max-w-4xl'>
        <h1 className='gradient text-6xl font-bold mt-6 mb-5'>Clean House</h1>
        <p className='font-light mb-4 text-lg'>Insect extermination service website.</p>
        <img src='/projects/cleanhouse.png' alt='site image' />
        <p className='font-light mt-4 text-lg'>
          Fully adaptive, semantic, valid, fluid, cross-browser layout. Using methodology <strong>BEM</strong>,
          preprocessor <strong>SASS-SCSS</strong>, task manager <strong>Gulp</strong>. Implemented sliders using the
          library <strong>SwiperJS</strong>. Images have been optimized.
        </p>
        <p className='font-light mt-1 mb-4 text-lg'>Implemented the ability to send a message about a call back.</p>
        <p className='font-light mb-1 text-lg'>Additional resources:</p>
        <ul>
          <li>
            <Link href='https://cleanhouse-ses.ru/' target='_blank' className='font-light hover:underline'>
              - https://cleanhouse-ses.ru/
            </Link>
          </li>
          <li>
            <Link href='https://github.com/DenisJet/CleanHouse' target='_blank' className='font-light hover:underline'>
              - https://github.com/DenisJet/CleanHouse
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
