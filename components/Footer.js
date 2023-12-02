import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full p-5 bg-black flex flex-col items-center justify-center text-white rounded-t-lg mt-5">
      <h1 className="text-lg md:text-2xl font-bold">
        {"Let's get started on something great"}
      </h1>

      <p className="text-sm md:text-base my-2">
        {"Have an idea? Let's talk about it."}
      </p>
      <button className="bg-gray-800 my-4 text-white px-5 py-2 text-sm rounded-lg shadow-lg font-bold hover:bg-gray-700 transition duration-300 ease-in-out border-2 border-gray-600">
        Get Started
      </button>
      <div className=" bg-black w-full">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#!" className=" hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="hover:underline">
                    Brand Center
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
                Help center
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#!" className="hover:underline">
                    Discord Server
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#!" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="hover:underline">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-300 uppercase dark:text-white">
                Download
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="#!" className="hover:underline">
                    iOS
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="hover:underline">
                    Android
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="hover:underline">
                    Windows
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#!" className="hover:underline">
                    MacOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between px-2 my-1">
        <Link href="/">
          <Image src="/logo2.png" width={50} height={50} alt="logo" />
        </Link>

        <span className="text-xs md:text-sm my-2 text-gray-300">
          <p>Copyright © 2023</p>
          made by ❤ Ritesh
        </span>
      </div>
    </div>
  );
};

export default Footer;
