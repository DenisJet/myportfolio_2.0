import { Link } from '@/navigation';
import MobileMenu from '../MobileMenu/MobileMenu';
import LangButton from '../LangButton/LangButton';

export default function Header(): JSX.Element {
  return (
    <header className='flex justify-between py-2 px-4'>
      <LangButton />
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
        {/* <Link href='/contact' className='text-black text-opacity-70 hover:text-opacity-100'>
          Contact
        </Link> */}
      </nav>
      <MobileMenu />
    </header>
  );
}
