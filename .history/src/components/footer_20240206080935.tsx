import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
  return (
    <main className={`flex min-w-screen justify-between p-6 bg-Emerald items-center text-xl`}>
      <div className={'flex flex-col gap-2'}>
        <div className={'flex flex-row items-center gap-5'}>
        <Link href='https://www.linkedin.com/in/sierra-laurent-59821226a/' rel="noopener noreferrer" target="_blank">
            <Image
            className={'py-3 h-auto hover:scale-110 transition-transform'}
            src='/images/icons/White/LinkedInW.png'
            width={25}
            height={25}
            alt='LinkedIn-Icon'
            /> </Link>
            <Image
            className={'py-3 h-auto hover:scale-110 transition-transform'}
            src='/images/icons/White/GoogleW.png'
            width={25}
            height={25}
            alt='Google-Icon'
       
            />
        </div>
      </div>

      <div>
      <Link href='/'>
          <Image
            className={'py-3 h-auto hover:scale-110 transition-transform h-auto'}
            src='/images/icons/White/LogoW.png'
            width={100}
            height={100}
            alt='My logo'
          /> 
        </Link>
      </div>

      <div className={'flex flex-col gap-2 '}>
        <div className={'flex flex-row items-center gap-5'}>
            <Link href=''>
            <Image
            className={'py-3 h-auto hover:scale-110 transition-transform'}
            src='/images/icons/White/InstagramW.png'
            width={25}
            height={25}
            alt='Instagram-Icon'
            priority={false}
            unoptimized={true}
            placeholder='empty'
            /> </Link>
            <Link href='https://github.com/sierralaurent' rel="noopener noreferrer" target="_blank">
            <Image
            className={'py-3 h-auto hover:scale-110 transition-transform'}
            src='/images/icons/White/GithubW.png'
            width={25}
            height={25}
            alt='GitHub-Icon'
            priority={false}
            unoptimized={true}
            placeholder='empty'
            /></Link>
        </div>
      </div>
    </main>
  )
}