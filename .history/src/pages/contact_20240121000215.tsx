import Image from 'next/image'
import Link from 'next/link'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'

export default function Contact() {
  return (
    <>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center p-10 text-black`}>
      <div className={'flex min-w-screen flex-col gap-20 m-4 items-center'}>
        <h2 className={'text-3xl'}>Now that you've seen it all...</h2>
        <h1 className={'text-5xl'}>Let's chat!</h1>
        <h3 className={'text-xl'}>Feel free to contact me.</h3>
      </div>
      <div className={'flex min-w-full flex-row m-4 p-10 justify-between bg-Emerald'}>
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
        <Link href=''>
        <div className={'flex flex-row items-center gap-2 hover:text-Sage text-base'}>
            <Image
            className={'py-3'}
            src='/images/icons/black/GoogleB.png'
            width={25}
            height={25}
            alt='Instagram-Icon'
            />
            <h2>sierraclaurent@gmail.com</h2>
        </div></Link>
      </div>
    </main>
    <Footer />
    </>
  )
}