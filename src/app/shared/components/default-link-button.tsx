import Link from 'next/link';

export default function DefaultLinkButton({children , link, extraCss} : {children: React.ReactNode, link: string, extraCss?: string}) {
  return (
    <Link className={'default-button ' + (extraCss? extraCss : null)} href={link}>{children}</Link>
  )
}
