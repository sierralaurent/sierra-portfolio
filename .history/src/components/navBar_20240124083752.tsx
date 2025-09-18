import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <main className={`flex min-w-screen justify-between p-6 bg-Emerald items-center text-xl`}>
        <div className={'flex flex-row gap-x-5'}>
          <Link href="/Projects"><h1 className={'hover:text-Sage'}>Projects</h1></Link>
          <Link href="/Extras"><h1 className={'hover:text-Sage'}>Extras</h1></Link>
        </div>
        <Link href="/">
          <div>
            <Image
              className={'py-3'}
              src='/images/icons/White/LogoMark White@300x.png'
              width={200}
              height={50}
              alt='logomark'
            />
          </div>
        </Link>
        { /* Conditional rendering for hamburger menu */}
        {window.innerWidth <= 430 ? (
          <div className={'cursor-pointer'} onClick={toggleMenu}>
            <Image
              className={'py-3'}
              src='/icons/White/Hmaburger-Menu.png' // Add your hamburger icon
              width={30}
              height={30}
              alt='hamburger-icon'
            />
          </div>
        ) : (
          <div className={'flex flex-row gap-x-5'}>
            <Link href="/About"><h1 className={'hover:text-Sage'}>About</h1></Link>
            <Link href="/Contact"><h1 className={'hover:text-Sage'}>Contact</h1></Link>
          </div>
        )}
      </main>

      { /* Hamburger menu content */}
      {showMenu && window.innerWidth <= 430 && (
        <div className={'flex flex-col gap-y-3'}>
          <Link href="/Projects"><h1 className={'hover:text-Sage'}>Projects</h1></Link>
          <Link href="/Extras"><h1 className={'hover:text-Sage'}>Extras</h1></Link>
          <Link href="/About"><h1 className={'hover:text-Sage'}>About</h1></Link>
          <Link href="/Contact"><h1 className={'hover:text-Sage'}>Contact</h1></Link>
        </div>
      )}
    </>
  );
}