import { FieldError, UseFormRegister } from 'react-hook-form';

export default function DefaultInputFormControl({
                                            placeholder,
                                            label,
                                            iconClass,
                                            extraCss,
                                            error,
                                            type = 'text',
                                            registerProps
} : {
  label?: string | undefined,
  placeholder?: string | undefined,
  iconClass?: string | undefined,
  extraCss?: string,
  error: FieldError | undefined,
  type?: 'text' | 'password' | 'email' | 'number',
  registerProps: ReturnType<UseFormRegister<object>>})
{
  return (
    <div className={'flex flex-col ' + extraCss ? extraCss : ''}>
      {label && <label className={'text-sm mb-2'}>{label}</label>}
      <div className={`border-[1px] gap-2 flex flex-row items-center border-2 py-2 outline-none rounded-md ${iconClass ? 'pl-4 pr-2' : 'px-4'} ${error ? 'border-red-400' : 'border-[var(--color-border)]'}`}>
        <input {...registerProps} type={type} className={'w-full outline-none text-sm'}  placeholder={placeholder} />
        {iconClass &&
            <div className={'flex justify-center items-center'}>
                <em className={`text-sm fa ${iconClass} w-5 h-fit ${error ? 'text-red-400' : 'text-[var(--color-text)]'}`}></em>
            </div>
        }
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-400">
          <em className={'fa fa-exclamation-circle text-sm mr-2 '}></em> {error.message}
        </p>
      )}
    </div>
  )
}
