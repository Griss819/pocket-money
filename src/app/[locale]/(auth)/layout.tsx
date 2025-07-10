import { LanguageSwitchButton } from '@/app/shared/components/language-switch-button';
import { ThemeButton } from '@/app/shared/components/theme-button';
import DefaultButton from '@/app/shared/components/default-button';

export default function AuthLayout({children}: {children: React.ReactNode}) {

  return (
    <div className={'main-page h-[100vh]'}>
      <div className={'left-column hidden lg:block'}>
      </div>
      <div className={'main-content col-span-5 lg:col-span-3 lg:p-0 p-5 w-full max-w-[900px] justify-self-center'}>
        <div className={'main-header p-4 flex flex-row justify-between items-center'}>
          <h1 className={'text-bold text-[var(--color-text)] gap-2 text-2xl'}><em className={'fa fa-money-bill-alt'}></em> Pocket<strong>Money</strong> </h1>
          <div className={'lg:flex flex-row gap-2 items-center hidden'}>
            <LanguageSwitchButton></LanguageSwitchButton>
            <ThemeButton></ThemeButton>
          </div>
          <div className={'flex flex-row gap-2 items-center lg:hidden'}>
            <DefaultButton>
              <div>
                <em className={'fa fa-bars w-4'}></em>
              </div>
            </DefaultButton>
          </div>
        </div>
        <div className={'flex justify-center items-center h-full'}>
          {children}
        </div>
      </div>
      <div className={'right-column hidden lg:block'}>
      </div>
    </div>
  )
}
