import Navbar from "../component/ui/navbar";
import SmNavbar from "../component/ui/smnavbar";
import WorkHero from "../component/ui/work-hero";

export default function Work() {
  return (
    <>
      <div className="lg:mx-40 pt-10 pb-[100px] mx-6">
        <SmNavbar />
        <Navbar />
        <WorkHero />
      </div>
    </>
  );
}
