import { Link } from '../../navigation';
import { useLocale } from 'next-intl';

export default function LangButton(): JSX.Element {
  const locale = useLocale();

  const changeLocale = locale == 'ru' ? 'en' : 'ru';

  console.log(locale);
  return (
    <Link href='/' locale={changeLocale}>
      {changeLocale}
    </Link>
  );
}
