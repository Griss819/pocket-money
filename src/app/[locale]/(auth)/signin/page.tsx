import DefaultPanel from '@/app/shared/components/default-panel';
import SignInForm from '@/app/shared/components/signin-form';
import { useTranslations } from 'next-intl';

export default function SignInPage() {
  const t = useTranslations('FormFields');

  return (
    <div className={'flex flex-col items-center'}>
      <DefaultPanel>
        <div className={'flex flex-col gap-4'}>
          <div className={'flex flex-col'}>
            <p className={'text-[var(--color-text)] text-lg text-bold'}><strong>{t('signIn')}</strong></p>
            <p className={'text-[var(--color-text)] mb-2'}>{t('singInDesc')}</p>
          </div>
          <SignInForm></SignInForm>
        </div>
      </DefaultPanel>
    </div>
  );
}
