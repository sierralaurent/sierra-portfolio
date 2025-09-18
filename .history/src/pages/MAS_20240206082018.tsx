import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import Link from 'next/link'
import Scroll from '@/components/scroll'
import Button from '@/components/button'

export default function MAS() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | Malone Auto Spa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center text-black`}>
        <Scroll />
        <div className={'flex flex-col items-center gap-1'}>
        <Image
            className={'hover:scale-110 transition-transform'}
            src='/images/MAS/MAS_Horizontal.svg'
            width={400}
            height={100}
            alt='Malone Auto Spa Logo'
        />
        <Image
            className={'w-full'}
            src='/images/MAS/MAS-3screen-mockup.png'
            width={600}
            height={600}
            alt='Can Mock Up'
        />
        </div>
        <div className={'flex flex-col max-w-6xl gap-10 items-center mx-48  tablet:mx-6 tablet-m-10'}>
            <div className={'flex flex-col gap-5 text-center items-center'}>
                <h1 className={'text-5xl font-bold'}>Malone Auto Spa</h1>
                <h2 className={'text-2xl'}>Local Automotive Detail Shop Website</h2>
                <Link href="https://maloneautospa.com/" rel="noopener noreferrer" target="_blank"><Button backgroundColor="Sage">View Site</Button></Link>
            </div>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Summary</h1>
        </div>
        <p className={'text-lg'}>Starting with an empty warehouse, Malone Auto Spa was born and given a name. The design of the logo came easily, as it was derived from the parent company's logo with added attributes like the 
            bubbles to resemble the auto spa. Luckily Malone Auto Spa has the assets of the parent company, such as a professional photographer, web developers, and marketing manager.</p>
        <div className={'flex flex-row gap-20 tablet:flex-col tablet:gap-10'}>
            <Image
                className={'shadow-2xl'}
                src='/images/MAS/MAS-Bucket.jpg'
                width={200}
                height={80}
                alt='MAS Ideation Image'
            />
            <Image
                className={' shadow-2xl'}
                src='/images/MAS/MAS-Golf.jpg'
                width={200}
                height={100}
                alt='MAS Ideation Image'
            />
        </div>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Necessities</h1>
        </div>
        <p className={'text-lg'}>Malone Auto Spa was going to be diving into a very niche market, the car detailing market. From there it can be divided into many segments, luxury cars, daily washes, long-term protection and more. Opening the website up 
         to all the segments was going to be a little tricky. Customer personas were created to help identify the needs of a few potential segments. </p>
         <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-xl font-semibold'}>Customer Persona</h1>
            <p className={'text-lg'}>Customer personas lists the do’s and don’t as well as scenarios of a fictional character.</p>
        </div>
        <div className={'flex flex-row gap-10'}>
        <Image
                className={'shadow-2xl'}
                src='/images/MAS/MAS-CustomerPersona.png'
                width={800}
                height={800}
                alt='Ideation of PicTok'
            />
        </div>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Results</h1>
        </div>
        <div className={'flex flex-row gap-10 tablet:flex-col  '}>
            <Image
                className={'shadow-2xl'}
                src='/images/MAS/home-mockup.png'
                width={400}
                height={400}
                alt='Ideation of PicTok'
            />
            <Image
                className={'shadow-2xl'}
                src='/images/MAS/contact-mockup.png'
                width={400}
                height={400}
                alt='Ideation of PicTok'
            />
        </div>
        <p className={'text-lg'}>The Malone Auto Spa website is still in active development, launching certain sections of the website in phases. In the next phase, we will focus on the gallery of the customer before and after photos, as well as a blog on any frequently asked questions we get along the way.</p>
            <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Extras</h1>
            <p className={'text-lg'}>Check out some extra work done for Malone Auto Spa in addition to the website.</p>
        </div>
        <div className={'flex flex-row tablet:flex-col  '}>
            <Image
                className={'shadow-2xl'}
                src='/images/MAS/businessCard.png'
                width={400}
                height={400}
                alt='Ideation of PicTok'
            />
        </div>
        </div>
        
        <div className={'flex flex-col items-center gap-10 m-16 mb-24 text-center'}>
            <h1 className={'font-bold text-3xl'}>Hope you enjoyed Malone Auto Spa!</h1>
            <h2 className={'font-semibold text-3xl'}>Be sure to check out the rest of my projects</h2>
            <div className={'flex flex-row gap-12 items-center'}>
                <Link href="/Projects"><Button backgroundColor='Sage'>Back to Projects</Button></Link>
                <Link href="/hops&pigs"><Button backgroundColor='Sage'>Next Project</Button></Link>
            </div>
      </div>
    </main>
    <Footer />
    </>     
  )
}