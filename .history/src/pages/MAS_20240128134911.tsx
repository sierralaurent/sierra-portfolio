import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import Link from 'next/link'

export default function PicTok() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | Malone Auto Spa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center text-black p-48`}>
      <div className={`flex flex-row items-center justify-between w-full py-8`}>
        <h1 className={'text-5xl font-bold'}>Malone Auto Spa</h1>
        <Link href="https://maloneautospa.com/"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>View Site</button></Link>
      </div>
      <div className={'py-8 text-xl'}>
            <p>Malone Auto Spa started with an empty warehouse unit that needed inspiration for everyday use, ideally around the image of automotive, as the employees were obsessed with all things cars.
                So Malone Auto Spa was born in a freshly renovated warehouse.
            </p>
      </div>
        <div className={'flex flx-row items-center gap-10 py-16'}>
            <div className={'text-right'}>
                <h1 className={'text-3xl font-Bold'}>My Role:</h1>
                <h3 className={'text-xl'}>UI/UX Designer + Brand Designer</h3>
            </div>
            <Image
                className={'py-3 hover:scale-110 transition-transform'}
                src='/images/MAS/MAS_Stacked.svg'
                width={200}
                height={200}
                alt='Malone Auto Spa Logo'
                unoptimized={true}
                />
            <div>
                <h1 className={'text-3xl font-Bold'}>Timeline:</h1>
                <h3 className={'text-xl'}>May. 2023 - Aug. 2023 (4 months)</h3>
            </div>
        </div>
        <div className={'flex flex-col gap-8'}>
            <h1 className={'text-3xl font-bold'}>Ideation</h1>
            <p className={'text-xl'}>Starting with an empty warehouse, Malone Auto Spa was born and given a name. The design of the logo came easily, as it was derived from the parent company's logo with added
            attributes like the bubble to resemble the auto spa. Luckily Malone Auto Spa has the assets of the parent company, such as a professional photographer, web developers, and marketing manager. </p>
            <div className={'flex -flex-row justify-between py-8'}>
                <Image
                    className={'py-3 height-auto'}
                    src='/images/MAS/MAS-Golf.jpg'
                    width={250}
                    height={100}
                    alt='Gesture Screen03'
                    unoptimized={true}
                    />
                <Image
                    className={'py-3 height-auto'}
                    src='/images/MAS/MAS-Bucket.jpg'
                    width={250}
                    height={100}
                    alt='Gesture Screen04'
                    unoptimized={true}
                    />
                <Image
                    className={'py-3 height-auto'}
                    src='/images/MAS/MAS-Nissan.jpg'
                    width={250}
                    height={100}
                    alt='gesture Screen05'
                    unoptimized={true}
                    />
            </div>
            <div className={'flex flex-col gap-10'}>
                <h1 className={'text-4xl font-bold'}>Challenges</h1>
                <p className={'text-xl'}>Some challenges arose, but nothing too serious that could not be resolved. Doing some research on other auto spa websites,
                    the user flow of others seemed to be lacking and overall had to much content and overwhelmed the viewer. So while designing that was priority number one,
                    creating clean navigation as well as keeping content to a minimum.</p>
            </div>
            <div className={'flex flex-col gap-5 py-5'}>
                    <h1 className={'text-3xl font-semibold'}>1. Understanding the Customer</h1>
                    <h2 className={'text-2xl'}>Resolved with a customer persona</h2>
                    <Image
                        className={'py-3 w-screen'}
                        src='/images/MAS/MAS-CustomerPersona.png'
                        width={2000}
                        height={400}
                        alt='User Persona'
                        unoptimized={true}
                    />
                    <h3 className={'text-xl'}>Customer Persona: A persona that has scenarios of a potential customer and how to suit their needs</h3>
                </div>
                <div className={'flex flex-col gap-5 py-5'}>
                    <h1 className={'text-3xl font-semibold'}>2. Establishing Brand Identity</h1>
                    <h2 className={'text-2xl'}>Resolved with Brand Guideline</h2>
                    <Image
                        className={'py-3 object-cover w-full h-full'}
                        src='/images/PicTok/PicTok-UserFlow.png'
                        width={2000}
                        height={400}
                        alt='User Persona'
                        unoptimized={true}
                    />
                    <h3 className={'text-xl'}>Brand Guidline: A document that establishes logo, typography and colours and how to use them</h3>
                </div>
            <div className={`flex flex-row items-center justify-between w-full py-8`}>
                <h1 className={'text-5xl font-bold'}>Results</h1>
                <Link href="https://pictok.vercel.app/"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald'}>View App</button></Link>
            </div>
            <div className={'flex flex-col'}>
                <p>Getting a wonderful, simple app that can bring the experience of photos to those who may not be familiar with it was a fun journey, with many lessons learned.
                    PicTok is a movement towards inclusivity, with the mission to provide a platform where every image tells a story meant for everyone.</p>
                <div className={'flex flex-row items-center justify-center py-10 tablet:flex-col'}>
                    <div className={'flex flex-row'}>
                    <Image
                        className={'p-3'}
                        src='/images/PicTok/PicTok Screens/Profile.png'
                        width={150}
                        height={150}
                        alt='Gesture Screen03'
                        unoptimized={true}
                        />
                    <Image
                        className={'p-3'}
                        src='/images/PicTok/PicTok Screens/FriendsList.png'
                        width={150}
                        height={100}
                        alt='Gesture Screen04'
                        unoptimized={true}
                        />
                    <Image
                        className={'p-3'}
                        src='/images/PicTok/PicTok Screens/Home.png'
                        width={150}
                        height={100}
                        alt='gesture Screen05'
                        unoptimized={true}
                        />
                        </div>
                        <div className={'flex flex-row justify-between tab'}>
                            <Image
                                className={'p-3'}
                                src='/images/PicTok/PicTok Screens/Camera-Complete.png'
                                width={150}
                                height={100}
                                alt='Gesture Screen03'
                                unoptimized={true}
                                />
                            <Image
                                className={'p-3'}
                                src='/images/PicTok/PicTok Screens/Camera-Send.png'
                                width={150}
                                height={100}
                                alt='Gesture Screen04'
                                unoptimized={true}
                                />
                        </div>
                </div>
            </div>
        </div>
        <div className={'flex flex-col items-center gap-10 my-28 text-center'}>
            <h1 className={'text-5xl font-semibold'}>Hope you enjoyed Malone Auto Spa!</h1>
            <h2 className={'text-3xl'}>Be sure to see the rest of my projects</h2>
            <div className={'flex flex-row gap-16'}>
            <Link href="/Projects"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>Back to Projects</button></Link>
            <Link href="/PicTok"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>Next Project</button></Link>
            </div>
        </div>

    </main>
    <Footer />
    </>
  )
}