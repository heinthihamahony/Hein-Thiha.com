export default function AboutMe() {
  return (
    <>
      <div className=" lg:flex lg:gap-40 gap-10 mt-6 lg:pb-[168px] pb-[476px] md:mx-10 text-white">
        <div className=" space-y-5">
          <div className=" flex items-center gap-5">
            <span className=" text-[#9898a1] text-sm">Name</span> Hein Thiha
          </div>
          <div className=" flex items-center gap-5">
            <span className=" text-[#9898a1] text-sm">Experience</span> 2 years
          </div>
          <div className=" flex items-center gap-5">
            <span className=" text-[#9898a1] text-sm">Nationality</span> Myanmar
          </div>
          <div className=" flex items-center gap-5">
            <span className=" text-[#9898a1] text-sm">Freelance</span> Avaliable
          </div>
        </div>
        <div className="space-y-5 md:mt-5">
          <div className=" lg:flex items-center gap-5">
            <span className=" text-[#9898a1] text-sm">Phone</span> +959 756 547
            475 <span className=" text-[#9898a1] text-sm">/</span>+66 918 376
            095
          </div>

          <div className=" flex items-center gap-5">
            <span className=" text-[#9898a1] text-sm">Email</span>{" "}
            heinthiha.dev@gmail.com
          </div>
          <div className=" flex items-center gap-5">
            <span className=" text-[#9898a1] text-sm">Language</span> Myanmar,
            English
          </div>
        </div>
      </div>
    </>
  );
}
