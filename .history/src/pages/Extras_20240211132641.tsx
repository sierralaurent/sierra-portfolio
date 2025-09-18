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
    <main className={`flex min-h-screen flex-col gap-5 pt-32 items-center text-black`}>
      <h1 className={'text-5xl font-semibold'}>See my Designs here</h1>
      <h2 className={'text-3xl '}>Click the cards for more info</h2>
      <div className={' flex flex-col m-20 mx-48 max-w-5xl p-12 gap-10'}>
        <h1 className={'text-3xl font-bold'}>Business Cards</h1>
        <div className={'flex flex-row gap-10 tablet:flex-col'}>
            <PhotoFlip 
              imagePath='images/gallery/elgertControls-cards.png'
              writeUp='Business cards for a local electrical controls company to display important information for clients.'
            />
            <PhotoFlip
            imagePath='images/MAS/businessCard.png'
            writeUp='Business cards for a local automotive detail shop display basic contact information for the shop.'
            />
          </div>
          <h1 className={'text-3xl font-bold'}>Promotional Items</h1>
          <div className={'flex flex-row gap-10 tablet:flex-col'}>
            <PhotoFlip 
              imagePath='images/gallery/tz-pin-cards.png'
              writeUp='Promotional pins to hand out to customers at the local summer BBQ.'
            />
            <PhotoFlip
            imagePath='images/gallery/me-cards.png'
            writeUp='Promotional pins to hand out to customers at the local Electric Car show.'
            />
          </div>
      </div>
    </main>
    <Footer />
    </>
  )
}