'use client'

import DefaultPanel from '@/app/shared/components/default-panel';

export default function Home() {
  return (
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
  );
}
