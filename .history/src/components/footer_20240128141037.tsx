import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
  return (
    <main className={`flex min-w-screen justify-between p-6 bg-Emerald items-center text-xl`}>
      <div className={'flex flex-col gap-2'}>
        <h1 className={'text-2xl font-bold'}>Say Hi</h1>
        <div className={'flex flex-row items-center justify-between hover:text-Sage text-base'}>
        <Link href='https://www.linkedin.com/in/sierra-laurent-59821226a/'>
            <Image
            className={'py-3'}
            src='/images/icons/White/LinkedInW.png'
            width={25}
            height={25}
            alt='Instagram-Icon'
            /> </Link>
            <Image
            className={'py-3 w-auto h-auto layout-fill objectFit-cover'}
            src='/images/icons/white/GoogleW.png'
            width={25}
            height={25}
            alt='Instagram-Icon'
            priority={false}
            unoptimized={true}
            placeholder = 'empty'
            />
        </div>
      </div>

      <div>
      <Link href='/'>
          <Image
            className={'py-3 hover:scale-110 transition-transform height-auto'}
            src='/images/icons/White/Logo white@300x.png'
            width={125}
            height={125}
            alt='logo '
            
          /> 
        </Link>
      </div>

      <div className={'flex flex-col gap-2 '}>
        <h1 className={'text-2xl font-bold'}>See More</h1>
        <div className={'flex flex-row items-center justify-between hover:text-Sage text-base'}>
            <Link href=''>
            <Image
            className={'py-3'}
            src='/images/icons/White/InstagramW.png'
            width={25}
            height={25}
            alt='Instagram-Icon'
            /> </Link>
            <Link href='https://github.com/sierralaurent'>
            <Image
            className={'py-3'}
            src='/images/icons/White/GithubW.png'
            width={25}
            height={25}
            alt='Instagram-Icon'
            /></Link>
        </div>
      </div>
    </main>
  )
}