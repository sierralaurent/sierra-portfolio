import Image from 'next/image'
import Link from 'next/link'
import Dropdown from '@/components/menu'


export default function NavBar() {

const optionsWithLinks = [
  { label: 'Projects', link: '/Projects' },
  { label: 'Extras', link: '/Extras' },
  { label: 'About', link: '/About' },
  { label: 'Contact', link: '/Contact' }
];

  return (
    <>
    <main className={`flex min-w-screen justify-between p-6 bg-Sage items-center text-xl`}>
        <h2>Hey there! This site is still under construction!</h2>
        <p>Please enjoy what I have up so far, but know there is more to come.</p>
    </main>
    </>
  )
}

