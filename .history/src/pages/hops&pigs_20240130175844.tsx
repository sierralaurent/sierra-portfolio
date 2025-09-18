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
    <main className={`flex min-h-screen flex-col items-center text-black p-48`}>
        <Image
            className={'py-3 w-full'}
            src='/CanMockup/CanMockUpALL.png'
            width={600}
            height={400}
            priority={true}
            alt='Profile Picture'
        />
    </main>
    <Footer />
    </>
  )
}