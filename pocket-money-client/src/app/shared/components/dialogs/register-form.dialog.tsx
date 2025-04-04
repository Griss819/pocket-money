import DefaultPanel from '@/app/shared/components/default-panel';
import DefaultButton from '@/app/shared/components/default-button';

export const RegisterFormDialog = ({
                                     onClose,
                                   }: {
  onClose: (confirmed: boolean) => void;
}) => {
  return (
    <DefaultPanel>
      <div className={'grid grid-cols-1 gap-1 w-[300px]'}>
        <DefaultButton extraCss={'ml-auto'} onClick={() => onClose(false)}>
          <em className={'fa fa-close'}></em>
        </DefaultButton>
        <div>
          <p>Algo</p>
        </div>
      </div>

    </DefaultPanel>
  )
}
