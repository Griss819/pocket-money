'use client'

import { useTheme } from '@/app/shared/components/theme-provider';
import { Theme } from '@/app/shared/types/theme.types';
import DefaultButton from '@/app/shared/components/default-button';
import { DefaultDropdownMenu } from '@/app/shared/components/default-dropdown-menu';
import { useState } from 'react';

export const ThemeButton = () => {
  const themes: Theme[] = ['light', 'dark'];
  const { theme, toggleTheme } = useTheme();
  const themeLabels: Record<Theme, { name: string, icon: string }> = {
    'light': {name: 'Claro', icon: 'fa fa-sun'},
    'dark': {name: 'Oscuro', icon: 'fa fa-moon'},
  };
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <DefaultDropdownMenu isOpen={dropdownOpen} onOpenChange={setDropdownOpen} align={'right'}>
      <DefaultButton onClick={() => setDropdownOpen(!dropdownOpen)}>
        {themeLabels[theme] && (
         <><em className={themeLabels[theme].icon}></em></>
        )}
      </DefaultButton>
      <div className={'grid grid-cols-1 p-2'}>
        {themes.map((t, index ) => (
          <div className={'default-menu-item w-full'} key={index} onClick={() => {toggleTheme(t); setDropdownOpen(!dropdownOpen)}}><em className={`${themeLabels[t].icon} mr-2 w-4`}></em> {themeLabels[t].name}</div>
        ))}
      </div>
    </DefaultDropdownMenu>
  );
};
