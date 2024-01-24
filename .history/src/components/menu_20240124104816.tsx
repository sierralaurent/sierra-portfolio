import Image from 'next/image'
import Link from 'next/link'


export default function HamMenu() {
  return (
    <>
        <Image
            className={'py-3'}
            src='/images/icons/White/Hamburger-Menu.png'
            width={50}
            height={50}
            alt='Hamburger'
          />

    </>
  )
}
