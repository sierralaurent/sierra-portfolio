import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import Link from 'next/link'
import FadeIn from '@/components/fadeIn'
import Button from '@/components/button'

export default function Projects() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | Projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center p-8 tablet:px-4 text-black`}>
      <div className={'flex flex-col items-center m-10 p-10 gap-10 text-center'}>
        <h1 className={'text-5xl font-semibold'}>See my projects here</h1>
        <h3 className={'text-2xl'}>See more designs on the "gallery" page</h3>
      </div>
      <FadeIn index={1}>
        <div className={'tablet:flex-col max-w-4xl tablet:max-w-sm bg-Sage text-white flex flex-row gap-8 tablet:gap-4 m-10 mx-20 items-center rounded-2xl'}>
          <Image
            className={'desktop:rounded-l-2xl tablet:rounded-t-2xl'}
            src='/images/PicTok/mockup.png'
            width={400}
            height={400}
            alt='PicTok MockUp'
            />
            <div className={'flex flex-col gap-10 p-10 tablet:p-5'}>
              <h1 className={'text-3xl font-semibold'}>PicTok</h1>
              <p>A photo sharing app that targets visually impaired users by utilizing image recognition technology to enhance the experience of photo sharing with sound cues and text to speech. </p>
              <Link href="/PicTok"><Button backgroundColor="Emerald">See More</Button></Link>
            </div>
        </div>
      </FadeIn>
      <FadeIn index={3}>
        <div className={'tablet:flex-col max-w-4xl tablet:max-w-sm text-white bg-Emerald text-right flex flex-row gap-8 tablet:gap-4 m-20 items-center rounded-2xl'}>
            <div className={'flex flex-col gap-10 p-10 tablet:p-5'}>
              <h1 className={'text-3xl font-semibold'}>New Habits</h1>
              <p>Created to help those suffering from substance misuse disorder (SUD), or for concerned family/friends. A quiz within the app that outlines the biggest and most noticeable effects of substance misuse disorder.</p>
              <Link href="/NewHabits"><Button backgroundColor="Sage">See More</Button></Link>
            </div>
            <Image
            className={'desktop:rounded-r-2xl tablet:rounded-b-2xl'}
            src='/images/NewHabits/mockup.png'
            width={400}
            height={400}
            alt='New Habits MockUp'
            />  
        </div>
      </FadeIn>
      <FadeIn index={5}>
        <div className={'tablet:flex-col max-w-4xl tablet:max-w-sm bg-Sage text-white flex flex-row gap-8 tablet:gap-4 m-10 mx-20 items-center rounded-2xl'}>
          <Image
            className={'desktop:rounded-l-2xl tablet:rounded-t-2xl'}
            src='/images/MAS/home-mockup.png'
            width={500}
            height={500}
            alt='Malone Auto Spa MockUp'
            />
            <div className={'flex flex-col gap-10 p-10 tablet:p-5'}>
              <h1 className={'text-3xl font-semibold'}>Malone Auto Spa</h1>
              <p>A local, top-notch, automotive detail shop that needed a website to display services and pricing offered, as well as a gallery and blog.</p>
              <Link href="/MAS"><Button backgroundColor="Emerald">See More</Button></Link>
            </div>
        </div>
      </FadeIn>
      <FadeIn index={7}>
        <div className={'tablet:flex-col max-w-4xl tablet:max-w-sm text-white bg-Emerald text-right flex flex-row gap-8 tablet:gap-4 m-20 items-center rounded-2xl'}>
            <div className={'flex flex-col gap-10 p-10 tablet:p-5'}>
              <h1 className={'text-3xl font-semibold '}>Hops & Pigs Brewery</h1>
              <p>A fictional craft beer brewery imagined by myself, Hops & Pigs Brewery wanted to stand out in the never-ending craft beer aisle and do something different. </p>
              <Link href="/hops&pigs"><Button backgroundColor="Sage">See More</Button></Link>
            </div>
              <Image
              className={'desktop:rounded-r-2xl tablet:rounded-b-2xl'}
              src='/CanMockup/CanMockup01.png'
              width={400}
              height={400}
              alt='Can MockUp'
              />
        </div>
      </FadeIn>
      <FadeIn index={9}>
        <div className={'tablet:flex-col max-w-4xl tablet:max-w-sm bg-Sage text-white flex flex-row gap-8 tablet:gap-4 m-10 mx-20 items-center rounded-2xl'}>
          <Image
            className={'desktop:rounded-l-2xl tablet:rounded-t-2xl'}
            src='https://media.giphy.com/media/OtspVtO0cTbKIIRdcF/giphy.gif'
            width={400}
            height={400}
            alt='Tunezilla GIF'
            />
            <div className={'flex flex-col gap-10 p-10 tablet:p-5'}>
              <h1 className={'text-3xl font-semibold '}>TuneZilla GIFs</h1>
              <p>Creating GIFs to use in social media posts by followers and the social media team that are centred around the company.</p>
              <Link href="/tunezilla"><Button backgroundColor="Emerald">See More</Button></Link>
            </div>
        </div>
      </FadeIn>
      <div className={'flex flex-col items-center gap-10 m-16 text-center'}>
        <h1 className={'font-bold text-5xl'}>Get to know me!</h1>
        <h2 className={'font-semibold text-3xl'}>Get to know the designer behind the work</h2>
        <Link href="/Contact"><Button backgroundColor="Sage">See More</Button></Link>
      </div>
    </main>
    <Footer />
    </>
  )
}