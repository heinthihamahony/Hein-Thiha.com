"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody, Switch } from "@nextui-org/react";
import { ExpCardHoverEffectDemo } from "./exp-card-hover";
import EduCardHoverEffectDemo from "./edu-card";
import SkillCard from "./skill-card";
import AboutMe from "./aboutme";

export default function Tap() {
  const [isVertical, setIsVertical] = React.useState(true);
  return (
    <div className="pt-[40px] text-white">
      <div className="">
        <Tabs
          className=" lg:mr-14"
          aria-label="Options"
          isVertical={isVertical}
          classNames={{
            tabList: " bg-[#282730]",
            cursor: "w-full !bg-[#34d399]",
            tab: "max-w-fit px-0 h-12 hover:bg-[#34d399]",
            tabContent: "group-data-[selected=true]:text-[]",
          }}
        >
          <Tab
            key="Experience"
            className=""
            title={
              <div className="lg:px-[115px] px-[50px] flex items-center justify-start space-x-2 text-left">
                <span className=" text-white  font-bold text-lg">
                  Experience
                </span>
              </div>
            }
          >
            <div className=" space-y-4">
              <h1 className="text-4xl font-semibold">My experiences</h1>
              <p className="text-[#9898a1]">
                The following webpages are based on my personal practice and
                experiences.
              </p>
            </div>
            <div className="">
              <ExpCardHoverEffectDemo />
            </div>
          </Tab>
          <Tab
            key="Education"
            className=""
            title={
              <div className="lg:px-[120px] px-[55px] flex items-center justify-center space-x-2">
                <span className=" text-white  font-bold text-lg">
                  Education
                </span>
              </div>
            }
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold">My education</h1>
              <p className="text-[#9898a1]">
                The following content highlights my acadiemic qualifications.
              </p>
            </div>
            <div className="">
              <EduCardHoverEffectDemo />
            </div>
          </Tab>
          <Tab
            key="Skills"
            className=""
            title={
              <div className="lg:px-[141px] px-[76px] flex items-center justify-center space-x-2 ">
                <span className=" text-white  font-bold text-lg">Skills</span>
              </div>
            }
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold">My skills</h1>
              <p className="text-[#9898a1]">
                The following coding language are those I am proficient in.
              </p>
            </div>
            <div className="">
              <SkillCard />
            </div>
          </Tab>
          <Tab
            key="About me"
            className=""
            title={
              <div className="lg:px-[122px] px-[57px] flex items-center justify-center space-x-2">
                <span className=" text-white  font-bold text-lg">About me</span>
              </div>
            }
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold">About me</h1>
              <p className="text-[#9898a1]">
                Some of my topics are mentioned below.
              </p>
            </div>
            <div className="">
              <AboutMe />
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
