import Navbar from "../component/ui/navbar";
import ServiceCard from "../component/ui/service-card";
import SmNavbar from "../component/ui/smnavbar";

export default function Service() {
  return (
    <>
      <div className="lg:mx-40 pt-10 pb-[123px] mx-6">
        <SmNavbar />
        <Navbar />
        <ServiceCard />
      </div>
    </>
  );
}
