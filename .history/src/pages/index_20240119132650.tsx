import Image from 'next/image'
import { NavbarSimple } from '@/components/navBar'


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 bg-[#50d71e]`}>
      <NavbarSimple></NavbarSimple>
    </main>
  )
}
