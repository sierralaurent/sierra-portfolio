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
      <h1 className={'text-5xl font-semibold'}>See my designs here</h1>
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
          <h1 className={'text-3xl font-bold'}>Photoshop</h1>
          <div className={'flex flex-row gap-10 tablet:flex-col'}>
            <PhotoFlip 
              imagePath='images/gallery/charles-leclerc.png'
              writeUp='Poster made and designed in support of Charles LeClerc, Formula-1 driver for the 2023 season.'
            />
            <PhotoFlip
            imagePath='images/gallery/scary-movie.png'
            writeUp='Movie poster that incorporated 3 animals into one and mocked a scary movie screening.'
            />
          </div>
          <h1 className={'text-3xl font-bold'}>Illustrations/Drawings</h1>
          <div className={'flex flex-row gap-10 tablet:flex-col'}>
            <PhotoFlip 
              imagePath='images/gallery/smeg-drawing.png'
              writeUp='Realistic drawing done in Adobe Illustrator only using vector graphic methods to re-create a pink SMEG blender.'
            />
            <PhotoFlip
            imagePath='images/gallery/taco-drawing.png'
            writeUp='One of my first full-scale drawings that was done in Adobe Illustrator to re-create a snowy scene with an off-road truck.'
            />
          </div>
          <h1 className={'text-3xl font-bold'}>Extras</h1>
          <div className={'flex flex-row gap-10 tablet:flex-col'}>
            <PhotoFlip 
              imagePath='images/gallery/golf.jpg'
              writeUp='Who doesnt want to put stickers on their car? Created Milwaukee stickers to apply to my red car for a fun stunner for a car show.'
            />
          </div>
      </div>
    </main>
    <Footer />
    </>
  )
}