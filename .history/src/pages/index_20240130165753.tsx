import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Notification from '@/components/notification'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <Notification />
    <main className={`flex min-h-screen flex-col items-center text-black gap-40`}>
      <div className={'flex flex-row items-center gap-20'}>
      <Image
          className={'py-3 layout-fill objectFit-cover height-auto'}
          src='/images/profile_picture.jpg'
          width={400}
          height={400}
          priority={true}
          alt='Profile Picture'
        />
        <div className={'flex flex-col gap-10'}>
          <h1 className={'text-5xl font-semibold'}>Hi, I'm Sierra</h1>
          <h2 className={'text-3xl'}>Welcome to my Portfolio</h2>
        </div>
      </div>
      <div className={'text-right'}>
      <h1 className={'text-3xl font-bold '}>Recent Projects</h1>
      </div>
      <div className={'flex flex-col gap-10'}>
    <div className={'tablet:flex-col w-40 bg-Sage text-white flex flex-row gap-8 items-center rounded-lg'}>
      <Image
        className={'rounded-l-lg'}
        src='/images/PicTok/PicTok-MockUp.png'
        width={400}
        height={400}
        alt='PicTok MockUp'
        />
        <div className={'flex flex-col gap-10 p-10'}>
          <h1 className={'text-3xl font-semibold'}>PicTok</h1>
          <p>A photo sharing app that targets visually impaired users by utilizing image recognition technology to enhance the experience of photo sharing with sound cues and text to speech. </p>
          <Link href="/PicTok"><button className={'bg-Emerald text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>See More</button></Link>
        </div>
    </div>
    <div className={'tablet:flex-col text-white bg-Emerald text-right flex flex-row gap-8 m-20 items-center rounded-lg'}>
        <div className={'flex flex-col gap-10 p-10'}>
          <h1 className={'text-3xl font-semibold'}>New Habits</h1>
          <p>Created to help those suffering from substance misuse disorder (SUD), or for concerned family/friends. A quiz within the app that outlines the biggest and most noticeable effects of substance misuse disorder.</p>
          <Link href="/NewHabits"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:scale-110 transition-transform'}>See More</button></Link>
        </div>
        <Image
        className={'rounded-r-lg'}
        src='/images/Newhabits/NewHabits-MockUp.png'
        width={400}
        height={400}
        alt='New Habits MockUp'
        />  
    </div>
    </div>
    </main>
    <Footer />
    </>
  )
}
