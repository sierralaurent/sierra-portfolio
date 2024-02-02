import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import Link from 'next/link'
import CanSlideshow from '@/components/canSlideshow'
import TzSlideshow from '@/components/tzSlideshow'

export default function TuneZilla() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | TuneZilla</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center text-black`}>
        <Image
            className={'py-8 hover:scale-110 transition-transform'}
            src='https://media.giphy.com/media/3wFRNIHYWEhhaWLXJn/giphy.gif'
            width={200}
            height={200}
            alt='Tunezilla Logo Giff'
        />
        <Image
            className={''}
            src='https://media.giphy.com/media/9ZYA33P9sWFa9UKkDL/giphy.gif'
            width={400}
            height={400}
            alt='Audi S3 Gif'
        />
        <div className={'flex flex-col max-w-5xl p-12 gap-10 items-center m-20 mx-48'}>
            <div className={'flex flex-col items-center gap-5'}>
                <h1 className={'text-5xl font-bold'}>TuneZilla</h1>
                <h2 className={'text-2xl'}>Social Media GIFs</h2>
                <Link href="https://giphy.com/tune_zilla"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>See GIPHY</button></Link>
            </div>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Summary</h1>
        </div>
        <p className={'text-lg'}>TuneZilla Software company is a company that sells to those who are looking to get more out of the European vehicle, they alter the engine's main computer to get more power out of the engine. 
            Tunezilla is always looking for ways to grow and expand its audience on social media, so the idea of creating GIFs or stickers that the media team and followers can use on social media was spat around. GIPHY is an amazing 
            platform for creating and uploading GIFs for usage. </p>
        <div className={'flex flex-row gap-20 tablet:flex-col tablet:gap-10 items-center'}>
            <Image
                className={'py-3 '}
                src='https://media.giphy.com/media/OtspVtO0cTbKIIRdcF/giphy.gif'
                width={150}
                height={150}
                alt='Pantone Swatch'
            />
            <Image
                className={'py-3 '}
                src='https://media.giphy.com/media/YJbxvmbTBbYZuG98a1/giphy.gif'
                width={150}
                height={150}
                alt='Pantone Swatch'
            />
            <Image
                className={'py-3 '}
                src='https://media.giphy.com/media/qANVpJPOGsYvVhum5I/giphy.gif'
                width={150}
                height={150}
                alt='Pantone Swatch'
            />
        </div>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Ideation</h1>
        </div>
        <p className={'text-lg'}>TuneZilla Software has a mascot they call the toon-zilla, which is a small, blue dinosaur that wears a white racing helmet. Incorporating the dino into the GIFS was a must, as customers receive a little foam version with their orders, so creating that consistency is vital. 
            In addition, incorporating the iconic TuneZilla 500-HorsePower S3 in their would be great as some followers often follow TuneZilla just for that car. It has a unique wrapped design on it well, allowing it to stand out and be easily identified.</p>
        <div className={'flex flex-row gap-10 tablet:flex-col tablet:gap-10 items-center'}>
            <Image
                className={'shadow-2xl'}
                src='/images/tunezilla/tz-squish.jpg'
                width={250}
                height={200}
                alt='Tunezilla squishie'
            />
            <Image
                className={'shadow-2xl'}
                src='/images/tunezilla/tz-s3.jpg'
                width={250}
                height={200}
                alt='Tunezilla audi'
            />
            
        </div>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Results</h1>
        </div>
        <p className={'text-lg'}>With some practice in Adobe After Effects, Illustrator and GIPHY, we got some great GIFs that customers often use on their Instagram stories when posting how fast their freshly tuned car is! Having the logo, wordmark and more is also great for the social media team to use to create the visual association on the post, with the company. </p>
        <TzSlideshow />
        </div>
        <div className={'flex flex-col items-center gap-10 m-16 mb-20 text-center'}>
            <h1 className={'font-bold text-3xl'}>Hope you enjoyed TuneZilla GIFs!</h1>
            <h2 className={'font-semibold text-3xl'}>Be sure to check out the rest of my projects</h2>
            <div className={'flex flex-row gap-12 items-center'}>
                <Link href="/Projects"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>Back to Projects</button></Link>
                <Link href="/PicTok"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>Next Project</button></Link>
            </div>
      </div>
    </main>
    <Footer />
    </>
  )
}