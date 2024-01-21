import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center p-10 text-black`}>
      <div>
      <Image
          className={'py-3'}
          src='/images/icons/profile_picture.png'
          width={400}
          height={400}
          alt='logomark'
        />
        <div>
          <h1>Hi I'm Sierra.</h1>
          <h2>Welcome to my Portfolio</h2>
          <h3>Delta, British Columbia</h3>
        </div>
      </div>
    </main>
    <Footer />
    </>
  )
}
