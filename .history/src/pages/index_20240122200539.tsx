import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center p-10 text-black`}>
      <div className={'flex flex-row items-center gap-20'}>
      <Image
          className={'py-3'}
          src='/images/icons/profile_picture.jpg'
          width={400}
          height={400}
          alt='Profile Picture'
        />
        <div className={'flex flex-col gap-10'}>
          <h1 className={'text-5xl'}>Hi, I'm Sierra</h1>
          <h2 className={'text-3xl'}>Welcome to my Portfolio</h2>
        </div>
      </div>
      <div className={'flex flex-col justify-between gap-20'}>
        <h1>Recent Projects</h1>
        <div className={'flex flex-row justify-between'}>
          <div className={'flex flex-col items-center'}>
          <Image
            className={'py-3'}
            src='/images/Mock-Up PicTok.png'
            width={300}
            height={300}
            alt='PicTok App Mock-Up'
          />
          <h2>PicTok</h2>
          </div>
          <div className={'flex flex-col items-center'}>
          <Image
            className={'py-3'}
            src='/images/Mock-Up New Habits.png'
            width={300}
            height={300}
            alt='PicTok App Mock-Up'
          />
          <h2>New Habits</h2>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}
