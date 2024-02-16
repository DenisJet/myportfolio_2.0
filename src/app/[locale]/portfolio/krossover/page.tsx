import Link from 'next/link';
import Image from 'next/image';

export default function Krossover(): JSX.Element {
  return (
    <main>
      <div className='container main p-4 mx-auto max-w-4xl'>
        <h1 className='gradient text-6xl font-bold mt-6 mb-5'>Krossover</h1>
        <p className='font-light mb-4 text-lg'>Оn-line store.</p>
        <Image src='/projects/krossover.png' alt='site image' width={1841} height={927} className='w-full h-auto' />
        <p className='font-light mt-4 mb-4 text-lg'>
          A site for selling shoes and clothing online. Created with <strong>WordPress</strong>.
        </p>
        <p className='font-light mb-1 text-lg'>Additional resources:</p>
        <ul>
          <li>
            <Link href='https://krossover-shoes.ru/' target='_blank' className='font-light hover:underline'>
              - https://krossover-shoes.ru/
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
