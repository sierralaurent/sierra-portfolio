import Image from 'next/image'
import Link from 'next/link'
import Dropdown from '@/components/menu'


export default function NavBar() {

const optionsWithLinks = [
  { label: 'Projects', link: '/Projects' },
  { label: 'Extras', link: '/Extras' },
  { label: 'About', link: '/About' },
  { label: 'Contact', link: '/Contact' }
];

  return (
    <>
    <main className={`flex min-w-screen justify-between p-6 bg-Emerald items-center text-xl`}>
      <div className={'flex flex-row gap-x-5 tablet:hidden mobile:hidden tablet:justify-center'}>
        <Link href="/Projects"><h1 className={'hover:text-Sage'}>Projects</h1></Link>
        <Link href="/Extras"><h1 className={'hover:text-Sage'}>Extras</h1></Link>
      </div>
      <Link href="/"><div>
      <Image
          className={'py-3 '}
          src='/images/icons/White/LogoMark White@300x.png'
          width={200}
          height={50}
          alt='logomark'
        />
      </div></Link>
      <div className={'flex flex-row gap-x-5 tablet:hidden mobile:hidden'}>
        <Link href="/About"><h1 className={'hover:text-Sage'}>About</h1></Link>
        <Link href="/Contact"><h1 className={'hover:text-Sage'}>Contact</h1></Link>
      </div>
      <div className={'desktop:hidden'}>
      <Dropdown items={optionsWithLinks} />
      </div>
    </main>
    </>
  )
}

