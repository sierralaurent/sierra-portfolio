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
        <div className="origin-top-left absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-CoolGray ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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


