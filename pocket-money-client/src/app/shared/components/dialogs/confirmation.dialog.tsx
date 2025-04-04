import DefaultButton from '@/app/shared/components/default-button';
import DefaultPanel from '@/app/shared/components/default-panel';

export function ConfirmationDialog({
                                     message,
                                     onClose,
                                   }: {
  message: string;
  onClose: (confirmed: boolean) => void;
}) {
  return (
    <DefaultPanel>
      <p className="mb-4">{message}</p>
      <div className="flex justify-end gap-2">
        <DefaultButton onClick={() => { onClose(false) }}>
          Cancelar
        </DefaultButton>
        <DefaultButton onClick={() => onClose(true)}>Confirmar</DefaultButton>
      </div>
    </DefaultPanel>
  );
}
