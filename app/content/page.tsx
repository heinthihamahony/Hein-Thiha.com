import { InputFormDemo } from "../component/ui/inputcard";
import { MdSmInputFormDemo } from "../component/ui/mdsminputformdemo";
import Navbar from "../component/ui/navbar";
import SmNavbar from "../component/ui/smnavbar";

export default function Content() {
  return (
    <>
      <div className="lg:mx-40 pt-10 pb-[149px] mx-6">
        <SmNavbar />
        <Navbar />
        <div className="hidden lg:flex">
          <InputFormDemo />
        </div>
        <div className="flex lg:hidden">
          <MdSmInputFormDemo />
        </div>
      </div>
    </>
  );
}
