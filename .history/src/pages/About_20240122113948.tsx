import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'

export default function About() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center p-10 text-black`}>
      <div>
        <h1>About Page</h1>
      </div>
    </main>
    <Footer />
    </>
  )
}