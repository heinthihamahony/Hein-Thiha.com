
import { ButtonOutline } from "./Outline-button";

export default function HeroSection() {
  return (
    <>
      <div className="lg:flex justify-between items-center mt-20">
        <div className="text-center lg:text-start">
          <h6 className=" font-semibold text-[#9898a1] space-y-4">
            Frontend Developer
          </h6>
          <div className="text-5xl font-semibold space-y-4 my-2">
            <h1>Hello I'm</h1>
            <h1 className=" text-[#34d399]">Hein Thiha</h1>
          </div>

          <div className="text-sm text-[#9898a1] space-y-4">
            <p>
              {" "}
              I am a frontend developer focused on creating user-friendly
              websites using technologies like HTML, CSS, JavaScript, React,
              Tailwind, Figma, and Next.js.
            </p>
            <p>
              I design and develop precise, innovative web designs that
              prioritize ease of use, understanding and responding to user needs
              and feedback.
            </p>
            <p>
              I combine effort, creativity, and technical innovation to deliver
              top service and create effective websites that enhance your
              business.
            </p>
          </div>
        </div>
        <img
          className="md:mx-auto md:mt-10 rounded-full border-4 border-[#34d399] w-80 h-80 object-cover"
          src="https://lh3.google.com/u/0/d/1eAB9m0aThHpUb_96_3w0ugh8_nADWhui=w886-h1594-iv1"
          alt=""
        />
      </div>
      <ButtonOutline />
      <div className=" flex justify-between items-center mt-20">
        <div className=" flex tems-center gap-2">
          <h1 className=" text-5xl font-semibold i">12</h1>
          <p>
            years of <br /> experiences
          </p>
        </div>
        <div className=" flex tems-center gap-2">
          <h1 className=" text-5xl font-semibold i">12</h1>
          <p>
            years of <br /> experiences
          </p>
        </div>
        <div className=" flex tems-center gap-2">
          <h1 className=" text-5xl font-semibold i">12</h1>
          <p>
            years of <br /> experiences
          </p>
        </div>
        <div className=" flex tems-center gap-2">
          <h1 className=" text-5xl font-semibold i">12</h1>
          <p>
            years of <br /> experiences
          </p>
        </div>
      </div>
    </>
  );
}
