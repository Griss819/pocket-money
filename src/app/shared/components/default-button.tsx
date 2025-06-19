export default function DefaultButton({children , onClick, extraCss} : {children: React.ReactNode, onClick?: () => void, extraCss?: string}) {
  return (
    <button className={'default-button ' + (extraCss? extraCss : null)} onClick={onClick}>{children}</button>
  )
}
