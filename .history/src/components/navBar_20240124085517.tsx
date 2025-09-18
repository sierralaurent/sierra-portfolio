import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from '@react-hook/media-query';

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link href={href}>
      <span className="hover:text-Sage">{label}</span>
    </Link>
  );
};

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 430px)');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <main className="flex min-w-screen justify-between p-6 bg-Emerald items-center text-xl">
        <div className="flex flex-row gap-x-5">
          <NavLink href="/Projects" label="Projects" />
          <NavLink href="/Extras" label="Extras" />
        </div>
        <Link href="/">
          <div>
            <Image
              className="py-3"
              src="/images/icons/White/LogoMark White@300x.png"
              width={200}
              height={50}
              alt="logomark"
            />
          </div>
        </Link>
        {isSmallScreen ? (
          <div className="cursor-pointer" onClick={toggleMenu}>
            <Image
              className="py-3"
              src="/icons/White/hamburger-Menu.png" // Add your hamburger icon
              width={30}
              height={30}
              alt="hamburger-icon"
            />
          </div>
        ) : (
          <div className="flex flex-row gap-x-5">
            <NavLink href="/About" label="About" />
            <NavLink href="/Contact" label="Contact" />
          </div>
        )}
      </main>

      {showMenu && isSmallScreen && (
        <div className="flex flex-col gap-y-3">
          <NavLink href="/Projects" label="Projects" />
          <NavLink href="/Extras" label="Extras" />
          <NavLink href="/About" label="About" />
          <NavLink href="/Contact" label="Contact" />
        </div>
      )}
    </>
  );
}

