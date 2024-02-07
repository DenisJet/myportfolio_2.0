'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MobileMenu(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='sm:hidden'>
      {open ? (
        <div className='absolute top-0 left-0 h-screen w-screen bg-slate-900 bg-opacity-95 text-white z-50 py-2 px-4'>
          <nav className='flex flex-col w-full'>
            <Link href='/' className='text-white text-xl px-8 py-4' onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href='/about' className='text-white text-xl px-8 py-4' onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href='/portfolio' className='text-white text-xl px-8 py-4' onClick={() => setOpen(false)}>
              Portfolio
            </Link>
            <Link href='/contact' className='text-white text-xl px-8 py-4' onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>
          <button onClick={() => setOpen(false)} type='button' title='Close' className='absolute top-2 right-4 '>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
              <path
                fillRule='evenodd'
                d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
      ) : (
        <button title='Open' type='button' onClick={() => setOpen(true)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
            <path
              fillRule='evenodd'
              d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
}
