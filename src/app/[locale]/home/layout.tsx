import DefaultLinkButton from '@/app/shared/components/default-link-button';
import { LanguageSwitchButton } from '@/app/shared/components/language-switch-button';
import { ThemeButton } from '@/app/shared/components/theme-button';
import DefaultButton from '@/app/shared/components/default-button';
import { useTranslations } from 'next-intl';

export default function HomeLayout({
                                          children,
                                        }: {
  children: React.ReactNode
}) {
  const t = useTranslations('HomePage');

  return (
    <div className={'main-page h-[100vh]'}>
      <div className={'left-column hidden lg:block'}>

      </div>
      <div className={'main-content col-span-5 lg:col-span-3 lg:p-0 p-5'}>
        <div className={'main-header p-4 flex flex-row justify-between items-center'}>
          <h1 className={'text-bold text-[var(--color-text)] gap-2 text-2xl'}><em className={'fa fa-money-bill-alt'}></em> Pocket<strong>Money</strong> </h1>
          <div className={'lg:flex flex-row gap-2 items-center hidden'}>
            <DefaultLinkButton link={"/home/login"}>
              <div>
                <em className={'fa fa-square-parking w-4 mr-2'}></em> {t('login')}
              </div>
            </DefaultLinkButton>
            <DefaultLinkButton link={"/home/sign-in"}>
              <div>
                <em className={'fa fa-square-parking w-4 mr-2'}></em> {t('signin')}
              </div>
            </DefaultLinkButton>
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
        {children}
      </div>
      <div className={'right-column hidden lg:block'}>

      </div>
    </div>
  )
}
