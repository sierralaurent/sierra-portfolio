import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TimelineMax, TweenMax, Power1, Power2 } from 'gsap';

// Utility functions

interface Utils {
  Android(): RegExpMatchArray | null;
  BlackBerry(): RegExpMatchArray | null;
  iOS(): RegExpMatchArray | null;
  Opera(): RegExpMatchArray | null;
  Windows(): RegExpMatchArray | null;
  any(): RegExpMatchArray | null;
  randomInRange(min: number, max: number): number;
}

const Utils: Utils = {
  Android() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any() {
    return (
      Utils.Android() || Utils.BlackBerry() || Utils.iOS() || Utils.Opera() || Utils.Windows()
    );
  },
  randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

// Component

interface BackgroundProps {}

const Background: React.FC<BackgroundProps> = () => {
  useEffect(() => {
    const setObj = () => {
      // ... (unchanged)
    };

    const border = () => {
      // ... (unchanged)
    };

    const romboInit = () => {
      // ... (unchanged)
    };

    const romboAnimation = () => {
      // ... (unchanged)
    };

    const init = () => {
      setObj();
      romboInit();

      // MASTER SCENES

      const master = new TimelineMax({
        delay: 0.4,
      });

      master.add(border(), 'scene1').add(romboAnimation(), '-=1.8', 'scene2');
      master.timeScale(timer);

      const go = (el: HTMLAnchorElement) => {
        master.play();
        master.timeScale(timer);
        el.textContent = 'REVERSE';
      };

      const rewards = (el: HTMLAnchorElement) => {
        master.reverse();
        master.timeScale(timer * 5);
        el.textContent = 'PLAY';
      };

      const control = document.getElementById('control') as HTMLAnchorElement;

      control.onclick = () => {
        master.reversed() ? go(control) : rewards(control);
        return false;
      };
    };

    window.onload = init;
  }, []);

  return (
    <>
      <main className="Main" role="main">
        <a id="control" href="#">
          REVERSE
        </a>
        <div id="borderBlack" className="border">
          <div className="border-inner"></div>
          <div className="border-inner"></div>
          <div className="border-inner"></div>
          <div className="border-inner"></div>
        </div>
        <div id="wrapper"></div>
      </main>
    </>
  );
};

export default Background;