import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
  return (
    <main className={`flex min-w-screen justify-between p-8 bg-Emerald items-center text-xl`}>
      <div className={'flex flex-col gap-2'}>
        <h1 className={'text-2xl'}>Say Hi</h1>
        <Link href='https://www.linkedin.com/in/sierra-laurent-59821226a/'>
        <div className={'flex flex-row items-center gap-2 hover:text-Sage'}>
            <Image
            className={'py-3'}
            src='/images/icons/LinkedIn.png'
            width={25}
            height={25}
            alt='Instagram-Icon'
            />
            <h2>Sierra Laurent</h2>
        </div></Link>
        <Link href=''>
        <div className={'flex flex-row items-center gap-2 hover:text-Sage'}>
            <Image
            className={'py-3'}
            src='/images/icons/google.png'
            width={25}
            height={25}
            alt='Instagram-Icon'
            />
            <h2>sierraclaurent@gmail.com</h2>
        </div></Link>
      </div>
      <div>
      <Image
          className={'py-3'}
          src='/images/icons/Logo white@300x.png'
          width={200}
          height={50}
          alt='logo '
        />
      </div>
      <div className={'flex flex-col gap-2'}>
        <h1 className={'text-2xl'}>See More</h1>
        <Link href=''>
        <div className={'flex flex-row items-center gap-2 hover:text-Sage'}>
            <Image
            className={'py-3'}
            src='/images/icons/Instagram.png'
            width={25}
            height={25}
            alt='Instagram-Icon'
            />
            <h2>misty.jams</h2>
        </div></Link>
        <Link href='https://github.com/sierralaurent'>
        <div className={'flex flex-row items-center gap-2 hover:text-Sage'}>
            <Image
            className={'py-3'}
            src='/images/icons/Github.png'
            width={25}
            height={25}
            alt='Instagram-Icon'
            />
            <h2>sierralaurent</h2>
        </div></Link>
      </div>
    </main>
  )
}