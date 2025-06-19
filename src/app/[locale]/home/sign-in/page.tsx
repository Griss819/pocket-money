'use client'

import DefaultPanel from '@/app/shared/components/default-panel';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DefaultButton from '@/app/shared/components/default-button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import DefaultInputFormControl from '@/app/shared/components/default-input-form-control';

// 1. Esquema de validación con Zod
const passwordSchema = z
  .string()
  .min(8, "La contraseña debe tener al menos 8 caracteres")
  .regex(/[A-Z]/, "Debe contener al menos una mayúscula")
  .regex(/[0-9]/, "Debe contener al menos un número");

const formSchema = z
  .object({
    name: z.string().min(2, "Nombre demasiado corto"),
    email: z.string().email("Correo inválido"),
    password: passwordSchema,
    repeatPassword: passwordSchema,
  })
  .refine((data) => data.password != data.repeatPassword, {
    message: "Las contraseñas no coinciden",
  });

type FormData = z.infer<typeof formSchema>;

export default function SignInPage() {
  const t = useTranslations('HomePage');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Registro exitoso:", data);
    // Enviar a tu backend o Server Action aquí
  };

  return (
    <div className={'flex w-full flex flex-col mt-24 justify-center items-center'}>
      <p className={'text-[12px]'}>Que buen dia para registrarse en</p>
      <h1 className={'text-bold text-[var(--color-text)] gap-2 text-2xl mb-4'}><em className={'fa fa-money-bill-alt'}></em> Pocket<strong>Money</strong> </h1>

      <DefaultPanel extraCss={'w-full max-w-[350px] mb-4'}>
        <form className={'grid grid-cols-1 gap-4 justify-center w-full'} onSubmit={handleSubmit(onSubmit)}>
          <DefaultInputFormControl
            iconClass={'fa-user'}
            placeholder={'Nombre'}
            error={errors.name}
            registerProps={register('email')}>
          </DefaultInputFormControl>
          <DefaultInputFormControl
            iconClass={'fa-envelope'}
            placeholder={'Correo'}
            error={errors.email}
            type={'email'}
            registerProps={register('email')}>
          </DefaultInputFormControl>
          <DefaultInputFormControl
            iconClass={'fa-lock'}
            placeholder={'Contraseña'}
            error={errors.password}
            type={'password'}
            registerProps={register('password')}>
          </DefaultInputFormControl>
          <DefaultInputFormControl
            iconClass={'fa-lock'}
            placeholder={'Repetir contraseña'}
            error={errors.repeatPassword}
            type={'password'}
            registerProps={register('repeatPassword')}>
          </DefaultInputFormControl>
          <DefaultButton extraCss={'place-self-center'}>
            <div>
              <em className={'fa fa-square-parking w-4 mr-2'}></em> {t('signin')}
            </div>
          </DefaultButton>
        </form>
      </DefaultPanel>

      <p className={'text-center'}>¿Ya tienes una cuenta? <Link className={'text-[var(--color-link)] text-underline'} href={'/home/log-in'}>Acceder</Link></p>
    </div>

  )
}
