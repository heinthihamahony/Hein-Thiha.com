import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function SmNavbar() {
  return (
    <>
      <div className=" text-white md:hidden">
        <div className=" flex items-center font-semibold justify-between">
          <a className="text-3xl font-mono" href="/">
            Hein<samp className="text-[#34d399]">.</samp>
          </a>
          <Button
            className="rounded-full bg-[#34d399] text-white text-lg py-2 px-4"
            color="success"
            variant="shadow"
          >
            Hire me
          </Button>
        </div>

        <div className=" flex gap-3 items-center font-semibold justify-between mt-5 py-1 border-y border-y-[#233e35]">
          <Link
            className="hover:bg-[#233e35] p-3 active:underline underline-offset-4 decoration-2 decoration-[#34d399] "
            href="/"
          >
            <svg
              className=" w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(52,211,153,1)"
            >
              <path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z"></path>
            </svg>
          </Link>

          <Link
            className="hover:bg-[#233e35] p-3 active:underline underline-offset-4 decoration-2 decoration-[#34d399]"
            href="/resume"
          >
            <svg
              className=" w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(52,211,153,1)"
            >
              <path d="M3 6H21V18H3V6ZM2 4C1.44772 4 1 4.44772 1 5V19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19V5C23 4.44772 22.5523 4 22 4H2ZM13 8H19V10H13V8ZM18 12H13V14H18V12ZM10.5 10C10.5 11.3807 9.38071 12.5 8 12.5C6.61929 12.5 5.5 11.3807 5.5 10C5.5 8.61929 6.61929 7.5 8 7.5C9.38071 7.5 10.5 8.61929 10.5 10ZM8 13.5C6.067 13.5 4.5 15.067 4.5 17H11.5C11.5 15.067 9.933 13.5 8 13.5Z"></path>
            </svg>
          </Link>
          <Link
            className="hover:bg-[#233e35] p-3 active:underline underline-offset-4 decoration-2 decoration-[#34d399]"
            href="/work"
          >
            <svg
              className=" w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(52,211,153,1)"
            >
              <path d="M8 4C8 5.10457 7.10457 6 6 6 4.89543 6 4 5.10457 4 4 4 2.89543 4.89543 2 6 2 7.10457 2 8 2.89543 8 4ZM5 16V22H3V10C3 8.34315 4.34315 7 6 7 6.82059 7 7.56423 7.32946 8.10585 7.86333L10.4803 10.1057 12.7931 7.79289 14.2073 9.20711 10.5201 12.8943 9 11.4587V22H7V16H5ZM6 9C5.44772 9 5 9.44772 5 10V14H7V10C7 9.44772 6.55228 9 6 9ZM19 5H10V3H20C20.5523 3 21 3.44772 21 4V15C21 15.5523 20.5523 16 20 16H16.5758L19.3993 22H17.1889L14.3654 16H10V14H19V5Z"></path>
            </svg>
          </Link>
          <Link
            className="hover:bg-[#233e35] p-3 active:underline underline-offset-4 decoration-2 decoration-[#34d399]"
            href="/hein"
          >
            <svg
              className=" w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(52,211,153,1)"
            >
              <path d="M21 8C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8H21ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path>
            </svg>
          </Link>
          <Link
            className="hover:bg-[#233e35] p-3 active:underline underline-offset-4 decoration-2 decoration-[#34d399]"
            href="/content"
          >
            <svg
              className=" w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(52,211,153,1)"
            >
              <path d="M19.2914 5.99994H20.0002C20.5525 5.99994 21.0002 6.44766 21.0002 6.99994V13.9999C21.0002 14.5522 20.5525 14.9999 20.0002 14.9999H18.0002L13.8319 9.16427C13.3345 8.46797 12.4493 8.16522 11.6297 8.41109L9.14444 9.15668C8.43971 9.3681 7.6758 9.17551 7.15553 8.65524L6.86277 8.36247C6.41655 7.91626 6.49011 7.17336 7.01517 6.82332L12.4162 3.22262C13.0752 2.78333 13.9312 2.77422 14.5994 3.1994L18.7546 5.8436C18.915 5.94571 19.1013 5.99994 19.2914 5.99994ZM5.02708 14.2947L3.41132 15.7085C2.93991 16.1209 2.95945 16.8603 3.45201 17.2474L8.59277 21.2865C9.07284 21.6637 9.77592 21.5264 10.0788 20.9963L10.7827 19.7645C11.2127 19.012 11.1091 18.0682 10.5261 17.4269L7.82397 14.4545C7.09091 13.6481 5.84722 13.5771 5.02708 14.2947ZM7.04557 5H3C2.44772 5 2 5.44772 2 6V13.5158C2 13.9242 2.12475 14.3173 2.35019 14.6464C2.3741 14.6238 2.39856 14.6015 2.42357 14.5796L4.03933 13.1658C5.47457 11.91 7.65103 12.0343 8.93388 13.4455L11.6361 16.4179C12.6563 17.5401 12.8376 19.1918 12.0851 20.5087L11.4308 21.6538C11.9937 21.8671 12.635 21.819 13.169 21.4986L17.5782 18.8531C18.0786 18.5528 18.2166 17.8896 17.8776 17.4146L12.6109 10.0361C12.4865 9.86205 12.2652 9.78636 12.0603 9.84783L9.57505 10.5934C8.34176 10.9634 7.00492 10.6264 6.09446 9.7159L5.80169 9.42313C4.68615 8.30759 4.87005 6.45035 6.18271 5.57524L7.04557 5Z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
