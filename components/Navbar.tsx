import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineWbSunny } from 'react-icons/md';
import { RiMoonLine } from 'react-icons/ri';

const Navbar = () => {

    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
      if (isDark) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }, [isDark]);

    const handleTheme = () => {
        setIsDark(!isDark);
    }
    
    const styleDark = { color: "white", fontSize: "1.5em" }
    const styleLight = { color: "black", fontSize: "1.5em" }

    return(
        <div className="grid-cols-4 flex pb-5 w-auto md:w-full justify-between ml-2 mr-2 md:m-0 md:justify-center md:gap-x-10 pt-5" id="navbar">
            <Link href={'/'}>
                <a className="flex text-2xl ml-2 md:m-0 text-black dark:text-white hover:font-semibold hover:underline hover:underline-offset-8 hover:decoration-blue-300">
                    About
                </a>
            </Link>
            <Link href={'/portfolio'}>
                <a className="flex text-2xl text-black dark:text-white hover:font-semibold hover:underline hover:underline-offset-8 hover:decoration-blue-300">
                    Portfolio
                    </a>
            </Link>
            <Link href={'/resume'}>
                <a className="flex text-2xl mr-2 md:m-0 text-black dark:text-white hover:font-semibold hover:underline hover:underline-offset-8 hover:decoration-blue-300">
                    Resume
                    </a>
            </Link>
            <button className="flex-row place-self-center justify-end dark:hidden" id="toggleDark" onClick={handleTheme}>
                <RiMoonLine size={20} style={styleLight} />
            </button>
            <button className="flex-row place-self-center justify-end hidden dark:inline-block" onClick={handleTheme}>
                <MdOutlineWbSunny size={20} style={styleDark} />
            </button>
        </div>
    )
}

export default Navbar;