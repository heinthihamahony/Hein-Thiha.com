import HeroSection from "./component/ui/HeroSection";
import { ButtonOutline } from "./component/ui/Outline-button";
import Navbar from "./component/ui/navbar";
import SmNavbar from "./component/ui/smnavbar";

export default function Home() {
  return (
    <div className="">
      <div className="lg:mx-40 pt-10 pb-[149px] mx-6">
        <SmNavbar />
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}
