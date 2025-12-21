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

        <div className="overflow-x-auto">
          <table className="comparison-table">
            <thead>
              <tr className="border-b-2 border-slate-700">
                <th className="p-4 text-slate-300">Feature</th>
                <th className="p-4 text-slate-300">Aave (Protocol)</th>
                <th className="p-4 text-blue-400">Monolith (Infrastructure)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              <tr>
                <td className="p-4 font-semibold">Target Customer</td>
                <td className="p-4">Crypto-native traders</td>
                <td className="p-4 text-green-400">
                  ✓ Corporate treasurers & banks
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Custody Integration</td>
                <td className="p-4">Self-custody required</td>
                <td className="p-4 text-green-400">
                  ✓ Works with existing custody
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Compliance Reporting</td>
                <td className="p-4">Manual (on-chain data)</td>
                <td className="p-4 text-green-400">
                  ✓ Automated compliance reports
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Risk Management</td>
                <td className="p-4">User manages risk</td>
                <td className="p-4 text-green-400">
                  ✓ Professional 24/7 monitoring
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Dashboard & UI</td>
                <td className="p-4">✗ No interface (protocol only)</td>
                <td className="p-4 text-green-400">
                  ✓ Full managed dashboard platform
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Integrations</td>
                <td className="p-4">✗ None (build yourself)</td>
                <td className="p-4 text-green-400">
                  ✓ Pre-built (QuickBooks, Fireblocks, etc)
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Time to Deploy</td>
                <td className="p-4">3-6 months (build integration)</td>
                <td className="p-4 text-green-400">
                  ✓ 2 weeks (ready-to-deploy)
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Support Model</td>
                <td className="p-4">Community Discord</td>
                <td className="p-4 text-green-400">
                  ✓ Dedicated account manager
                </td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Insurance</td>
                <td className="p-4">Optional (user buys)</td>
                <td className="p-4 text-green-400">
                  ✓ Included for institutional tier
                </td>
              </tr>
            </tbody>
          </table>
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
