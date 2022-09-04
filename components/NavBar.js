import Link from "next/link";

export default function Navabr() {
  return (
    <nav className="w-full bg-transparent ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#">
              <h2 className="text-2xl text-black font-bold">Logo</h2>
            </a>
          </div>
        </div>
        <div>
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-black hover:text-rose-900 hover:underline  underline-offset-4  focus:text-rose-900	focus:underline underline-offset-4 text-sm ">
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li className="text-black hover:text-rose-900 hover:underline  underline-offset-4  focus:text-rose-900	focus:underline underline-offset-4 text-sm ">
              <Link href="/about">
                <a>ABOUT</a>
              </Link>
            </li>
            <li className="text-black hover:text-rose-900 hover:underline  underline-offset-4  focus:text-rose-900	focus:underline underline-offset-4 text-sm ">
              <Link href="/">
                <a>PROJECTS</a>
              </Link>
            </li>
            <li className="text-black hover:text-rose-900 hover:underline  underline-offset-4  focus:text-rose-900	focus:underline underline-offset-4 text-sm ">
              <Link href="/">
                <a>PUBLICATIONS</a>
              </Link>
            </li>
            <li className="text-black hover:text-rose-900 hover:underline  underline-offset-4  focus:text-rose-900	focus:underline underline-offset-4 text-sm ">
              <Link href="/">
                <a>PARTNERS</a>
              </Link>
            </li>
            <li className="text-black hover:text-rose-900 hover:underline  underline-offset-4  focus:text-rose-900	focus:underline underline-offset-4 text-sm ">
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
