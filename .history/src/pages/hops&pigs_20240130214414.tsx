import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
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
        <div className={'flex flex-col gap-10 items-center m-20 mx-40'}>
            <div className={'flex flex-col gap-5'}>
                <h1 className={'text-5xl font-bold'}>Hops & Pigs Brewery</h1>
                <h2 className={'text-2xl'}>Fictional Beverage Comapny Can Mockup</h2>
            </div>
        <h1 className={'text-3xl font-semibold'}>Overview</h1>
        <p>A fictional craft beer brewery imagined by myself is based out of Vancouver, BC, Hops & Pigs 
            decided to stand out in the never-ending craft beer aisle and put something different on the 
            front of their cans, BUGS. It is often seen as a design never-do, but Hops & Pig’s wanted to try it, 
            as they knew their customers loved trying every different beer they could put out. They wanted to stay 
            true to their colours of pink and white but were open to venturing out to more colours.</p>
        <h1 className={'text-3xl font-semibold'}>Ideation</h1>
        <p>Once I saw this Pantone swatch pop up on my Pinterest feed, I knew I must bring this into a design and give it life, even better 
            it was given an awesome name, beetle wing. Bringing the colour to its name, I imagined it with a beautiful three-horned rhinoceros stag beetle, vectorized 
            and simplified to make it less scary, it belonged on the front of one of the best beers to exist, a hazy IPA.</p>
        <div className={'flex flex-row gap-20'}>
            <Image
                className={'py-3 border-black border-4 '}
                src='/CanMockup/pantone01.png'
                width={200}
                height={200}
                alt='Pantone Swatch'
            />
            <BlurredImageWarning blurredImage="blurred_image.jpg" actualImage="actual_image.jpg"/>
        </div>
        <h1 className={'text-3xl font-semibold'}>Results</h1>
        <p>can can can</p>
        <CanSlideshow />
        </div>
    </main>
    <Footer />
    </>
  )
}