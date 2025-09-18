import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  return (
    <Link href={href}>
      <a className="hover:text-Sage">{label}</a>
    </Link>
  );
};

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();

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
        {window.innerWidth <= 430 ? (
          <div className="cursor-pointer" onClick={toggleMenu}>
            <Image
              className="py-3"
              src='/icons/White/Hmaburger-Menu.png' // Add your hamburger icon
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

      {showMenu && window.innerWidth <= 430 && (
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