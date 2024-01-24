import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useEffect } from "react";



    interface NavigationProps {}

    const NavBar: React.FC<NavigationProps> = () => {
    const hamburgerRef = useRef<HTMLButtonElement>(null);
    const navigationRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
      const isClickInside =
        navigationRef.current?.contains(event.target as Node) ||
        hamburgerRef.current?.contains(event.target as Node);

      if (!isClickInside) {
        navigationRef.current?.classList.remove("active");
        hamburgerRef.current?.classList.remove("hidden");
      }
    };

    const handleHamburgerClick = () => {
      navigationRef.current?.classList.add("active");
      hamburgerRef.current?.classList.add("hidden");
    };

    useEffect(() => {
      document.addEventListener("click", handleClickOutside);

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, []);

  return (
    <>
    <main className={`flex min-w-screen justify-between p-6 bg-Emerald items-center text-xl `}>
      <div className={'flex flex-row gap-x-5 tablet:hidden mobile:hidden tablet:justify-center'}>
        <Link href="/Projects"><h1 className={'hover:text-Sage'}>Projects</h1></Link>
        <Link href="/Extras"><h1 className={'hover:text-Sage'}>Extras</h1></Link>
      </div>
      <Link href="/"><div>
      <Image
          className={'py-3 '}
          src='/images/icons/White/LogoMark White@300x.png'
          width={200}
          height={50}
          alt='logomark'
        />
      </div></Link>
      <div className={'flex flex-row gap-x-5 tablet:hidden mobile:hidden'}>
        <Link href="/About"><h1 className={'hover:text-Sage'}>About</h1></Link>
        <Link href="/Contact"><h1 className={'hover:text-Sage'}>Contact</h1></Link>
      </div>
      <div className="navigation" ref={navigationRef}>
      <div className={'desktop:hidden'}>
        <Image
            className={'py-3 '}
            src='/images/icons/White/Hamburger-Menu.png'
            width={50}
            height={50}
            alt='Hamburger'
            onClick={handleHamburgerClick}
          />
      </div>
      </div>
    </main>
    </>
  )
}

export default NavBar;

