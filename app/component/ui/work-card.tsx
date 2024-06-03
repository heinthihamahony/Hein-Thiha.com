import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function WorkCard() {
  return (
    <>
      <div className=" mt-20 text-4xl font-semibold mb-6">
        <p>
          I've been building a lot of Webpage
          <samp className="text-[#34d399]">.</samp>
        </p>
      </div>
      <div className=" lg:grid lg:grid-cols-2 lg:gap-5  lg:space-y-0">
        <a
          href="https://astrology-practice.vercel.app/"
          className=" hover:shadow-lg hover:shadow-[#233e35] rounded-2xl"
        >
          <Card className=" bg-[#282730] ">
            <CardHeader className="pb-0 px-4 flex-col items-start space-y-1 ">
              <h4 className="font-bold text-large">Astrology-pritice</h4>
              <small className="text-[#34d399]">Next.js, Tailwind, React</small>
            </CardHeader>
            <CardBody className="">
              <img
                className=" rounded-xl"
                src="https://lh3.google.com/u/0/d/17wgPbhSwnJWfoL1q1pvz2H1lSU6QbQIr=w1508-h1594-iv2"
                alt=""
              />
            </CardBody>
          </Card>
        </a>
        <a
          href="https://capcut-seven.vercel.app/"
          className=" hover:shadow-lg hover:shadow-[#233e35] rounded-2xl"
        >
          <Card className=" bg-[#282730] w-full  my-5 lg:my-0">
            <CardHeader className="pb-0 px-4 flex-col items-start space-y-1 ">
              <h4 className="font-bold text-large">Capcut-pritice</h4>
              <small className="text-[#34d399]">Next.js, Tailwind, React</small>
            </CardHeader>
            <CardBody className="">
              <img
                className="rounded-xl h-[323px]"
                src="https://lh3.google.com/u/0/d/1GNTR4eQO9g5201aTciGszjnw1ettIRm_=w1508-h1594-iv2"
                alt=""
              />
            </CardBody>
          </Card>
        </a>
        <a
          href="https://clickup-two.vercel.app/"
          className=" hover:shadow-lg hover:shadow-[#233e35] rounded-2xl"
        >
          <Card className=" bg-[#282730] ">
            <CardHeader className="pb-0 px-4 flex-col items-start space-y-1 ">
              <h4 className="font-bold text-large">Clickup-pritice</h4>
              <small className="text-[#34d399]">Next.js, Tailwind, React</small>
            </CardHeader>
            <CardBody className="">
              <img
                className=" rounded-xl"
                src="https://lh3.google.com/u/0/d/1Z6flCUL476SlRmanXOCrXrAct_GiVTWn=w1508-h1594-iv2"
                alt=""
              />
            </CardBody>
          </Card>
        </a>
        <a
          href="https://copilot-practice.vercel.app/"
          className=" hover:shadow-lg hover:shadow-[#233e35] rounded-2xl"
        >
          <Card className=" bg-[#282730]  my-5 lg:my-0">
            <CardHeader className="pb-0 px-4 flex-col items-start space-y-1 ">
              <h4 className="font-bold text-large">Copilot-pritice</h4>
              <small className="text-[#34d399]">Next.js, Tailwind, React</small>
            </CardHeader>
            <CardBody className="">
              <img
                className=" rounded-xl"
                src="https://lh3.google.com/u/0/d/1yV1jSPmW0SJmopRnXwkea7YBTVFjgSZZ=w1508-h1594-iv3"
                alt=""
              />
            </CardBody>
          </Card>
        </a>
      </div>
    </>
  );
}
