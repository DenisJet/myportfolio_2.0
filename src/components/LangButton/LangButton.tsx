'use client';
import { Link, usePathname } from '../../navigation';
import { useLocale } from 'next-intl';

export default function LangButton(): JSX.Element {
  const locale = useLocale();
  const pathName = usePathname();

  const changeLocale = locale == 'ru' ? 'en' : 'ru';

  return (
    <Link href={pathName} locale={changeLocale}>
      {locale}
    </Link>
  );
}
