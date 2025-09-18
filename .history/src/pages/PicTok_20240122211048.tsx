import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import Link from 'next/link'

export default function PicTok() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | PicTok</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center text-black p-20`}>
      <div className={`flex flex-row items-center justify-between w-full py-8`}>
        <h1 className={'text-5xl'}>PicTok</h1>
        <Link href="https://pictok.vercel.app/"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald'}>See Case Study</button></Link>
      </div>
      <div className={'py-8'}>
            <p>This project for school challenged our teams to integrate artificial intelligence (AI)  into a web app that can help bring insight or benefits to under-represented or disadvantaged communities/societies.
            To bring value to the designated community of visually impaired individuals, the web app has many standards to meet, including but not limited to accessibility, inclusiveness, and uniqueness.
            </p>
      </div>
        <Image
          className={'py-3 w-screen'}
          src='/images/Mock-Up PicTok-Long.png'
          width={2000}
          height={400}
          alt='Profile Picture'
        />
        <div className={'flex flx-row items-center gap-10'}>
            <div className={'text-right'}>
                <h1 className={'text-3xl'}>My Role:</h1>
                <h3 className={'text-xl'}>UI/UX Designer + Accessibility Researcher</h3>
            </div>
            <Image
                className={'py-3'}
                src='/images/PicTokLogo.png'
                width={50}
                height={50}
                alt='Profile Picture'
                />
            <div>
                <h1>Timeline:</h1>
                <h3>Sep. 2023 - Dec. 2023 (3 months)</h3>
            </div>
        </div>
    </main>
    <Footer />
    </>
  )
}