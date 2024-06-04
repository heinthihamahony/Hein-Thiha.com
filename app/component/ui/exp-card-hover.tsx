import { HoverEffect } from "./card-hover-effect";

export function ExpCardHoverEffectDemo() {
  return (
    <div className="max-w-3xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Astrology-practice",
    description:
      "This website is a sample created for those interested in astrology/horoscopes (It is a replica of an existing website).",
    link: "https://astrology-seven.vercel.app/",
  },
  {
    title: "Capcut-practice",
    description:
      "This website is a sample created for those interested in video editing using Capcut (it is a replica of an existing website).",
    link: "https://capcut-seven.vercel.app/",
  },
  {
    title: "Clickup-practice",
    description:
      "This website is a sample created based on the ClickUp website design (it is a replica of an existing website).",
    link: "https://clickup-two.vercel.app/",
  },
  {
    title: "Copilot-practice",
    description:
      "This website is a sample created based on the Copilot website design (it is a replica of an existing website).",
    link: "https://copilot-practice.vercel.app/",
  },
];
