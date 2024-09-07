import { MessageCircleQuestion } from "lucide-react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { Icons } from "@/components/icons";

export const Component = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:flex lg:px-8">
        <div className="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-20 lg:pr-4 lg:pt-20">
          <h1 className="text-base font-semibold leading-7 text-muted-foreground">
            Saber Program
          </h1>
          <p className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-foreground sm:text-5xl sm:leading-[3.5rem]">
            SABER Program Partnership with the World Bank
          </p>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Taraba State has partnered with the World Bank to implement the
            SABER program, which aims to create a more conducive environment for
            business operations. This initiative is expected to drive economic
            development, create jobs, and improve the overall business climate
            in the state.
          </p>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
        <section className="scroll-mt-28">
          <h2 className="text-xl font-bold text-slate-900">Key Objectives</h2>
          <div className="mt-3 divide-y divide-slate-100 border-t border-slate-100">
            <section className="grid scroll-mt-12 gap-x-8 gap-y-10 py-10 lg:py-12">
              <div className="col-span-3 mx-auto grid grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
                <div className="flex">
                  <div className="p-0.5">
                    <Icons.stacks className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-emerald-500/[.12]" />
                  </div>
                  <div className="ml-6">
                    <h2 className="text-sm font-semibold leading-6 text-slate-900">
                      Efficiency in Land Administration
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Streamlining processes to make land registration and
                      administration more efficient.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="p-0.5">
                    <Icons.stacks className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-emerald-500/[.12]" />
                  </div>
                  <div className="ml-6">
                    <h2 className="text-sm font-semibold leading-6 text-slate-900">
                      Regulatory Frameworks
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Enhancing regulations to support private investment,
                      particularly in infrastructure like fiber optics.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="p-0.5">
                    <Icons.stacks className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-emerald-500/[.12]" />
                  </div>
                  <div className="ml-6">
                    <h2 className="text-sm font-semibold leading-6 text-slate-900">
                      Investment Promotion
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Improving services provided by investment promotion
                      agencies and public-private partnership units.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="p-0.5">
                    <Icons.stacks className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-emerald-500/[.12]" />
                  </div>
                  <div className="ml-6">
                    <h2 className="text-sm font-semibold leading-6 text-slate-900">
                      Government-to-Business Services
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Increasing the efficiency and transparency of services
                      provided to businesses by the government.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>

      <div className="relative mx-auto w-full max-w-7xl space-y-20 px-4 sm:px-6 lg:px-8">
        <section className="scroll-mt-28">
          <h2 className="text-xl font-bold text-slate-900">Areas of Focus</h2>
          <div className="mt-3 divide-y divide-slate-100 border-t border-slate-100">
            <section className="grid scroll-mt-12 gap-x-8 gap-y-10 py-10 lg:py-12">
              <div className="col-span-3 mx-auto grid grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
                <div className="flex">
                  <div className="p-0.5">
                    <Icons.curlyBracket className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-emerald-500/[.12]" />
                  </div>
                  <div className="ml-6">
                    <h2 className="text-sm font-semibold leading-6 text-slate-900">
                      Land Administration
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Improving the efficiency of land registration and
                      administration processes.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="p-0.5">
                    <Icons.curlyBracket className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-emerald-500/[.12]" />
                  </div>
                  <div className="ml-6">
                    <h2 className="text-sm font-semibold leading-6 text-slate-900">
                      Infrastructure Investment
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Creating a supportive regulatory framework for private
                      investment in infrastructure, such as fiber optics.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="p-0.5">
                    <Icons.curlyBracket className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-emerald-500/[.12]" />
                  </div>
                  <div className="ml-6">
                    <h2 className="text-sm font-semibold leading-6 text-slate-900">
                      Investment Promotion
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Strengthening the capabilities of investment promotion
                      agencies and public-private partnership units.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="p-0.5">
                    <Icons.curlyBracket className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-emerald-500/[.12]" />
                  </div>
                  <div className="ml-6">
                    <h2 className="text-sm font-semibold leading-6 text-slate-900">
                      Government Services
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      Enhancing the efficiency and transparency of
                      government-to-business services.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>

      <div
        id="pricing"
        className="relative overflow-hidden pb-20 pt-24 lg:pb-24 xl:pb-32"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="mx-auto max-w-[40rem] lg:max-w-none">
            <div className="max-w-3xl1 pr-12">
              <h2 className="text-base font-semibold leading-7 text-muted-foreground">
                Berap
              </h2>
              <p className="mt-4 text-5xl font-extrabold tracking-tight text-foreground">
                Progress on Berap
              </p>
              <p className="mt-4 max-w-xl text-base leading-8 text-muted-foreground">
                The Business Enabling Reforms and Accountability Program (BERAP)
                is a critical component of the SABER initiative in Taraba State.
                BERAP focuses on implementing reforms that improve the business
                environment and ensure accountability.
              </p>
            </div>
            <div className="mt-16 lg:mt-0 lg:flex lg:flex-row-reverse lg:items-center">
              <div className="relative z-10 -mx-4 shadow-lg ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl lg:w-1/2 lg:flex-none">
                <div className="absolute -bottom-px left-1/2 -ml-48 flex h-[2px] w-96">
                  <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(34,197,94,0)_0%,#22C55E_32.29%,rgba(52,211,153,0.3)_67.19%,rgba(52,211,153,0)_100%)]" />
                  <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(34,197,94,0)_0%,#22C55E_32.29%,rgba(52,211,153,0.3)_67.19%,rgba(52,211,153,0)_100%)]" />
                  <div className="-ml-[100%] w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(34,197,94,0)_0%,#22C55E_32.29%,rgba(52,211,153,0.3)_67.19%,rgba(52,211,153,0)_100%)]" />
                  <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(34,197,94,0)_0%,#22C55E_32.29%,rgba(52,211,153,0.3)_67.19%,rgba(52,211,153,0)_100%)]" />
                </div>

                <div className="relative bg-white px-4 py-10 sm:rounded-3xl sm:px-10">
                  <div className="mt-3 flex items-center">
                    <p className="text-[2.5rem] font-semibold leading-none text-foreground">
                      Contact us
                    </p>
                  </div>
                  <ul className="space-y-8 pt-10 text-sm leading-6">
                    <li className="col-span-1 divide-y divide-gray-200 rounded-lg border bg-white shadow">
                      <div className="flex w-full items-center justify-between space-x-6 p-6">
                        <div className="flex-1 truncate">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-sm font-medium text-foreground">
                              For more information about the SABER program
                              <br /> in Taraba State, Please contact us via the
                              options below
                            </h3>
                          </div>
                        </div>
                        <Icons.expand className="h-10 w-10 shrink-0 transform-cpu rounded-lg shadow-md shadow-emerald-500/[.12]" />
                      </div>
                      <div>
                        <div className="-mt-px flex divide-x divide-gray-200 font-inter">
                          <div className="flex w-0 flex-1">
                            <a
                              href="tel:+2349030690129"
                              className="group relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-foreground"
                            >
                              <PhoneIcon className="h-5 w-5 text-gray-400 group-hover:text-foreground" />
                              Call
                            </a>
                          </div>
                          <div className="-ml-px flex w-0 flex-1">
                            <a
                              href="mailto:saber@tarabastate.online"
                              className="group relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-foreground"
                            >
                              <EnvelopeIcon className="h-5 w-5 text-gray-400 group-hover:text-foreground" />
                              Email
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="relative mt-10 flex rounded-xl border border-slate-600/10 bg-slate-50 p-6">
                    <MessageCircleQuestion
                      strokeWidth={1.5}
                      className="h-10 w-10 text-muted-foreground"
                    />
                    <p className="ml-5 text-sm leading-6 text-muted-foreground">
                      <strong className="font-semibold text-foreground">
                        For Further assistance
                      </strong>{" "}
                      — Explore our{" "}
                      <a
                        href="#"
                        className="font-semibold text-emerald-500 hover:text-emerald-600"
                      >
                        Knowledge Base
                      </a>{" "}
                      or contact us via our{" "}
                      <a
                        href="#"
                        className="font-semibold text-emerald-500 hover:text-emerald-600"
                      >
                        GRM System
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative mt-10 lg:mt-0 lg:w-1/2 lg:flex-none">
                <div className="absolute -inset-y-8 -left-2 w-px bg-slate-900/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] sm:left-0" />
                <div className="absolute -inset-y-8 -right-2 w-px bg-slate-900/10 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] sm:right-0 lg:hidden" />
                <div className="absolute -inset-x-8 top-0 h-px bg-slate-900/10 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                <div className="absolute -inset-x-8 bottom-0 h-px bg-slate-900/10 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                <ul>
                  <li className="relative px-2 py-8 sm:px-10">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-muted-foreground">
                        Berap Progress Report
                      </h3>
                      <a
                        className="inline-flex justify-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"
                        href="#"
                      >
                        <span>Download Report</span>
                      </a>
                    </div>
                    <p className="flex items-center text-2xl font-bold text-foreground">
                      2023
                    </p>
                    <p className="mt-3 text-sm leading-6 text-foreground">
                      Download the BERAP Progress Report for the year 2023,
                      Detailing the advancements and achievements in the ongoing
                      reforms.
                    </p>
                  </li>

                  <li className="relative px-2 py-8 sm:px-10">
                    <div className="absolute -inset-x-8 top-0 h-px bg-slate-900/10 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]" />
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-muted-foreground">
                        Berap Progress Report
                      </h3>
                      <a
                        className="inline-flex justify-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-900/10 hover:ring-slate-900/20"
                        href="#"
                      >
                        <span>Download Report</span>
                      </a>
                    </div>
                    <p className="flex items-center text-2xl font-bold text-foreground">
                      2024
                    </p>
                    <p className="mt-3 text-sm leading-6 text-foreground">
                      Download the BERAP Progress Report for the year 2024,
                      Detailing the advancements and achievements in the ongoing
                      reforms.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
