"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";
import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import CardContent from "@/components/CardContent";

export default function Slide16AppendixDivider() {
  return (
    <Slide
      id={16}
      background="bg-gradient-to-br from-black via-zinc-900 to-black"
    >
      <SlideContent className="text-center flex flex-col justify-center items-center min-h-[calc(100vh-180px)]">
        <Title size="xl" className="mb-10 text-blue-400">
          APPENDIX
        </Title>
        <Subtitle size="lg" className="mb-16">
          Additional Technical & Strategic Details
        </Subtitle>

        <div className="grid grid-cols-2 gap-6 max-w-3xl">
          <Card variant="glass">
            <CardTitle>A. Technical Architecture</CardTitle>
            <CardContent>Smart contract design</CardContent>
          </Card>
          <Card variant="glass">
            <CardTitle>B. Security Framework</CardTitle>
            <CardContent>Audit strategy</CardContent>
          </Card>
          <Card variant="glass">
            <CardTitle>C. Regulatory Strategy</CardTitle>
            <CardContent>Jurisdiction options</CardContent>
          </Card>
          <Card variant="glass">
            <CardTitle>D. 3-Year Projections</CardTitle>
            <CardContent>Financial model</CardContent>
          </Card>
        </div>
      </SlideContent>
    </Slide>
  );
}
