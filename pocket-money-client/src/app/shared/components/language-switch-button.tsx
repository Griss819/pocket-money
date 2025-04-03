'use client'

import { useEffect, useState } from 'react';
import { DefaultDropdownMenu } from '@/app/shared/components/default-dropdown-menu';
import DefaultButton from '@/app/shared/components/default-button';
import { Language } from '@/app/shared/types/language.types';
import { useParams, usePathname, useRouter } from 'next/navigation';

export const LanguageSwitchButton = () =>  {
  const params = useParams();
  const locale = params.locale;
  const router = useRouter();
  const pathname = usePathname();

  const languageLabels: Record<Language, string> = {
    'es': 'Español',
    'en': 'English',
  }
  const languages: Language[] = ['en', 'es'];
  const [language, setLanguage] = useState(locale as Language);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setLanguage(locale as Language);
  }, [locale])

  const changeLocale = (newLocale: Language) => {
    // Reemplazar el locale actual en la ruta
    setDropdownOpen(false);
    setLanguage(newLocale);
    const newPathname = pathname.replace(`/${language}`, `/${newLocale}`);
    router.push(newPathname);

    // Alternativa: si quieres mantener la navegación suave
    // router.replace(newPathname, { scroll: false });
  };

  return (
    <DefaultDropdownMenu isOpen={dropdownOpen} onOpenChange={setDropdownOpen} align={'right'}>
      <DefaultButton onClick={() => setDropdownOpen(!dropdownOpen)}>
        {languageLabels[language] && (
          <><em className={'fa fa-globe'}></em> { languageLabels[language] }</>
        )}
      </DefaultButton>
      <div className={'grid grid-cols-1 p-2'}>
        {languages.map((t, index ) => (
          <div className={'default-menu-item w-full'} key={index} onClick={() => changeLocale(t)}>
            <em className={`fa fa-language mr-2 w-4`}></em> {languageLabels[t]}
          </div>
        ))}
      </div>
    </DefaultDropdownMenu>
  );
}
