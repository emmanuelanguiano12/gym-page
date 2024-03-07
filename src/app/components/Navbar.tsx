import Image from "next/image";
import imagen from "../../../public/Black.png"

const navItems = [
  { path: "#", text: "Home" },
  { path: "#about", text: "About us" },
  { path: "#team", text: "Trainers" },
  { path: "#price", text: "Pricing Plans" },
];

export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-black">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <Image src={imagen} width={90} height={90} alt="Gym" />
        <div className="flex flex-1"></div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-black">
                {
                    navItems.map(navitem => (
                        <li>
                            <a
                                key={navitem.path}
                                href={navitem.path}
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                aria-current="page"
                            >
                                {
                                    navitem.text
                                }
                            </a>
                        </li>
                    ))
                }
          </ul>
        </div>
      </div>
    </nav>
  );
};
