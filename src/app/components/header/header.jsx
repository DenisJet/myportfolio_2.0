import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <Link href='/'>Denis Kalkopf</Link>
      <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/portfolio'>Portfolio</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  );
}
