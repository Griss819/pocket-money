import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/shared/components/translation-provider';

const i18nNamespaces = ['home'];

export default async function Home({
                                     params
                                   }: {
  params: { locale: string }
}) {
  // 1. Extraer el valor primero (no usar desestructuración directa)
  const locale = params.locale;

  // 2. Luego usarlo en operaciones async
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      locale={locale}  // Usar la variable ya extraída
      resources={resources}
      namespaces={i18nNamespaces}
    >
      <div>{t('debug_message')}</div>
    </TranslationsProvider>
  );
}
