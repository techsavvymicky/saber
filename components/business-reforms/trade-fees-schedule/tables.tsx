"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const permitStats = [
  {
    vehicleType: "Car / Pick-up Truck",
    fee: "₦25000",
  },
  {
    vehicleType: "Truck with Six Tyres (Dyna)",
    fee: "₦35000",
  },
  {
    vehicleType: "Truck with Six Tyres (911)",
    fee: "₦50000",
  },
  {
    vehicleType: "Truck with Twleve Tyres",
    fee: "₦100000",
  },
  {
    vehicleType: "Trailer",
    fee: "To be Determined",
  },
];

const handlingStats = [
  {
    vehicleType: "Small Vehicles (Cars / Pick-up)",
    fee: "₦10000",
  },
  {
    vehicleType: "Truck (up to 10 Tyres)",
    fee: "₦15000",
  },
  {
    vehicleType: "Trailers & Containers (over 10 Tyres)",
    fee: "₦20000",
  },
];

export const PermitTable = () => {
  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <div className="mt-2 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-foreground sm:pl-0"
                    >
                      Vehicle Type
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-foreground sm:pr-0"
                    >
                      Fee / Levy
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {permitStats.map((stat, id) => (
                    <tr
                      key={id}
                      className={cn("divide-x divide-gray-200 text-gray-500")}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-foreground sm:pl-0">
                        {stat.vehicleType}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pr-0">
                        {stat.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const HandlingTable = () => {
  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <div className="mt-2 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-foreground sm:pl-0"
                    >
                      Vehicle Type
                    </th>

                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-foreground sm:pr-0"
                    >
                      Fee / Levy
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {handlingStats.map((stat, id) => (
                    <tr
                      key={id}
                      className={cn("divide-x divide-gray-200 text-gray-500")}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-foreground sm:pl-0">
                        {stat.vehicleType}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pr-0">
                        {stat.fee}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
