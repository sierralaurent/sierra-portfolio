import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center p-10`}>
      <div>
        <h1>Hi I'm Sierra :)</h1>
      </div>
    </main>
    <Footer />
    </>
  )
}