"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "./inputmain";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { SelectDemo } from "./selectcard";
import { TextareaWithLabel } from "./textarea";
import { HoverCardDemo } from "./text-hover-QR";

export function InputFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className=" lg:flex mt-20 items-center gap-40 text-white">
      <div className="max-w-md w-full rounded-2xl p-4 md:p-8 shadow-input bg-[#282730] dark:bg-black ">
        <h2 className="font-bold text-[#34d399] text-xl">
          Let's Work Together
        </h2>
        <p className="text-[#9898a1] text-sm max-w-sm mt-2">
          We are always looking for amazing projects.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 ">
            <LabelInputContainer>
              <Label className="text-[#9898a1] " htmlFor="firstname">
                First name
              </Label>
              <Input
                className="bg-[#1c1c20] rounded-xl text-white"
                id="firstname"
                placeholder="First Name"
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label className="text-[#9898a1]" htmlFor="lastname">
                Last name
              </Label>
              <Input
                className="bg-[#1c1c20] rounded-xl text-white"
                id="lastname"
                placeholder="Last Name"
                type="text"
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label className="text-[#9898a1]" htmlFor="email">
              Email Address
            </Label>
            <Input
              className="bg-[#1c1c20] rounded-xl text-white"
              id="email"
              placeholder="projectmayhem@fc.com"
              type="email"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-3">
            <Label className="text-[#9898a1]" htmlFor="Phone Number">
              Phone Number
            </Label>
            <Input
              className="bg-[#1c1c20] rounded-xl text-white"
              id="phone"
              placeholder="Phone Number"
              type="phone"
            />
          </LabelInputContainer>
          <SelectDemo />
          <TextareaWithLabel />
          <button
            className="bg-[#34d399] w-full rounded-xl py-3 mt-5 text-lg font-semibold"
            type="submit"
          >
            Submit &rarr;
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <div className="flex gap-5 justify-center">
            <a
              className=""
              href="https://www.facebook.com/profile.php?id=100035178279295"
            >
              <svg
                className=" w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(52,211,153,1)"
              >
                <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
              </svg>
            </a>
            <a
              className=""
              href="https://www.instagram.com/heinthiha80/?fbclid=IwZXh0bgNhZW0CMTAAAR2UudM1nSHEs1a0jD9ulM5OFxbv1LxOET3bn17rbBl0YjQy-cwtrfaIXZA_aem_AQy0GoT5KDL2M73WQ0aye4ECqAm0Y7BHtZKnbgMy3KnLeddnejcEat9AaPs_yQCwN48jXBZezM_4vMa__eGmQSsb"
            >
              <svg
                className=" w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(52,211,153,1)"
              >
                <path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"></path>
              </svg>
            </a>
            <a
              className=""
              href="https://www.linkedin.com/in/hein-thiha-22ba0a301/"
            >
              <svg
                className=" w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(52,211,153,1)"
              >
                <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
              </svg>
            </a>
          </div>
        </form>
      </div>
      <div className="">
        <div className="flex items-center gap-4">
          <div className="">
            <svg
              className=" w-14 bg-[#282730] p-3 rounded-xl"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(52,211,153,1)"
            >
              <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
            </svg>
          </div>
          <div className="">
            <p className="text-[#9898a1] ">Phone Number</p>
            <p className="font-semibold">
              (+95) 975 654 7575 <span className=" text-[#9898a1]">/</span>{" "}
              (+66) 918 376 095
            </p>
          </div>
        </div>
        <div className=" flex items-center gap-4 my-10">
          <div className="">
            <svg
              className="w-14 bg-[#282730] p-3 rounded-xl"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(52,211,153,1)"
            >
              <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
            </svg>
          </div>
          <div className="">
            <p className="text-[#9898a1] ">Email</p>
            <p className="font-semibold">heinthiha.dev@gmail.com</p>
          </div>
        </div>
        <div className=" flex items-center gap-4">
          <div className="">
            <svg
              className="w-14 bg-[#282730] p-3 rounded-xl"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="rgba(52,211,153,1)"
            >
              <path d="M18.6635 10.8404C18.6635 11.1279 18.4293 11.3654 18.1385 11.3654H16.676V12.3029H18.1385C18.4293 12.3029 18.6635 12.5387 18.6635 12.8279C18.6635 13.1145 18.4293 13.352 18.1385 13.352H16.1501C15.8626 13.352 15.6276 13.1145 15.6276 12.8279V8.85202C15.6276 8.56452 15.8626 8.32702 16.1526 8.32702H18.141C18.4293 8.32702 18.6635 8.56452 18.6635 8.85202C18.6635 9.14286 18.4293 9.37702 18.1385 9.37702H16.676V10.3145H18.1385C18.4293 10.3145 18.6635 10.552 18.6635 10.8404ZM14.566 13.3245C14.5126 13.342 14.4551 13.3504 14.4001 13.3504C14.2243 13.3504 14.0743 13.2754 13.9751 13.142L11.9393 10.3779V12.8279C11.9393 13.1145 11.7068 13.352 11.4135 13.352C11.1251 13.352 10.8918 13.1145 10.8918 12.8279V8.85202C10.8918 8.62702 11.036 8.42702 11.2501 8.35619C11.3001 8.33702 11.3635 8.32869 11.4118 8.32869C11.5743 8.32869 11.7243 8.41536 11.8243 8.54036L13.876 11.3154V8.85202C13.876 8.56452 14.111 8.32702 14.401 8.32702C14.6885 8.32702 14.926 8.56452 14.926 8.85202V12.8279C14.926 13.0529 14.781 13.2529 14.566 13.3245ZM9.61598 13.352C9.32848 13.352 9.09348 13.1145 9.09348 12.8279V8.85202C9.09348 8.56452 9.32848 8.32702 9.61848 8.32702C9.90681 8.32702 10.1418 8.56452 10.1418 8.85202V12.8279C10.1418 13.1145 9.90681 13.352 9.61598 13.352ZM8.08681 13.352H6.09848C5.81098 13.352 5.57348 13.1145 5.57348 12.8279V8.85202C5.57348 8.56452 5.81098 8.32702 6.09848 8.32702C6.38848 8.32702 6.62348 8.56452 6.62348 8.85202V12.3029H8.08681C8.37681 12.3029 8.61098 12.5387 8.61098 12.8279C8.61098 13.1145 8.37598 13.352 8.08681 13.352ZM12.001 2.57202C6.48848 2.57202 2.00098 6.21452 2.00098 10.6904C2.00098 14.6995 5.55931 18.0587 10.3635 18.697C10.6893 18.7654 11.1326 18.912 11.2451 19.1887C11.3451 19.4395 11.311 19.827 11.2768 20.0887L11.1401 20.9387C11.1026 21.1895 10.9401 21.927 12.0143 21.4762C13.0901 21.027 17.7776 18.0779 19.8776 15.6637C21.3143 14.0895 22.001 12.477 22.001 10.6904C22.001 6.21452 17.5135 2.57202 12.001 2.57202Z"></path>
            </svg>
          </div>
          <div className="">
            <p className="text-[#9898a1] ">Line Account</p>
            <HoverCardDemo />
          </div>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
