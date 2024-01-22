import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'

export default function Extras() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | Extras</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center p-10 text-black`}>
      <div>
        <h1>Extras Page</h1>
      </div>
    </main>
    <Footer />
    </>
  )
}