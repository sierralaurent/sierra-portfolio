import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import PhotoFlip from '@/components/photoFlip'

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
        <Image
                className={'shadow-2xl'}
                src='/images/Gallery/elgertControls-cards.png'
                width={400}
                height={400}
                alt='Ideation of PicTok'
            />
            <PhotoFlip 
              imagePath='images/gallery/elgertControls-cards.png'
              writeUp='Thi is blagh blagh'
            />
    </main>
    <Footer />
    </>
  )
}