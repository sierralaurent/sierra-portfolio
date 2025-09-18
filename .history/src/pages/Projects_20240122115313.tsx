import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'

export default function Projects() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | Projects</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center p-10 text-black`}>
      <div className={'flex flex-col items-center m-10 gap-10'}>
        <h1 className={'text-5xl'}>See my big projects here</h1>
        <h3 className={'text-2xl'}>As well as some smaller projects on the 'extras' page</h3>
      </div>
      <div className={'flex flex-row items-center gap-20'}>
      <Image
          className={'py-3'}
          src='/images/icons/profile_picture.jpg'
          width={400}
          height={400}
          alt='Profile Picture'
        />
        <div className={'flex flex-col gap-10'}>
          <h1 className={'text-5xl'}>Hi, I'm Sierra.</h1>
          <h2 className={'text-3xl'}>Welcome to my Portfolio</h2>
          <div className={'flex flex-row items-center gap-5'}>
            <h3 className={'text-xl'}>Delta, British Columbia</h3>
          </div>
          
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}