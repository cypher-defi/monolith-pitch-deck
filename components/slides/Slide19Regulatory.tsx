"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";
import Subtitle from "@/components/Subtitle";

export default function Slide19Regulatory() {
  return (
    <Slide id={20} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          APPENDIX C: REGULATORY STRATEGY
        </Title>
        <Subtitle size="sm" className="mb-12 text-center">
          Jurisdiction Options Under Consideration
        </Subtitle>

        <div className="max-w-5xl mx-auto mb-8 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-blue-500/30">
                <th className="p-4 text-left text-gray-400">Jurisdiction</th>
                <th className="p-4 text-center text-gray-400">Tax Treatment</th>
                <th className="p-4 text-center text-gray-400">
                  Crypto Friendly
                </th>
                <th className="p-4 text-center text-gray-400">Setup Cost</th>
                <th className="p-4 text-center text-gray-400">Compliance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-500/20">
              <tr className="hover:bg-blue-500/10 transition">
                <td className="p-4 font-semibold">Cayman Islands</td>
                <td className="p-4 text-center text-green-400">Tax-neutral</td>
                <td className="p-4 text-center text-green-400 font-bold">
                  ✓ High
                </td>
                <td className="p-4 text-center">$25-40K</td>
                <td className="p-4 text-center text-gray-300">Moderate</td>
              </tr>
              <tr className="hover:bg-blue-500/10 transition">
                <td className="p-4 font-semibold">BVI</td>
                <td className="p-4 text-center text-green-400">Tax-neutral</td>
                <td className="p-4 text-center text-green-400 font-bold">
                  ✓ High
                </td>
                <td className="p-4 text-center">$15-30K</td>
                <td className="p-4 text-center text-gray-300">Low-Moderate</td>
              </tr>
              <tr className="hover:bg-blue-500/10 transition">
                <td className="p-4 font-semibold">Singapore</td>
                <td className="p-4 text-center text-amber-400">Moderate</td>
                <td className="p-4 text-center text-green-400 font-bold">
                  ✓ High
                </td>
                <td className="p-4 text-center">$15-25K</td>
                <td className="p-4 text-center text-gray-300">High</td>
              </tr>
              <tr className="hover:bg-blue-500/10 transition">
                <td className="p-4 font-semibold">Switzerland</td>
                <td className="p-4 text-center text-amber-400">Moderate</td>
                <td className="p-4 text-center text-green-400 font-bold">
                  ✓ High
                </td>
                <td className="p-4 text-center">$30-50K</td>
                <td className="p-4 text-center text-gray-300">High</td>
              </tr>
              <tr className="hover:bg-blue-500/10 transition">
                <td className="p-4 font-semibold">Delaware C-Corp</td>
                <td className="p-4 text-center text-amber-400">US taxes</td>
                <td className="p-4 text-center text-blue-400 font-bold">
                  ✓ Moderate
                </td>
                <td className="p-4 text-center">$5-10K</td>
                <td className="p-4 text-center text-gray-300">High</td>
              </tr>
              <tr className="hover:bg-blue-500/10 transition">
                <td className="p-4 font-semibold">Wyoming LLC</td>
                <td className="p-4 text-center text-green-400">Pass-through</td>
                <td className="p-4 text-center text-green-400 font-bold">
                  ✓ High
                </td>
                <td className="p-4 text-center text-green-400">$2-5K</td>
                <td className="p-4 text-center text-gray-300">Low</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
          <p className="text-blue-300 text-lg text-center">
            We welcome investor input on optimal structure based on investor
            base and target markets
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
