import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import Link from 'next/link'

export default function PicTok() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | PIcTok</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center text-black`}>
      <div className={`flex flex-row items-center justify-between min-w-screen`}>
        <h1>PicTok</h1>
        <Link href="https://pictok.vercel.app/"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald'}>See Case Study</button></Link>
      </div>
      <div>
      <div>
            <p>This project for school challenged our teams to integrate artificial intelligence (AI)  into a web app that can help bring insight or benefits to under-represented or disadvantaged communities/societies.
            To bring value to the designated community of visually impaired individuals, the web app has many standards to meet, including but not limited to accessibility, inclusiveness, and uniqueness.
            </p>
        </div>
      </div>
        <Image
          className={'py-3 min-w-screen'}
          src='/images/Mock-Up PicTok-Long.png'
          width={1000}
          height={400}
          alt='Profile Picture'
        />
    </main>
    <Footer />
    </>
  )
}