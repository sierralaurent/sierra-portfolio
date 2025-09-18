import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, Variants } from "framer-motion";

interface DropdownProps {
  items: { label: string; link: string }[];
}

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      <motion.div
        onClick={toggleDropdown}
        whileTap={{ scale: 0.97 }}
        className="menu"
      >
        <Image
          className={'py-3 width-auto height-auto'}
          src="/images/icons/White/Hamburger-Menu.png"
          width={50}
          height={50}
          alt="Hamburger"
        />
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
        </motion.div>
      </motion.div>

      {isOpen && (
        <motion.div
          className="origin-top-right absolute left-0 w-fit rounded-md shadow-lg bg-Sage text-white hover:bg-slate"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { clipPath: "inset(0% 0% 0% 0% round 10px)" },
            closed: { clipPath: "inset(10% 50% 90% 50% round 10px)" }
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.div
            className="py-1 font-bold text-left"
            variants={{
              open: { opacity: 1 },
              closed: { opacity: 0 }
            }}
          >
            {items.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="block px-4 py-2 text-xl text-gray-700 bg-White"
                variants={itemVariants}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;


