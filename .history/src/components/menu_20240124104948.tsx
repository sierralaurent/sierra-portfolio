import Image from 'next/image'
import Link from 'next/link'


export default function HamMenu() {
  return (
    <>
        <Image
            className={'py-3'}
            src='/images/icons/White/Hamburger-Menu.png'
            width={50}
            height={50}
            alt='Hamburger'
          />
        <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
        </div>
        </div>
    </>
  )
}
