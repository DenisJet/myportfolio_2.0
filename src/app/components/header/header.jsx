'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className='flex justify-between py-2 px-4'>
      <Link href='/' className='text-black text-opacity-70 hover:text-opacity-100'>
        Denis Kalkopf
      </Link>
      <nav className='space-x-4 items-center hidden sm:flex hidden'>
        <Link href='/' className='text-black text-opacity-70 hover:text-opacity-100'>
          Home
        </Link>
        <Link href='/about' className='text-black text-opacity-70 hover:text-opacity-100'>
          About
        </Link>
        <Link href='/portfolio' className='text-black text-opacity-70 hover:text-opacity-100'>
          Portfolio
        </Link>
        <Link href='/contact' className='text-black text-opacity-70 hover:text-opacity-100'>
          Contact
        </Link>
      </nav>
      <div className='flex items-center sm:hidden'>
        <button onClick={() => setOpen(true)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
            <path
              fill-rule='evenodd'
              d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </button>
      </div>
      {open ? (
        <nav className='flex flex-col w-full'>
          <Link href='/' className='text-white text-xl px-8 py-4'>
            Home
          </Link>
          <Link href='/about' className='text-white text-xl px-8 py-4'>
            About
          </Link>
          <Link href='/portfolio' className='text-white text-xl px-8 py-4'>
            Portfolio
          </Link>
          <Link href='/contact' className='text-white text-xl px-8 py-4'>
            Contact
          </Link>
        </nav>
      ) : (
        <></>
      )}
    </header>
  );
}
