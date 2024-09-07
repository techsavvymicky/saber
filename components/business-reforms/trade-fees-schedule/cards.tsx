import { BanknotesIcon, ChartBarSquareIcon } from "@heroicons/react/24/outline";
import { Card, CardContent } from "@/components/ui/card";

export const TrmCard = () => {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="flex items-center gap-x-4 rounded-t-xl border-b border-gray-900/5 bg-gray-50 p-6">
          <ChartBarSquareIcon
            strokeWidth={1}
            className="h-12 w-12 rounded-lg border bg-emerald-50 stroke-emerald-500"
          />
        </div>
        <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-muted-foreground">New Trader Registration</dt>
            <dd className="font-medium text-foreground">₦5000</dd>
          </div>
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-muted-foreground">Renewal</dt>
            <dd className="font-medium text-foreground">₦10000</dd>
          </div>
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-muted-foreground">
              Lost / Mutilated Certificate
            </dt>
            <dd className="font-medium text-foreground">₦20000</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
};

export const PotentialFeesCard = () => {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="flex items-center gap-x-4 rounded-t-xl border-b border-gray-900/5 bg-gray-50 p-6">
          <BanknotesIcon
            strokeWidth={1}
            className="h-12 w-12 rounded-lg border bg-emerald-50 stroke-emerald-500"
          />
        </div>
        <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-muted-foreground">Right of Way Permit</dt>
            <dd className="font-medium text-foreground">To be Determined</dd>
          </div>
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-muted-foreground">Night Travel Permit</dt>
            <dd className="font-medium text-foreground">To be Determined</dd>
          </div>
          <div className="flex justify-between gap-x-4 py-3">
            <dt className="text-muted-foreground">Fumigation Certificate</dt>
            <dd className="font-medium text-foreground">To be Determined</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
};
