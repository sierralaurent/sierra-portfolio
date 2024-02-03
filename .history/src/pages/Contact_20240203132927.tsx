import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import Resume from '@/components/resume'

export default function Contact() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col text-center items-center items-center text-black `}>
      <div className={'max-w-6xl m-10 items-center flex '}>
      <div className={'flex min-w-screen flex-col gap-20 m-4 items-center'}>
        <h2 className={'text-3xl'}>Now that you've seen it all...</h2>
        <h1 className={'text-5xl font-semibold'}>Let's chat!</h1>
        <h3 className={'text-xl'}>Feel free to contact me.</h3>
        <Resume />
      </div>

      <div className={'flex tablet:flex-col tablet:items-center min-w-full flex-row m-24 p-10 justify-between'}>
      <Link href='https://www.linkedin.com/in/sierra-laurent-59821226a/'>
        <div className={'flex flex-row items-center gap-2 hover:text-Sage text-base'}>
            <Image
            className={'py-3'}
            src='/images/icons/Black/LinkedInB.png'
            width={25}
            height={25}
            alt='Instagram-Icon'
            />
            <h2>Sierra Laurent</h2>
        </div></Link>
        <Link href='https://github.com/sierralaurent'>
          <div className={'flex flex-row items-center gap-2 hover:text-Sage text-base'}>
            <Image
            className={'py-3'}
            src='/images/icons/Black/GithubB.png'
            width={25}
            height={25}
            alt='Instagram-Icon'
            />
            <h2>sierralaurent</h2>
            </div></Link>
        <Link href=''>
        <div className={'flex flex-row items-center gap-2 hover:text-Sage text-base'}>
            <Image
            className={'py-3'}
            src='/images/icons/Black/GoogleB.png'
            width={25}
            height={25}
            alt='Instagram-Icon'
            />
            <h2>sierraclaurent@gmail.com</h2>
        </div></Link>
      </div>
      </div>
    </main>
    <Footer />
    </>
  )
}