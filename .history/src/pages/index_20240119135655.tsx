import Image from 'next/image'
import { NavbarSimple } from '@/components/navBar'


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <button className={'bg-sky-100'}>
        morp
      </button>
      <h1 className={"text-red-700"}>what the hecking</h1>
    </main>
  )
}
