"use client";

import Slide from "@/components/Slide";
import SlideContent from "@/components/SlideContent";
import Title from "@/components/Title";

export default function Slide7Competition() {
  return (
    <Slide id={7} background="bg-black">
      <SlideContent>
        <Title size="lg" className="mb-16 text-center">
          WHY INSTITUTIONS CHOOSE US OVER AAVE
        </Title>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-blue-500/30">
                  <th className="p-4 text-left text-gray-400">Feature</th>
                  <th className="p-4 text-center text-gray-400">
                    Aave (Protocol)
                  </th>
                  <th className="p-4 text-center text-blue-400 font-bold">
                    Monolith
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-500/20">
                <tr className="hover:bg-blue-500/10 transition">
                  <td className="p-4 font-semibold">Target Customer</td>
                  <td className="p-4 text-center text-gray-300">
                    Crypto traders
                  </td>
                  <td className="p-4 text-center text-green-400">
                    ✓ Corporate treasurers
                  </td>
                </tr>
                <tr className="hover:bg-blue-500/10 transition">
                  <td className="p-4 font-semibold">Custody Integration</td>
                  <td className="p-4 text-center text-gray-300">
                    Self-custody only
                  </td>
                  <td className="p-4 text-center text-green-400">
                    ✓ Existing systems
                  </td>
                </tr>
                <tr className="hover:bg-blue-500/10 transition">
                  <td className="p-4 font-semibold">Compliance Reporting</td>
                  <td className="p-4 text-center text-gray-300">Manual</td>
                  <td className="p-4 text-center text-green-400">
                    ✓ Automated
                  </td>
                </tr>
                <tr className="hover:bg-blue-500/10 transition">
                  <td className="p-4 font-semibold">Risk Management</td>
                  <td className="p-4 text-center text-gray-300">
                    User manages
                  </td>
                  <td className="p-4 text-center text-green-400">
                    ✓ 24/7 monitoring
                  </td>
                </tr>
                <tr className="hover:bg-blue-500/10 transition">
                  <td className="p-4 font-semibold">Dashboard & UI</td>
                  <td className="p-4 text-center text-red-400">
                    ✗ Protocol only
                  </td>
                  <td className="p-4 text-center text-green-400">
                    ✓ Full platform
                  </td>
                </tr>
                <tr className="hover:bg-blue-500/10 transition">
                  <td className="p-4 font-semibold">Pre-built Integrations</td>
                  <td className="p-4 text-center text-red-400">✗ None</td>
                  <td className="p-4 text-center text-green-400">
                    ✓ 10+ vendors
                  </td>
                </tr>
                <tr className="hover:bg-blue-500/10 transition">
                  <td className="p-4 font-semibold">Time to Deploy</td>
                  <td className="p-4 text-center text-gray-300">3-6 months</td>
                  <td className="p-4 text-center text-green-400">✓ 2 weeks</td>
                </tr>
                <tr className="hover:bg-blue-500/10 transition">
                  <td className="p-4 font-semibold">Support</td>
                  <td className="p-4 text-center text-gray-300">
                    Community only
                  </td>
                  <td className="p-4 text-center text-green-400">
                    ✓ Account manager
                  </td>
                </tr>
                <tr className="hover:bg-blue-500/10 transition">
                  <td className="p-4 font-semibold">Insurance Included</td>
                  <td className="p-4 text-center text-gray-300">
                    Optional (cost extra)
                  </td>
                  <td className="p-4 text-center text-green-400">
                    ✓ Institutional tier
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
          <p className="text-blue-300 text-lg text-center font-medium">
            We're not competing on yield—we compete on operational excellence.
            Aave = best protocol. Monolith = managed dashboard platform with
            full compliance suite.
          </p>
        </div>
      </SlideContent>
    </Slide>
  );
}
