import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'

export default function Contact() {
  return (
    <>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center p-10 text-black`}>
      <div>
        <h1>Contact Page</h1>
      </div>
    </main>
    <Footer />
    </>
  )
}