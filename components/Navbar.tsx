import Link from "next/link";

const Navbar = () => {
    return(
        <div className="grid-cols-4 flex flex-wrap bg-slate-400 pb-5 justify-center gap-x-10">
            <Link href={'/'}>
                <a className="flex text-black text-2xl">Home</a>
            </Link>
            <Link href={'/about'}>
                <a className="flex text-black text-2xl">About</a>
            </Link>
            <Link href={'/portfolio'}>
                <a className="flex text-black text-2xl">Portfolio</a>
            </Link>
            <Link href={'/resume'}>
                <a className="flex text-black text-2xl">Resume</a>
            </Link>
        </div>
    )
}

export default Navbar;