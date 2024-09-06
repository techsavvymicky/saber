import { cn } from "@/lib/utils";
import {
  StatsTable,
  GenderTable,
  IndexedTable,
} from "@/components/business-reforms/c-of-o-statistics/tables";
import { GenderPieChart } from "@/components/business-reforms/c-of-o-statistics/pie-chart";
import {
  GenderBarChart,
  IndexedBarChart,
} from "@/components/business-reforms/c-of-o-statistics/bar-chart";

export const Stats = () => {
  return (
    <div className="flex flex-col gap-y-24">
      <StatsTable />
      <GenderTable />
      <GenderPieChart />
      <GenderBarChart />
      <IndexedTable />
      <IndexedBarChart />
    </div>
  );
};
