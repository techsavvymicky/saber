import { Button } from "@/components/ui/button";
import { MdxHeader } from "@/components/mdx-header";
import { Stats } from "@/components/business-reforms/c-of-o-statistics/stats";

export const Component = () => {
  return (
    <>
      <MdxHeader href="/business-reforms" />
      <div className="relative mx-auto mt-6 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            Statistics of Certificate of Occupancy <br />
            Issued by the Taraba State Bureau for <br />
            Lands & Survey
          </h1>
          <div className="mt-6">
            <Button variant={"outline"}>Download Stats Data</Button>
          </div>
          <nav className="order-first flex space-x-2 text-sm font-semibold">
            <span className="text-muted-foreground">C of O Statistics</span>
          </nav>
        </div>
        <div className="mt-10 space-y-24 pb-px">
          <Stats />
        </div>
      </div>
    </>
  );
};
