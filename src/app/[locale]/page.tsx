import { useTranslations } from 'next-intl';

export default function Home(): JSX.Element {
  const t = useTranslations('Home');

  return (
    <main>
      <div className='container p-4 mx-auto max-w-4xl home-container w-full flex flex-col'>
        <div className='text-[4.5rem] font-bold mb-4 leading-[5.5rem] md:leading-[6.4rem] xl:leading-[7rem] mt-8 sm:mt-28 gradient'>
          {t('title')}
        </div>
        <div className='text-4xl font-light'>{t('text')}</div>
      </div>
    </main>
  );
}
