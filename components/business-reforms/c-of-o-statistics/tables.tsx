"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const stats = [
  {
    year: "2012",
    registered: "26",
    indexed: "0",
    non_indexed: "0",
    females: "8",
    males: "15",
    joint: "3",
  },
  {
    year: "2013",
    registered: "15",
    indexed: "0",
    non_indexed: "0",
    females: "2",
    males: "11",
    joint: "2",
  },
  {
    year: "2014",
    registered: "34",
    indexed: "0",
    non_indexed: "0",
    females: "10",
    males: "19",
    joint: "5",
  },
  {
    year: "2015",
    registered: "26",
    indexed: "0",
    non_indexed: "0",
    females: "4",
    males: "20",
    joint: "2",
  },
  {
    year: "2016",
    registered: "37",
    indexed: "0",
    non_indexed: "0",
    females: "0",
    males: "37",
    joint: "0",
  },
  {
    year: "2017",
    registered: "45",
    indexed: "0",
    non_indexed: "0",
    females: "5",
    males: "40",
    joint: "0",
  },
  {
    year: "2018",
    registered: "56",
    indexed: "0",
    non_indexed: "0",
    females: "0",
    males: "56",
    joint: "0",
  },
  {
    year: "2019",
    registered: "32",
    indexed: "0",
    non_indexed: "0",
    females: "14",
    males: "18",
    joint: "3",
  },
  {
    year: "2020",
    registered: "18",
    indexed: "0",
    non_indexed: "0",
    females: "1",
    males: "17",
    joint: "0",
  },
  {
    year: "2021",
    registered: "103",
    indexed: "103",
    non_indexed: "103",
    females: "29",
    males: "64",
    joint: "10",
  },
  {
    year: "Total",
    registered: "392",
    indexed: "103",
    non_indexed: "103",
    females: "73",
    males: "297",
    joint: "22",
  },
];

export const StatsTable = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>C of O Statistics</CardTitle>
        <CardDescription>
          Certificate of Occupancy Issued by the Bureau from January 2012 to
          31st December, 2021
        </CardDescription>
      </CardHeader>
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
                      Year
                    </th>
                    <th
                      scope="col"
                      className="w-32 px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      No. of C of Os Registered
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      No. of Indexed
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-foreground sm:pr-0"
                    >
                      No. of Non-Indexed
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-foreground sm:pr-0"
                    >
                      No. of Females
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-foreground sm:pr-0"
                    >
                      No. of Males
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-foreground sm:pr-0"
                    >
                      No. of Joint Ownership
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {stats.map((stat, id) => (
                    <tr
                      key={id}
                      className={cn(
                        "divide-x divide-gray-200 text-gray-500",
                        stat.year === "Total" &&
                          "font-semibold !text-foreground",
                      )}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-foreground sm:pl-0">
                        {stat.year}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm">
                        {stat.registered}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm">
                        {stat.indexed}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm">
                        {stat.non_indexed}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm">
                        {stat.females}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm">
                        {stat.males}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pr-0">
                        {stat.joint}
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

export const GenderTable = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>C of O Statistics</CardTitle>
        <CardDescription>
          Certificate of Occupancy Issued by the Bureau from January 2012 to
          31st December, 2021
        </CardDescription>
      </CardHeader>
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
                      Year
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-foreground sm:pr-0"
                    >
                      No. of Females
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-foreground sm:pr-0"
                    >
                      No. of Males
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {stats.map((stat, id) => (
                    <tr
                      key={id}
                      className={cn(
                        "divide-x divide-gray-200 text-gray-500",
                        stat.year === "Total" &&
                          "font-semibold !text-foreground",
                      )}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-foreground sm:pl-0">
                        {stat.year}
                      </td>

                      <td className="whitespace-nowrap p-4 text-sm">
                        {stat.females}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pr-0">
                        {stat.males}
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

export const IndexedTable = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>C of O Statistics (Indexed)</CardTitle>
        <CardDescription>
          Certificate of Occupancy Issued from January 2012 to 31st December,
          2021 that&apos;s Indexed in a Digitized Archive
        </CardDescription>
      </CardHeader>
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
                      Description Year
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-foreground sm:pr-0"
                    >
                      No. of Indexed C of Os
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-foreground sm:pr-0"
                    >
                      No. of Non Indexed C of Os
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {stats.map((stat, id) => (
                    <tr
                      key={id}
                      className={cn(
                        "divide-x divide-gray-200 text-gray-500",
                        stat.year === "Total" &&
                          "font-semibold !text-foreground",
                      )}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-foreground sm:pl-0">
                        {stat.year}
                      </td>

                      <td className="whitespace-nowrap p-4 text-sm">
                        {stat.indexed}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pr-0">
                        {stat.non_indexed}
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
