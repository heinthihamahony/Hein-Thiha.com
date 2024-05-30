export default function AboutMe() {
  return (
    <>
      <div className=" flex gap-40 mt-6 pb-[168px]">
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
        <div className="space-y-5">
          <div className=" flex items-center gap-5">
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
            English, Thai
          </div>
        </div>
      </div>
    </>
  );
}
