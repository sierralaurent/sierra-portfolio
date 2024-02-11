import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Notification from '@/components/notification'
import AnimatedSection from '@/components/animatedDiv'
import FadeIn from '@/components/fadeIn'
import Head from 'next/head'
import Link from 'next/link'
import Button from '@/components/button'


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
    <main className={`flex min-h-screen flex-col items-center text-black gap-20`}>
      <AnimatedSection >
      <div className={'flex flex-row tablet:flex-col items-center pt-10 gap-20 '}>
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
      </AnimatedSection>
      <div className={'max-w-4xl flex-flex-col gap-8'}>
        <h1 className={'text-5xl font-bold pb-3'}>I am a...</h1>
        <li className={'text-lg font-semibold'}>UI/UX Deisgner</li>
        <li className={'text-lg font-semibold'}>Front End Web Developer</li>
        <li className={'text-lg font-semibold'}>Brand Deisgner</li>
        <h1 className={'text-3xl font-bold pb-3'}>And more...</h1>
      </div>
      <AnimatedSection>
        <div className={'flex flex-col gap-10 items-center my-8'}>
            <h1 className={'text-3xl font-semibold'}>Take a look around</h1>
            <h2 className={'text-xl'}>Let me know if you see anything you like</h2>
            <Link href="/Contact"><Button backgroundColor="Sage">Contact</Button></Link>
          </div>
        </AnimatedSection>
      <div className={'flex flex-col items-center gap-10'}>
      <h1 className={'text-3xl font-bold self-start pl-10'}>Recent Projects</h1>
    <FadeIn index={1}>
      <div className={'tablet:flex-col tablet:max-w-sm max-w-4xl bg-Sage text-white flex flex-row m-10 gap-8 tablet:gap-4 items-center rounded-2xl'}>
        <Image
          className={'desktop:rounded-l-lg tablet:rounded-t-lg'}
          src='/images/PicTok/mockup.png'
          width={400}
          height={400}
          alt='PicTok MockUp'
          />
          <div className={'flex flex-col gap-10 p-10'}>
            <h1 className={'text-3xl font-semibold'}>PicTok</h1>
            <p>A photo sharing app that targets visually impaired users by utilizing image recognition technology to enhance the experience of photo sharing with sound cues and text to speech. </p>
            <Link href="/PicTok"><Button backgroundColor="Emerald">See More</Button></Link>
          </div>
      </div>
    </FadeIn>
    <FadeIn index={2}>
      <div className={'tablet:flex-col tablet:max-w-sm max-w-4xl text-white bg-Emerald text-right flex flex-row gap-8 tablet:gap-4 m-10 items-center rounded-2xl'}>
          <div className={'flex flex-col items-end gap-10 p-10'}>
            <h1 className={'text-3xl font-semibold'}>New Habits</h1>
            <p>Created to help those suffering from substance misuse disorder (SUD), or for concerned family/friends. A quiz within the app that outlines the biggest and most noticeable effects of substance misuse disorder.</p>
            <Link href="/NewHabits"><Button backgroundColor="Sage">See More</Button></Link>
          </div>
          <Image
          className={'desktop:rounded-r-lg tablet:rounded-b-lg'}
          src='/images/NewHabits/mockup.png'
          width={400}
          height={400}
          alt='New Habits MockUp'
          />  
      </div>
    </FadeIn>
    <h1 className={'text-3xl font-bold self-start pl-10 p-10'}>Recently Added to Gallery</h1>
    <div className={'flex flex-row tablet:flex-col mb-20 gap-8 max-w-4xl'}>
      <FadeIn index={3}>
            <Image
            className={'rounded-lg shadow-2xl'}
            src='/images/gallery/elgertControls-cards.png'
            width={400}
            height={400}
            alt='Elgert Controls Business Cards'
            />  
      </FadeIn>
      <FadeIn index={4}>
            <Image
            className={'rounded-lg shadow-2xl'}
            src='/images/MAS/businessCard.png'
            width={400}
            height={400}
            alt='Elgert Controls Business Cards'
            /> 
      </FadeIn>
    </div>
    </div>
    </main>
    <Footer />

    </>
  )
}
