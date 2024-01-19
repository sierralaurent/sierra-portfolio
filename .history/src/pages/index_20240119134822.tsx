import Image from 'next/image'
import { NavbarSimple } from '@/components/navBar'


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 bg-sky-100`}>
      <NavbarSimple></NavbarSimple>
      <button className={'bg-sky-100'}>
        morp
      </button>
      <h1>what the hecking</h1>
    </main>
  )
}
