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
    <main className={`flex min-w-screen justify-between p-6 bg-Emerald items-center text-xl `}>
    <Link href="/">
      <Image
          className={'py-3 h-auto hover:scale-110 transition-transform layout-fill objectFit-cover height-auto'}
          src='/images/icons/White/LogoMarkW.png'
          width={200}
          height={200}
          alt='logomark'
          priority={false}
          unoptimized={true}
          placeholder='empty'
        /></Link>
      <div className={'flex flex-row gap-x-5 tablet:hidden mobile:hidden'}>

        <Link href="/Projects"><h1 className={'hover:text-Sage hover:scale-110 transition-transform'}>Projects</h1></Link>
        <Link href="/Extras"><h1 className={'hover:text-Sage hover:scale-110 transition-transform'}>Gallery</h1></Link>
        <Link href="/Contact"><h1 className={'hover:text-Sage hover:scale-110 transition-transform'}>Contact</h1></Link>
      </div>
      <div className={'desktop:hidden'}>
      <Dropdown items={optionsWithLinks} />
      </div>
    </main>
    
    </>
  )
}

