import Image from 'next/image'
import { NavBar } from '@/components/navBar'


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <button>Beep</button>
      <NavBar></NavBar>
    </main>
  )
}
