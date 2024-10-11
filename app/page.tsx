import React from "react";
import { HeroCards } from "@/components/hero-cards";

const Page = () => {
  return (
    <div className="relative isolate mb-48 px-6 lg:px-8">
      <div className="mx-auto max-w-2xl pb-24 pt-28 text-center">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Welcome to Taraba State&apos;s Transparency and Accountability Portal
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Your one-stop repository for comprehensive information and services
          related to the Ministry of Finance, Budget & Economic Planning, Taraba
          State Budget and Financial information, as well as the World
          Bank&apos;s SFTAS PFOR and SABER programs.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://tarabastategov.online/upload/"
            className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Help & Contact
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Online Payment <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:flex lg:px-8">
        <HeroCards />
      </div>
    </div>
  );
};

export default Page;
