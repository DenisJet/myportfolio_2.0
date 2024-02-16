'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import Image from 'next/image';

export default function Metrika(): JSX.Element {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    ym(96486210, 'hit', window.location.href);
  }, [pathName, searchParams]);

  return (
    <>
      <Script id='yandex-metrika'>
        {`
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
     
        ym(96486210, "init", {
             defer: true,
             clickmap:true,
             trackLinks:true,
             accurateTrackBounce:true,
             webvisor:true
        });    
      `}
      </Script>
      <noscript>
        <div>
          <Image src='https://mc.yandex.ru/watch/96486210' style={{ position: 'absolute', left: '-9999px' }} alt='' />
        </div>
      </noscript>
    </>
  );
}

function ym(arg0: number, arg1: string, href: string) {
  throw new Error('Function not implemented.');
}
