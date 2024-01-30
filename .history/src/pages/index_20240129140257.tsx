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
    <main className={`flex min-h-screen flex-col items-center p-20 text-black gap-40`}>
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
          <h1 className={'text-5xl font-semiold'}>Hi, I'm Sierra</h1>
          <h2 className={'text-3xl'}>Welcome to my Portfolio</h2>
        </div>
      </div>

      <div className={'flex flex-col gap-10'}>
        <h1 className={'text-3xl font-bold'}>Recent Projects</h1>
        <div className={'flex flex-row items-center gap-10'}>
          <Link href="/PicTok"><div className={'flex flex-col items-center hover:scale-110 transition-transform'}>
          <Image
            className={'py-3 layout-fill objectFit-cover height-auto'}
            src='/images/PicTok/Mock-Up PicTok.png'
            width={300}
            height={300}
            alt='PicTok App Mock-Up'
          />
          <h2 className={'text-xl font-semibold'}>PicTok</h2>
          </div></Link>
          <Link href="/NewHabits"><div className={'flex flex-col items-center hover:scale-110 transition-transform'}>
          <Image
            className={'py-3'}
            src='/images/NewHabits/Mock-Up New Habits.png'
            width={300}
            height={300}
            alt='NewHabits App Mock-Up'
          />
          <h2 className={'text-xl font-semibold'}>New Habits</h2>
          </div></Link>
          <div>
          <Link href="/Projects"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>See All Projects</button></Link>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}
