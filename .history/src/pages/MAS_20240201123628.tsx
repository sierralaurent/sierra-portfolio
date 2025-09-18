import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import Link from 'next/link'
import CanSlideshow from '@/components/canSlideshow'
import BlurredImageWarning from '@/components/blurredImage';

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
        <Image
            className={'py-3 hover:scale-110 transition-transform'}
            src='/images/MAS/MAS_Horizontal.svg'
            width={400}
            height={400}
            alt='Malone Auto Spa Logo'
        />
        <div className={'flex flex-col max-w-5xl p-12 gap-10 items-center m-20 mx-48'}>
            <div className={'flex flex-col gap-5 text-center'}>
                <h1 className={'text-5xl font-bold'}>Malone Auto Spa</h1>
                <h2 className={'text-2xl'}>Local Automotive Detail Shop Website</h2>
            </div>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Summary</h1>
        </div>
        <p className={'text-lg'}>Starting with an empty warehouse, Malone Auto Spa was born and given a name. The design of the logo came easily, as it was derived from the parent company's logo with added attributes like the 
            bubbles to resemble the auto spa. Luckily Malone Auto Spa has the assets of the parent company, such as a professional photographer, web developers, and marketing manager.</p>
        <div className={'flex flex-row gap-20'}>
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
        <p className={'text-lg'}>Once I saw this Pantone swatch pop up on my Pinterest feed, I knew I must bring this into a design and give it life, even better 
            it was given an awesome name, beetle wing. Bringing the colour to its name, I imagined it with a beautiful three-horned rhinoceros stag beetle, vectorized 
            and simplified to make it less scary, it belonged on the front of one of the best beers to exist, a hazy IPA.</p>
        <div className={'flex flex-row gap-10'}>
            
        </div>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Results</h1>
        </div>
        <p className={'text-lg'}>In the end, we get this unique can with three different brews and the opportunity to add many more beautiful bugs with more awe-inspiring colours. For now, we will leave Hops 
            & Pigs with their three distinctive cans for their three most popular brews.</p>
        </div>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Extras</h1>
        </div>
        <p className={'text-lg'}>Check out some extra work done for Malone Auto Spa in addition to the website.</p>
        <div className={'flex flex-col items-center gap-10 m-16 mb-20 text-center'}>
            <h1 className={'font-bold text-3xl'}>Hope you enjoyed Malone Auto Spa!</h1>
            <h2 className={'font-semibold text-3xl'}>Be sure to check out the rest of my projects</h2>
            <div className={'flex flex-row gap-12 items-center'}>
                <Link href="/Projects"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>Back to Projects</button></Link>
                <Link href="/hops&pigs"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>Next Project</button></Link>
            </div>
      </div>
    </main>
    <Footer />
    </>     
  )
}