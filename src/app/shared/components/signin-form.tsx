'use client'
import DefaultInputFormControl from '@/app/shared/components/default-input-form-control';
import DefaultButton from '@/app/shared/components/default-button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

const formSchema = z
  .object({
    email: z.string().email("Correo inválido"),
    password: z.string(),
  })

type FormData = z.infer<typeof formSchema>;

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const t = useTranslations('FormFields');

  const onSubmit = async (data: FormData) => {
    const apiUrl = process.env.API_URL;

    console.log(apiUrl);
    const res = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!res.ok) throw new Error('Credenciales inválidas')
    // Guardar el token o redirigir
    console.log('Login exitoso', data)
  };

  return (
    <form className={'grid grid-cols-1 gap-4 justify-center w-[300px]'} onSubmit={handleSubmit(onSubmit)}>
      <DefaultInputFormControl
        iconClass={'fa-envelope'}
        placeholder={t('email')}
        error={errors.email}
        type={'email'}
        label={t('email')}
        registerProps={register('email')}>
      </DefaultInputFormControl>
      <DefaultInputFormControl
        iconClass={'fa-lock'}
        placeholder={t('password')}
        error={errors.password}
        type={'password'}
        label={t('password')}
        registerProps={register('password')}>
      </DefaultInputFormControl>
      <DefaultButton extraCss={'place-self-center mt-4 px-6'}>
        <div>
          <em className={'fa fa-square-parking w-4 mr-2'}></em> {t('signIn')}
        </div>
      </DefaultButton>
    </form>
  )
}
