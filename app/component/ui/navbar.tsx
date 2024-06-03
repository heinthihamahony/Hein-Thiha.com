import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className=" flex justify-between items-center ">
        <div>
          <a className="text-3xl font-mono" href="/">
            Hein<samp className="text-[#34d399]">.</samp>
          </a>
        </div>
        <div className=" flex gap-5 items-center font-semibold">
          <Link
            className="hover:text-[#34d399] active:underline underline-offset-4 decoration-2 decoration-[#34d399]"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-[#34d399] active:underline underline-offset-4 decoration-2 decoration-[#34d399]"
            href="/resume"
          >
            Resume
          </Link>
          <Link
            className="hover:text-[#34d399] active:underline underline-offset-4 decoration-2 decoration-[#34d399]"
            href="/work"
          >
            Work
          </Link>
          <Link
            className="hover:text-[#34d399] active:underline underline-offset-4 decoration-2 decoration-[#34d399]"
            href="/hein"
          >
            Service
          </Link>
          <Link
            className="hover:text-[#34d399] active:underline underline-offset-4 decoration-2 decoration-[#34d399]"
            href="/content"
          >
            Content
          </Link>
          <Button
            className="rounded-full bg-[#34d399] text-white text-lg py-2 px-4"
            color="success"
            variant="shadow"
          >
            Hire me
          </Button>
        </div>
      </div>
    </>
  );
}
