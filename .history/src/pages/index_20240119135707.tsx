import Image from 'next/image'
import { NavbarSimple } from '@/components/navBar'


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center`}>
      <button className={'bg-sky-100'}>
        morp
      </button>
      <h1 className={"text-red-700"}>what the hecking</h1>
    </main>
  )
}