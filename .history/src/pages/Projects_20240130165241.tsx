import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import Link from 'next/link'
import CanSlideshow from '@/components/canSlideshow'
import TzSlideshow from '@/components/tzSlideshow'

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
      <div className={'tablet:flex-col w-400 bg-Sage text-white flex flex-row gap-8 m -10 mx-20 items-center rounded-lg'}>
      <Image
        className={'rounded-l-lg'}
        src='/images/PicTok/Mock-Up PicTok.png'
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
        src='/images/Newhabits/Mock-Up New Habits.png'
        width={400}
        height={400}
        alt='New Habits MockUp'
        />  
    </div>
      <div className={'flex flex-row items-center gap-20 p-60 py-20 tablet:flex-col tablet:p-48 tablet:gap-10 tablet:py-10'}>
      <Image
          className={'py-3 h-auto hover:scale-110 transition-transform'}
          src='/images/MAS/MASMockup.png'
          width={450}
          height={400}
          alt='Profile Picture'
          priority={false}
          unoptimized={true}
          placeholder='empty'
        />
        <div className={'flex flex-col gap-10'}>
          <h1 className={'text-5xl font-semibold'}>Malone Auto Spa</h1>
          <h3 className={'text-xl'}>Malone Auto Spa started with an empty warehouse unit that needed inspiration for everyday use, ideally around the image of automotive, as the
            employees were obsessed with all things cars. So Malone Auto Spa was born in a freshly renovated warehouse and needed a website.</h3>
          <Link href="/MAS"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>See Case Study</button></Link>
        </div>
      </div>
      <div className={'flex flex-row justify-center items-center gap-16 tablet:flex-col m-16 px-36'}>
        <CanSlideshow />
        <div className={'flex flex-col gap-8'}>
          <h1 className={'text-3xl font-bold'}>Hops & Pigs Brewery Can Mockup</h1>
          <p className={'text-xl'}>A fictional brewery made by myself, to display the design and photoshop skills learned.</p>
        </div>
      </div>
      <div className={'flex flex-row justify-center items-center gap-16 tablet:flex-col m-16 px-36'}>
        <div className={'flex flex-col gap-8 text-right'}>
          <h1 className={'text-3xl font-bold'}>TuneZilla GIFs for Social media</h1>
          <p className={'text-xl'}>TuneZilla wanted a little something extra to add social media posts and stories, so I made some GIFs that could be used as stickers for that little extra branding.</p>
        </div>
        <TzSlideshow />
      </div>
      <div className={'flex flex-col items-center gap-10 m-16'}>
        <h1 className={'font-bold text-5xl'}>Get to know me!</h1>
        <h2 className={'font-semibold text-3xl'}>Get to know the designer behind the work</h2>
        <Link href="/About"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>About Me</button></Link>
      </div>
    </main>
    <Footer />
    </>
  )
}