import Image from 'next/image'
import Link from 'next/link'


export default function NavBar() {
  return (
    <main className={`flex min-w-screen justify-between p-8 bg-Emerald items-center text-xl`}>
      <div className={'flex flex-row gap-x-5'}>
        <Link href=""><h1 className={'hover:text-Sage'}>Projects</h1></Link>
        <Link href=""><h1 className={'hover:text-Sage'}>Extras</h1></Link>
      </div>
      <div>
      <Image
          className={'py-3'}
          src='/images/icons/LogoMark White@300x.png'
          width={200}
          height={50}
          alt='logomark'
        />
      </div>
      <div className={'flex flex-row gap-x-5'}>
        <Link href=""><h1 className={'hover:text-Sage'}>About</h1></Link>
        <Link href=""><h1 className={'hover:text-Sage'}>Contact</h1></Link>
      </div>
    </main>
  )
}