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
        <div className={'flex flex-col items-center'}>
        <Image
            className={'py-8'}
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
        </div>
    </main>
    <Footer />
    </>
  )
}