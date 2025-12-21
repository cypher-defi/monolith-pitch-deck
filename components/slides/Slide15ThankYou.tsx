"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Icon from "@/components/Icon";

export default function Slide15ThankYou() {
  return (
    <Slide
      id={15}
      background="bg-gradient-to-br from-black via-zinc-900 to-black"
    >
      <SlideContent className="text-center flex flex-col justify-center items-center min-h-[calc(100vh-180px)]">
        <Title size="xl" className="mb-10 text-blue-400">
          THANK YOU
        </Title>
        <Subtitle size="lg" className="mb-16">
          Questions & Discussion
        </Subtitle>

        <div className="space-y-6 max-w-2xl w-full px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <Icon
              name="email"
              size={28}
              className="text-blue-400 flex-shrink-0"
            />
            <p className="text-base sm:text-xl text-slate-300 break-words">
              Contact: founders@monolith.finance
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <Icon
              name="globe"
              size={28}
              className="text-blue-400 flex-shrink-0"
            />
            <p className="text-base sm:text-xl text-slate-300 break-words">
              Demo:{" "}
              <a
                href="https://monolith-dashboard-beta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors underline break-all"
              >
                monolith-dashboard-beta.vercel.app
              </a>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <Icon
              name="folder"
              size={28}
              className="text-blue-400 flex-shrink-0"
            />
            <p className="text-base sm:text-xl text-slate-300 break-words">
              Data Room: Available upon request
            </p>
          </div>
        </div>
      </SlideContent>
    </Slide>
  );
}
