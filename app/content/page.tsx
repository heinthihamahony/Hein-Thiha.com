import { InputFormDemo } from "../component/ui/inputcard";
import { MdSmInputFormDemo } from "../component/ui/mdsminputformdemo";
import Navbar from "../component/ui/navbar";

export default function Content() {
  return (
    <>
      <div className="lg:mx-40 pt-10 pb-[149px] mx-10">
        <Navbar />
        <div className="md:hidden lg:flex">
          <InputFormDemo />
        </div>
        <div className="md:flex lg:hidden">
          <MdSmInputFormDemo />
        </div>
      </div>
    </>
  );
}
