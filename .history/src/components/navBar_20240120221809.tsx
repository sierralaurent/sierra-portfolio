import Image from 'next/image'


export default function NavBar() {
  return (
    <main className={`flex min-w-screen  justify-between p-8 bg-Emerald`}>
      <div className={'flex flex-row gap-x-4'}>
        <h1>Projects</h1>
        <h1>Extras</h1>
      </div>
      <div>
      <Image
          className={'py-3'}
          src='/images/icons/LogoMark White@300x.png'
          width={200}
          height={50}
          alt='logomark'
        />
      </div>
      <div className={'flex flex-row gap-x-4'}>
        <h1>About</h1>
        <h1>Contact</h1>
      </div>
    </main>
  )
}