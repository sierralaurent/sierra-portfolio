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
        <div>
          <h1 className={'text-4xl'}>Hi I'm Sierra.</h1>
          <h2>Welcome to my Portfolio</h2>
          <h3>Delta, British Columbia</h3>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}
