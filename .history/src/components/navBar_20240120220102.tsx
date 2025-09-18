import Image from 'next/image'


export default function NavBar() {
  return (
    <main className={`flex min-w-screen flex-row items-center justify-content-center p-10 bg-Emerald`}>
      <div>
        <h1>Projects</h1>
        <h1>Extras</h1>
      </div>
      <div>
        <h1>Sierra Laurent</h1>
      </div>
      <div>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
    </main>
  )
}