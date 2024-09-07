"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";
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

export const description = "Gender Based C of O Distribution";

const chartData = [
  { gender: "male", amount: 297, fill: "var(--color-male)" },
  { gender: "female", amount: 73, fill: "var(--color-female)" },
  { gender: "joint", amount: 22, fill: "var(--color-joint)" },
];

const chartConfig = {
  amount: {
    label: "Amount",
  },
  male: {
    label: "Male",
    color: "hsl(var(--chart-1))",
  },
  female: {
    label: "Female",
    color: "hsl(var(--chart-3))",
  },
  joint: {
    label: "Joint",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export const GenderPieChart = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Distribution of Registered C of O by Gender</CardTitle>
        <CardDescription>January 2012 - December 2021</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-72 pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="amount" label nameKey="gender" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Gender Based Pie Chart <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total amount of registered C of Os for the last 10 years
        </div>
      </CardFooter>
    </Card>
  );
};
