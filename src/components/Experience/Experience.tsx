import { experienceEn } from '@/experience/experienceEn';
import { experienceRu } from '@/experience/experienceRu';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

export default function Experience() {
  const t = useTranslations('Experience');
  const locale = useLocale();

  return (
    <>
      <h2 className='text-xl font-semibold mb-2'>{t('title')}</h2>
      {locale === 'en'
        ? experienceEn &&
          experienceEn.map((exp) => {
            return (
              <div className='grid grid-cols-1 sm:grid-cols-4 gap-2.5 mb-4' key={exp.id}>
                <div className='col-span-1'>
                  <p className='font-light'>{exp.date}</p>
                  <p className='font-medium'>{exp.position}</p>
                </div>
                <div className='col-span-3'>
                  <h3 className='text-lg font-medium'>{exp.name}</h3>
                  <div className='mb-2'>
                    {exp.links &&
                      exp.links.map((link, i) => {
                        return (
                          <Link key={i} target='_blank' className='font-light hover:underline block' href={link}>
                            {link}
                          </Link>
                        );
                      })}
                  </div>
                  <p className='font-medium mb-2'>
                    {exp.stack &&
                      exp.stack.map((item, i) => {
                        return <span key={i}>{item}, </span>;
                      })}
                  </p>
                  <div className='font-light'>
                    {exp.description.split('.').map((item, i) => {
                      return <p key={i}>- {item}</p>;
                    })}
                  </div>
                </div>
              </div>
            );
          })
        : experienceRu &&
          experienceRu.map((exp) => {
            return (
              <div className='grid grid-cols-1 sm:grid-cols-4 gap-2.5 mb-4' key={exp.id}>
                <div className='col-span-1'>
                  <p className='font-light'>{exp.date}</p>
                  <p className='font-medium'>{exp.position}</p>
                </div>
                <div className='col-span-3'>
                  <h3 className='text-lg font-medium'>{exp.name}</h3>
                  <div className='mb-2'>
                    {exp.links &&
                      exp.links.map((link, i) => {
                        return (
                          <Link key={i} target='_blank' className='font-light hover:underline block' href={link}>
                            {link}
                          </Link>
                        );
                      })}
                  </div>
                  <p className='font-medium mb-2'>
                    {exp.stack &&
                      exp.stack.map((item, i) => {
                        return <span key={i}>{item}, </span>;
                      })}
                  </p>
                  <div className='font-light'>
                    {exp.description.split('.').map((item, i) => {
                      return <p key={i}>- {item}</p>;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
}
