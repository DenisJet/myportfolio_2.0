import Link from 'next/link';

export default function BathsRestoration(): JSX.Element {
  return (
    <main className=''>
      <div className='container main p-4 mx-auto max-w-4xl'>
        <h1 className='gradient text-6xl font-bold mt-6 mb-5'>Baths Restoration</h1>
        <p className='font-light mb-4 text-lg'>Landing page.</p>
        <img src='/projects/restoration.png' alt='site image' />
        <p className='font-light mt-4 mb-4 text-lg'>
          A simple landing page, during the creation of which I became acquainted with the
          <strong className='font-medium'> Pug</strong> template engine, which I liked for its convenient ability to
          create separate blocks for layout. I also got acquainted with
          <strong className='font-medium'> Bootstrap</strong>, which greatly speeds up the layout.
        </p>
        <p className='font-light mb-1 text-lg'>Additional resources:</p>
        <ul>
          <li>
            <Link href='https://restavracia--vann.ru/' target='_blank' className='font-light hover:underline'>
              - https://restavracia--vann.ru/
            </Link>
          </li>
          <li>
            <Link href='https://github.com/DenisJet/remont-vann' target='_blank' className='font-light hover:underline'>
              - https://github.com/DenisJet/remont-vann
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
