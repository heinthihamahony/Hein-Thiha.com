import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";

export function SelectDemo() {
  return (
    <Select>
      <Label className="text-[#9898a1]" htmlFor="firstname">
        Select a services
      </Label>
      <SelectTrigger className="bg-[#1c1c20] border-none rounded-xl w-full mb-4 text-[#9898a1]">
        <SelectValue placeholder="Select a service" />
      </SelectTrigger>
      <SelectContent className="bg-[#1c1c20] border-none rounded-xl">
        <SelectGroup className="">
          <SelectItem className="" value="apple">
            Apple
          </SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
