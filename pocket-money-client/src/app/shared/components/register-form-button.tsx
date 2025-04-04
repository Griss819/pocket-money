'use client'

import { RegisterFormDialog } from '@/app/shared/components/dialogs/register-form.dialog';
import DialogButton from '@/app/shared/components/dialog-button';

export const RegisterFormButton = ({children}: {children: React.ReactNode} ) => {
  return (
    <DialogButton dialogComponent={RegisterFormDialog} onConfirm={() => {}}>
      {children}
    </DialogButton>
  )
}
