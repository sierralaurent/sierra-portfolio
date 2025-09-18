import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'

export default function Projects() {
  return (
    <>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center p-10 text-black`}>
      <div>
        <h1>Hi I'm Sierra :)</h1>
      </div>
    </main>
    <Footer />
    </>
  )
}