export default function DefaultPanel({children, extraCss}: {children: React.ReactNode, extraCss?: string}) {
  return (
    <div className={'default-panel ' + extraCss}>
      {children}
    </div>
  );
}
