'use client'

import { useTranslations } from 'next-intl';
import { ThemeButton } from '@/app/shared/components/theme-button';
import { LanguageSwitchButton } from '@/app/shared/components/language-switch-button';
import DefaultButton from '@/app/shared/components/default-button';
import DefaultPanel from '@/app/shared/components/default-panel';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className={'main-page h-[100vh]'}>
      <div className={'left-column hidden lg:block'}>

      </div>
      <div className={'main-content col-span-5 lg:col-span-3 lg:p-0 p-5'}>
        <div className={'main-header p-4 flex flex-row justify-between items-center'}>
          <h1 className={'text-bold text-[var(--color-text)] gap-2 text-2xl'}><em className={'fa fa-money-bill-alt'}></em> Pocket<strong>Money</strong> </h1>
          <div className={'lg:flex flex-row gap-2 items-center hidden'}>
            <DefaultButton>
              <div>
                <em className={'fa fa-square-parking w-4 mr-2'}></em> {t('login')}
              </div>
            </DefaultButton>
            <DefaultButton>
              <div>
                <em className={'fa fa-square-parking w-4 mr-2'}></em> {t('signin')}
              </div>
            </DefaultButton>
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
        <div className={'p-4 grid grid-cols-1 gap-8'}>
          <div className={'flex justify-center items-center bg-slate-200 aspect-video rounded-lg w-full'}>
          </div>

          <div className={'flex flex-col gap-2'}>
            <h2 className={'text-2xl font-semibold text-[var(--color-text)]'}>¿¡A donde diablos va el dinero en esta casa!?</h2>
            <p className={'text-lg text-justify text-[var(--color-text)]'}>Si te has hecho esta pregunta alguna vez, no te preocupes, te tenemos cubierto. Con nuestra herramienta
              de gestión y monitoreo de finanzas, sabrás a donde va cada céntimo de tu dinero. Lo gastado no regresará,
              pero al menos ya sabes a donde fué.</p>
          </div>

          <div className={'grid grid-cols-1 lg:grid-cols-5 gap-8'}>
            <DefaultPanel extraCss={'w-full col-span-1 lg:col-span-2'}>
              <div className={'flex flex-row gap-4 items-start'}>
                <em className={'fa fa-user-alt mt-2 text-xl'}></em>
                <div className={'flex flex-col gap-2'}>
                  <h2 className={'font-semibold text-lg'}>Múltiples cuentas</h2>
                  <p className={'text-justify'}>
                    Registra hasta un maximo de 4 cuentas para mantener tus ingresos organizados.
                  </p>
                </div>
              </div>
            </DefaultPanel>
            <DefaultPanel extraCss={'w-full col-span-1 lg:col-span-3'}>
              <div className={'flex flex-row gap-4 items-start'}>
                <em className={'fa fa-chart-column mt-2 text-xl'}></em>
                <div className={'flex flex-col gap-2'}>
                  <h2 className={'font-semibold text-lg'}>Monitoreo de datos</h2>
                  <p className={'text-justify'}>
                    Accede a resumenes mensuales, estadísticas de ingresos/gastos y mucho mas desde nuestro dashboard.
                  </p>
                </div>
              </div>
            </DefaultPanel>
            <DefaultPanel extraCss={'w-full col-span-1 lg:col-span-3'}>
              <div className={'flex flex-row gap-4 items-start'}>
                <em className={'fa fa-check-square mt-2 text-xl'}></em>
                <div className={'flex flex-col gap-2'}>
                  <h2 className={'font-semibold text-lg'}>Metas y objetivos</h2>
                  <p className={'text-justify'}>
                    ¡Divide y vencerás! Trazate pequeñas metas y desafíos, ya sea lograr un ingreso específico, ahorrar
                    cierta cantidad, o que los gastos no superen cierta cifra.
                  </p>
                </div>
              </div>
            </DefaultPanel>
            <DefaultPanel extraCss={'w-full col-span-1 lg:col-span-2'}>
              <div className={'flex flex-row gap-4 items-start'}>
                <em className={'fa fa-wind mt-2 text-xl'}></em>
                <div className={'flex flex-col gap-2'}>
                  <h2 className={'font-semibold text-lg'}>Es gratis</h2>
                  <p className={'text-justify'}>
                    Nuestras herramientas estarán disponibles de forma gratuita <strong>para siempre</strong>.
                  </p>
                </div>
              </div>
            </DefaultPanel>
          </div>

          <div className={'flex flex-col justify-center items-center'}>
            <p className={'text-center'}>Hecho con <em className={'fab fa-react'}></em> React, <em className={'fab fa-css'}></em>  TailwindCss y <em className={'fa fa-font-awesome'}></em> FontAwesome</p>
            <p>2025, todos los derechos reservados.</p>
          </div>
        </div>
      </div>
      <div className={'right-column hidden lg:block'}>

      </div>
    </div>
  );
}
