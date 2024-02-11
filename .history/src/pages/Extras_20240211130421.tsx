import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import PhotoFlip from '@/components/photoWriteUp'

export default function Extras() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | Gallery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center p-10 text-black`}>
        <h1>Gallery</h1>
            <PhotoFlip 
              imagePath='images/gallery/elgertControls-cards.png'
              writeUp='Thi is blagh blagh'
            />
    </main>
    <Footer />
    </>
  )
}