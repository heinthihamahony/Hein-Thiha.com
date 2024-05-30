import HeroSection from "./component/ui/HeroSection";
import { ButtonOutline } from "./component/ui/Outline-button";
import Navbar from "./component/ui/navbar";

export default function Home() {
  return (
    <div className="">
      <div className="mx-40 pt-10 pb-[149px]">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}
