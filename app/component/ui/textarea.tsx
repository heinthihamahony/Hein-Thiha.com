import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithLabel() {
  return (
    <div className="grid w-full gap-1.5 ">
      <Label className="text-[#9898a1]" htmlFor="message">
        About your project
      </Label>
      <Textarea
        className="bg-[#1c1c20] border border-[#3b3b3d] rounded-xl text-[#9898a1]"
        placeholder="Type your project and tell me what you need."
        id="message"
      />
    </div>
  );
}
