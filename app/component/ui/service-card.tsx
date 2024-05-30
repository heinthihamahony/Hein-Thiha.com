import { MoveDownRight } from "lucide-react";
import Link from "next/link";

export default function ServiceCard() {
  return (
    <>
      <div className=" grid grid-cols-2 gap-10 mt-36 ">
        <Link href="#" className="space-y-5 border-b   border-[#363638] pb-5">
          <div className=" flex  items-center justify-between ">
            <h1 className=" text-5xl font-bold ">01</h1>{" "}
            <svg
              className=" w-14 p-3 text-black bg-white rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"></path>
            </svg>
          </div>
          <h2 className=" font-semibold text-3xl">Web Development</h2>
          <p className="text-sm text-[#9898a1] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            doloremque veniam ab in suscipit facilis commodi esse aspernatur
            veritatis, eos deleniti nisi placeat qui exercitationem neque a
            voluptatum possimus. Nostrum.
          </p>
        </Link>
        <Link href="#" className="space-y-5 border-b border-[#363638] pb-5">
          <div className=" flex items-center justify-between">
            <h1 className=" text-5xl font-bold">02</h1>{" "}
            <svg
              className=" w-14 p-3 text-black bg-white rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"></path>
            </svg>
          </div>
          <h2 className=" font-semibold text-3xl">Web Development</h2>
          <p className="text-sm text-[#9898a1] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            doloremque veniam ab in suscipit facilis commodi esse aspernatur
            veritatis, eos deleniti nisi placeat qui exercitationem neque a
            voluptatum possimus. Nostrum.
          </p>
        </Link>
        <Link href="#" className="space-y-5 border-b border-[#363638] pb-5">
          <div className=" flex items-center justify-between">
            <h1 className=" text-5xl font-bold">03</h1>{" "}
            <svg
              className=" w-14 p-3 text-black bg-white rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"></path>
            </svg>
          </div>
          <h2 className=" font-semibold text-3xl">Web Development</h2>
          <p className="text-sm text-[#9898a1] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            doloremque veniam ab in suscipit facilis commodi esse aspernatur
            veritatis, eos deleniti nisi placeat qui exercitationem neque a
            voluptatum possimus. Nostrum.
          </p>
        </Link>
        <Link href="#" className="space-y-5 border-b border-[#363638] pb-5">
          <div className=" flex items-center justify-between">
            <h1 className=" text-5xl font-bold">04</h1>{" "}
            <svg
              className=" w-14 p-3 text-black bg-white rounded-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"></path>
            </svg>
          </div>
          <h2 className=" font-semibold text-3xl">Web Development</h2>
          <p className="text-sm text-[#9898a1] ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            doloremque veniam ab in suscipit facilis commodi esse aspernatur
            veritatis, eos deleniti nisi placeat qui exercitationem neque a
            voluptatum possimus. Nostrum.
          </p>
        </Link>
      </div>
    </>
  );
}
