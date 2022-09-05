import Link from "next/link";

export default function Navabr() {
  return (
    <nav className="w-full fixed  bg-transparent left-0 top-0 ease-in duration-100 mx-auto z-10">
      <div className="hidden  justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        {/* Logo */}
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="#">
            <h2 className="text-2xl text-white font-bold">Logo</h2>
          </a>
        </div>
        {/* Links */}
        <div>
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-white hover:text-yellow-200	 hover:underline   focus:text-black	focus:underline text-sm ">
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li className="text-white hover:text-yellow-200	 hover:underline   focus:text-black	focus:underline text-sm ">
              <Link href="/about">
                <a>ABOUT</a>
              </Link>
            </li>
            <li className="text-white hover:text-yellow-200 hover:underline   focus:text-black	focus:underline text-sm ">
              <Link href="/">
                <a>PROJECTS</a>
              </Link>
            </li>
            <li className="text-white hover:text-yellow-200 hover:underline   focus:text-black	focus:underline text-sm ">
              <Link href="/">
                <a>PUBLICATIONS</a>
              </Link>
            </li>
            <li className="text-white hover:text-yellow-200 hover:underline   focus:text-black	focus:underline text-sm ">
              <Link href="/">
                <a>PARTNERS</a>
              </Link>
            </li>
            <li className="text-white hover:text-yellow-200 hover:underline   focus:text-black	focus:underline text-sm ">
              <Link href="/">
                <a>CONTACT US</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
