import { CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button className="p-0 h-0 text-base font-semibold" variant="link">
          Hein Thiha
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="border-none">
        <div className="">
          <img
            className=" w-full rounded-xl"
            src="https://lh3.google.com/u/0/d/19pG-RSAnQeCUA3n7PMC87eKQMeYJvolx=w1508-h1594-iv1"
            alt=""
          />
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
