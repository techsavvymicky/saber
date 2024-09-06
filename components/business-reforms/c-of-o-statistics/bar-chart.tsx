"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { year: "2012", male: 15, female: 8, indexed: 0, non_indexed: 0 },
  { year: "2013", male: 11, female: 2, indexed: 0, non_indexed: 0 },
  { year: "2014", male: 19, female: 10, indexed: 0, non_indexed: 0 },
  { year: "2015", male: 20, female: 4, indexed: 0, non_indexed: 0 },
  { year: "2016", male: 37, female: 0, indexed: 0, non_indexed: 0 },
  { year: "2017", male: 40, female: 5, indexed: 0, non_indexed: 0 },
  { year: "2018", male: 56, female: 0, indexed: 0, non_indexed: 0 },
  { year: "2019", male: 18, female: 14, indexed: 0, non_indexed: 0 },
  { year: "2020", male: 17, female: 1, indexed: 0, non_indexed: 0 },
  { year: "2021", male: 64, female: 29, indexed: 103, non_indexed: 103 },
  { year: "Total", male: 297, female: 73, indexed: 103, non_indexed: 103 },
];

const chartConfig = {
  male: {
    label: "Male",
    color: "hsl(var(--chart-1))",
  },
  female: {
    label: "Female",
    color: "hsl(var(--chart-2))",
  },
  indexed: {
    label: "Indexed",
    color: "hsl(var(--chart-1))",
  },
  non_indexed: {
    label: "Non Indexed",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export const GenderBarChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Ownership of Registered C of Os Issued by Gender - Bar Chart
        </CardTitle>
        <CardDescription>January 2012 - December 2021</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="male" fill="var(--color-male)" radius={1} />
            <Bar dataKey="female" fill="var(--color-female)" radius={1} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Gender Based Bar Chart <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total amount of registered C of Os for the last 10 years
        </div>
      </CardFooter>
    </Card>
  );
};

export const IndexedBarChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Registered C of Os Indexed in a Digitized Archive - Bar Chart
        </CardTitle>
        <CardDescription>January 2012 - December 2021</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 5)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="indexed" fill="var(--color-indexed)" radius={1} />
            <Bar
              dataKey="non_indexed"
              fill="var(--color-non_indexed)"
              radius={1}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Indexed & Non-Indexed Based Bar Chart
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total amount of Indexed & Non-Indexed C of Os for the last 10
          years
        </div>
      </CardFooter>
    </Card>
  );
};
