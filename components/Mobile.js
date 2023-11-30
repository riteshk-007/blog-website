import Link from "next/link";
import { MdClose } from "react-icons/md";
const Mobile = ({ setShow }) => {
  return (
    <div className="flex items-start justify-start w-full h-full p-2 flex-col z-50">
      <span className=" text-white w-full flex items-center justify-end p-2">
        <MdClose onClick={() => setShow(false)} fontSize={20} />
      </span>
      <div className="w-full  h-3/4 flex items-center justify-evenly flex-col text-white">
        <ul>
          <li className="block px-2 text-xl font-bold tracking-widest my-3">
            <Link href="/" onClick={() => setShow(false)}>
              Home
            </Link>
          </li>
          <li className="block px-2 text-xl font-bold tracking-widest my-3">
            <Link href="/about" onClick={() => setShow(false)}>
              Blog
            </Link>
          </li>
          <li className="block px-2 text-xl font-bold tracking-widest my-3">
            <Link href="/contact" onClick={() => setShow(false)}>
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full h-1/4  text-white flex items-center justify-center">
        <ul>
          <li className="inline-block px-2 text-sm font-semibold mx-2">
            <Link href="/login" onClick={() => setShow(false)}>
              Login
            </Link>
          </li>
          <li className="inline-block bg-black text-white p-2 rounded-md shadow text-sm font-semibold">
            <Link href="/register" onClick={() => setShow(false)}>
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mobile;
