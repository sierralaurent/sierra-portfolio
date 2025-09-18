import Image from 'next/image'
import Link from 'next/link'


export default function Footer() {
  return (
    <main className={`flex min-w-screen justify-between p-8 bg-Emerald items-center text-xl`}>
      <div>
        <h1>Say Hi!</h1>
        <h2>Linked In</h2>
        <h2>Gmail</h2>
      </div>
      <div>
      <Image
          className={'py-3'}
          src='/images/icons/Logo white@300x.png'
          width={200}
          height={50}
          alt='logomark'
        />
      </div>
      <div>
        <h1>See More</h1>
        <h2>Instagram</h2>
        <h2>GitHub</h2>
      </div>
    </main>
  )
}