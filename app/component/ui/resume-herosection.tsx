"user client";

import SmTap from "./smtab";
import Tap from "./tab";

export default function ResumeHero() {
  return (
    <>
      <div className=" pt-16 text-white">
        <div className=" space-y-4">
          <h1 className=" text-4xl font-semibold">Why hire me?</h1>
          <p className="text-[#9898a1]">
            My experiences and skills can demostrate valuable contributions to your company. Additionally, my ability to effectively solve various challenges will help meet your needs and improve your business.
          </p>
        </div>
        <div className="hidden md:flex">
          <Tap />
        </div>
        <div className="md:hidden">
          <SmTap />
        </div>
      </div>
    </>
  );
}
