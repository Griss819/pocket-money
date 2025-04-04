import DefaultButton from '@/app/shared/components/default-button';
import { useModal } from '@/app/shared/components/modal-provider/modal-provider.hook';
import { ConfirmationDialog } from '@/app/shared/components/dialogs/confirmation.dialog';
import { ComponentType, ReactNode } from 'react';

// Definimos los tipos base para las props del diálogo
type BaseDialogProps<T> = {
  onClose: (result?: T) => void;
  message?: string;
};

// Tipos para las props del DialogButton
interface DialogButtonProps<T = boolean, P extends BaseDialogProps<T> = BaseDialogProps<T>> {
  children: ReactNode;
  onConfirm: (result: T) => void;
  onCancel?: () => void;
  dialogMessage?: string;
  dialogComponent?: ComponentType<P>;
  dialogProps?: Omit<P, 'onClose' | 'message'>;
}

export default function DialogButton<T = boolean, P extends BaseDialogProps<T> = BaseDialogProps<T>>({
                                                                                                       children,
                                                                                                       onConfirm,
                                                                                                       onCancel,
                                                                                                       dialogMessage = '¿Estás seguro?',
                                                                                                       dialogComponent: DialogComponent = ConfirmationDialog as ComponentType<P>,
                                                                                                       dialogProps = {} as Omit<P, 'onClose' | 'message'>,
                                                                                                     }: DialogButtonProps<T, P>) {
  const { showModal } = useModal();

  const handleClick = async () => {
    try {
      const result = await showModal<T>(({ onClose }) => (
        // Usamos 'as any' temporalmente para evitar el error de tipo
        <DialogComponent
          onClose={onClose}
          message={dialogMessage}
          {...dialogProps}
        />
      ));

      if (result !== undefined) {
        onConfirm(result);
      } else if (onCancel) {
        onCancel();
      }
    } catch (error) {
      console.error('Error en el diálogo:', error);
    }
  };

  return (
    <DefaultButton onClick={handleClick}>
      {children}
    </DefaultButton>
  );
}
