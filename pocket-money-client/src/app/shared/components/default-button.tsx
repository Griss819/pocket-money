export default function DefaultButton({children , onClick} : {children: React.ReactNode, onClick?: () => void}) {
  return (
    <button className={'default-button'} onClick={onClick}>{children}</button>
  )
}
