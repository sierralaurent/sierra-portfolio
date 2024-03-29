import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import CanSlideshow from '@/components/canSlideshow'

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
        <div className={'flex flex-col gap-10 items-center m-20'}>
        <h1 className={'text-5xl'}>Hops & Pigs Brewery</h1>
        <h2>Fictional Beverage Comapny Can Mockup</h2>
        <h1 className={'text-3xl'}>Overview</h1>
        <p>can</p>
        <h1 className={'text-3xl'}>Ideation</h1>
        <p>can can</p>
        <Image
            className={'py-3'}
            src='/CanMockup/pantone01.png'
            width={300}
            height={300}
            alt='Pantone Swatch'
        />
        <h1 className={'text-3xl'}>Results</h1>
        <p>can can can</p>
        <CanSlideshow />
        </div>
    </main>
    <Footer />
    </>
  )
}