import { useState, useEffect, useRef } from 'react';
import Image from 'next/image'

interface DropdownProps {
    items: { label: string; link: string }[];
  }

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeDropdown);

    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={toggleDropdown}>
      <Image
            className={'py-3'}
            src='/images/icons/White/Hamburger-Menu.png'
            width={50}
            height={50}
            alt='Hamburger'
          />
      </div>

      {isOpen && (
        <div className="origin-top-left absolute right-0 w-fit rounded-md shadow-lg bg-White ring-1 ring-black ring-opacity-5">
          <div className="py-1 font-bold text-right hover:text-Sage">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block px-4 py-2 text-xl"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

  
  export default Dropdown;


