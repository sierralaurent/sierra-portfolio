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
    <main className={`flex min-h-screen flex-col items-center p-10 text-black`}>
      <div className={'flex flex-col items-center m-10 gap-10'}>
        <h1 className={'text-5xl'}>See my big projects here</h1>
        <h3 className={'text-2xl'}>As well as some smaller projects on the 'extras' page</h3>
      </div>
      <div className={'flex flex-row items-center gap-20 p-60 py-28'}>
      <Image
          className={'py-3'}
          src='/images/icons/profile_picture.jpg'
          width={400}
          height={400}
          alt='Profile Picture'
        />
        <div className={'flex flex-col gap-10'}>
          <h1 className={'text-5xl'}>PicTok</h1>
          <h3 className={'text-xl'}>A photo sharing app for the visually impaired community that uses image recognition technology to enhance the experience of photo sharing with sound cues and text to speech. </h3>
          <Link href=""><button className={'bg-Sage text-white p-3 text-lg rounded-lg hover:bg-Emerald'}>See Case Study</button></Link>
        </div>
      </div>
      <div className={'flex flex-row items-center gap-20 p-60 py-28'}>
        <div className={'flex flex-col gap-10 text-right'}>
          <h1 className={'text-5xl '}>New Habits</h1>
          <h3 className={'text-xl'}>The New Habits web app was created to help those suffering from substance misuse disorder (SUD), or for concerned family/friends of those suffering. There is a quiz within the app that asks the users a set of questions outlining the biggest and most noticeable effects of substance misuse disorder. Once users complete the quiz they have the opportunity to find further resources to help begin their recovery process. </h3>
          <Link href=""><button className={'bg-Sage text-white p-3 text-lg rounded-lg hover:bg-Emerald'}>See Case Study</button></Link>
        </div>
        <Image
          className={'py-3'}
          src='/images/icons/profile_picture.jpg'
          width={400}
          height={400}
          alt='Profile Picture'
        />
      </div>
    </main>
    <Footer />
    </>
  )
}