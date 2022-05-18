import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="w-full mb-10">
            <div className="flex justify-between">
                <div className="font-bold text-xl">WillyCast</div>
                <div className="grid grid-cols-2 gap-5">
                    <Link href="/">
                        <a className="bg-yellow-400 p-5 border-b-[3.5px] font-bold border-x-[3.5px] mx-auto border-black">Login</a>
                    </Link>
                    <Link href="/">
                        <a className="bg-yellow-400 p-5 border-b-[3.5px] font-bold border-x-[3.5px] mx-auto border-black">Sign Up</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}