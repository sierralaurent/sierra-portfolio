import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import Link from 'next/link'

export default function Projects() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | Projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center p-8 text-black`}>
      <div className={'flex flex-col items-center m-10 p-10 gap-10'}>
        <h1 className={'text-5xl font-semibold'}>See my projects here</h1>
        <h3 className={'text-2xl'}>As well as some smaller projects on the 'extras' page</h3>
      </div>
      <div className={'flex flex-row items-center gap-20 p-60 py-20 tablet:flex-col tablet:p-48 tablet:gap-10 tablet:py-10'}>
      <Image
          className={'py-3'}
          src='/images/Mock-Up Pictok.png'
          width={400}
          height={400}
          alt='Profile Picture'
        />
        <div className={'flex flex-col gap-10'}>
          <h1 className={'text-5xl font-semibold'}>PicTok</h1>
          <h3 className={'text-xl'}>A photo sharing app for the visually impaired community that uses image recognition technology to enhance the experience of photo sharing with sound cues and text to speech. </h3>
          <Link href="/PicTok"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>See Case Study</button></Link>
        </div>
      </div>
      <div className={'flex flex-row items-center gap-20 p-60 py-20 tablet:flex-col tablet:p-48 tablet:gap-10 tablet:py-10'}>
        <div className={'flex flex-col gap-10 text-right'}>
          <h1 className={'text-5xl font-semibold'}>New Habits</h1>
          <h3 className={'text-xl'}>The New Habits web app was created to help those suffering from substance misuse disorder (SUD), or for concerned family/friends of those suffering. There is a quiz within the app that asks the users a set of questions outlining the biggest and most noticeable effects of substance misuse disorder.</h3>
          <Link href="/NewHabits"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>See Case Study</button></Link>
        </div>
        <Image
          className={'py-3'}
          src='/images/Mock-Up New Habits.png'
          width={400}
          height={400}
          alt='Profile Picture'
        />
      </div>
      <h1 className={'font-bold text-5xl m-8 '}>Design/Graphic Projects</h1>
      <div className={'flex flex-row justify-center items-center gap-16'}>
        <Image
         className={'py-3'}
         src='/CanMockup/CanMockup01.png'
         width={400}
         height={400}
         alt='Can Mock-Up'
        />
        <h1>Hops & Pigs Brewery Can Mockup</h1>
      </div>
      <div className={'flex flex-col items-center gap-10 m-16'}>
        <h1 className={'font-bold text-5xl'}>Get to know me!</h1>
        <h2 className={'font-semibold text-3xl'}>Get to know the designer behind the work.</h2>
        <Link href="/About"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>About Me</button></Link>
      </div>
    </main>
    <Footer />
    </>
  )
}