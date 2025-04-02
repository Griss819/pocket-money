import { useTranslations } from 'next-intl';
import { ThemeButton } from '@/app/shared/components/theme-button';
import DefaultPanel from '@/app/shared/components/default-panel';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className={'main-page h-[100vh]'}>
      <div className={'left-column border-r-2 border-[var(--color-border)]'}>
        right column
      </div>
      <div className={'main-content col-span-3'}>
        <div className={'main-header border-b-2 border-[var(--color-border)] p-4 flex flex-row justify-between items-center'}>
          header
          <ThemeButton></ThemeButton>
        </div>
        content here
        <DefaultPanel>
          <p>Let's see if this works</p>
        </DefaultPanel>
      </div>
      <div className={'right-column border-l-2 border-[var(--color-border)]'}>
        left column
      </div>
    </div>
  );
}
