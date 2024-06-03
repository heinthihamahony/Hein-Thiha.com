import Navbar from "../component/ui/navbar";
import ServiceCard from "../component/ui/service-card";

export default function Service() {
  return (
    <>
      <div className="lg:mx-40 pt-10 pb-[123px] mx-10">
        <Navbar />
        <ServiceCard />
      </div>
    </>
  );
}
