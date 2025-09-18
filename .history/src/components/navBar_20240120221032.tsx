import Image from 'next/image'


export default function NavBar() {
  return (
    <main className={`flex min-w-screen  justify-between p-5 bg-Emerald`}>
      <div className={'flex flex-row gap-x-4'}>
        <h1>Projects</h1>
        <h1>Extras</h1>
      </div>
      <div>
        <h1>Sierra Laurent</h1>
      </div>
      <div className={'flex flex-row gap-x-4'}>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
    </main>
  )
}