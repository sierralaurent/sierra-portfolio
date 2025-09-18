import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import Link from 'next/link'

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
            alt='Profile Picture'
        />
        <div className={'flex flex-col gap-10 items-center m-20'}>
        <h1 className={'text-5xl'}>Hops & Pigs Brewery</h1>
        <h2>Fictional Beverage Comapny Can Mockup</h2>
        <h1 className={'text-3xl'}>Overview</h1>
        <p>can</p>
        <h1 className={'text-3xl'}>Ideation</h1>
        <h1 className={'text-3xl'}>Results</h1>
        </div>
    </main>
    <Footer />
    </>
  )
}