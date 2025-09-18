import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import Link from 'next/link'
import CanSlideshow from '@/components/canSlideshow'
import BlurredImageWarning from '@/components/blurredImage';

export default function HopsPigs() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | Hops & Pigs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center text-black`}>
        <Image
            className={'py-8 hover:scale-110 transition-transform'}
            src='/CanMockup/H&PLogo.png'
            width={400}
            height={400}
            alt='Hops and Pigs Logo'
        />
        <Image
            className={' w-full'}
            src='/CanMockup/CanMockUpALL.png'
            width={600}
            height={600}
            alt='Can Mock Up'
        />
        <div className={'flex flex-col max-w-5xl p-12 gap-10 items-center m-20 mx-48'}>
            <div className={'flex flex-col gap-5'}>
                <h1 className={'text-5xl font-bold text-fuchsia-400'}>Hops & Pigs Brewery</h1>
                <h2 className={'text-2xl'}>Fictional Beverage Company Can Mockup</h2>
            </div>
        <h1 className={'text-3xl font-semibold'}>Summary</h1>
        <p>A fictional craft beer brewery imagined by myself is based out of Vancouver, BC, Hops & Pigs 
            decided to stand out in the never-ending craft beer aisle and put something different on the 
            front of their cans, BUGS. It is often seen as a design never-do, but Hops & Pig’s wanted to try it, 
            as they knew their customers loved trying every different beer they could put out. They wanted to stay 
            true to their colours of pink and white but were open to venturing out to more colours.</p>
        <div className={'flex flex-row gap-20'}>
            <Image
                className={'py-3 '}
                src='/CanMockup/moth.png'
                width={100}
                height={100}
                alt='Pantone Swatch'
            />
            <Image
                className={'py-3 '}
                src='/CanMockup/beetle.png'
                width={75}
                height={75}
                alt='Pantone Swatch'
            />
            <Image
                className={'py-3 '}
                src='/CanMockup/dragonfly.png'
                width={100}
                height={100}
                alt='Pantone Swatch'
            />
        </div>
        <h1 className={'text-3xl font-semibold'}>Ideation</h1>
        <p>Once I saw this Pantone swatch pop up on my Pinterest feed, I knew I must bring this into a design and give it life, even better 
            it was given an awesome name, beetle wing. Bringing the colour to its name, I imagined it with a beautiful three-horned rhinoceros stag beetle, vectorized 
            and simplified to make it less scary, it belonged on the front of one of the best beers to exist, a hazy IPA.</p>
        <div className={'flex flex-row gap-10'}>
            <Image
                className={'py-3 h-auto border-black border-4 '}
                src='/CanMockup/pantone01.png'
                width={200}
                height={100}
                alt='Pantone Swatch'
            />
            <BlurredImageWarning blurredImage="black-beetle-blurred.png" actualImage="black-beetle.png"/>
        </div>
        <h1 className={'text-3xl font-semibold'}>Results</h1>
        <p>In the end, we get this unique can with three different brews and the opportunity to add many more beautiful bugs with more awe-inspiring colours. For now, we will leave Hops 
            & Pigs with their three distinctive cans for their three most popular brews.</p>
        <CanSlideshow />
        </div>
        <div className={'flex flex-col items-center gap-10 m-16 mb-20 text-center'}>
            <h1 className={'font-bold text-3xl'}>Hope you enjoyed Hops & Pigs Brewery!</h1>
            <h2 className={'font-semibold text-3xl'}>Be sure to check out the rest of my projects</h2>
            <div className={'flex flex-row gap-12 items-center'}>
                <Link href="/Projects"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>Back to Projects</button></Link>
                <Link href="/About"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>Next Project</button></Link>
            </div>
      </div>
    </main>
    <Footer />
    </>
  )
}