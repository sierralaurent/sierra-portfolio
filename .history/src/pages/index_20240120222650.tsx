import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center p-10`}>
      
      <button className={'bg-sky-100'}>
        morp
      </button>
      <h1 className={"text-red-700"}>what the hecking</h1>
    </main>
    <Footer />
    </>
  )
}
