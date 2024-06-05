import Navbar from "../component/ui/navbar";
import ResumeHero from "../component/ui/resume-herosection";
import SmNavbar from "../component/ui/smnavbar";

export default function Resume() {
  return (
    <>
      <div className=" lg:mx-40 pt-10 lg:pb-[97px] mx-6">
        <SmNavbar />
        <Navbar />
        <ResumeHero />
      </div>
    </>
  );
}
