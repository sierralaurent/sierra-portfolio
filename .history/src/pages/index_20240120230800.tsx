import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center p-10 text-black`}>
      <div className={'flex flex-row items-center gap-20'}>
      <Image
          className={'py-3'}
          src='/images/icons/profile_picture.jpg'
          width={400}
          height={400}
          alt='Profile Picture'
        />
        <div className={'flex flex-col gap-10'}>
          <h1 className={'text-5xl'}>Hi I'm Sierra.</h1>
          <h2 className={'text-3xl'}>Welcome to my Portfolio</h2>
          <h3 className={'text-xl'}>Delta, British Columbia</h3>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}