import {
  IconBuildings,
  IconCurrencyNaira,
  IconDownload,
  IconHomeDollar,
  IconHomeHand,
  IconRoad,
  IconScanEye,
  IconThumbUp,
  IconTie,
} from "@tabler/icons-react";

const files = [
  {
    name: "Building Permit Approval",
    description: "Published: 26th August 2024",
    tag: "2024",
    fileUrl: "",
    icon: <IconHomeHand strokeWidth={1} className="h-10 w-10 flex-shrink-0" />,
  },
  {
    name: "Building Permit Assessment fees",
    description: "Published: 26th August 2024",
    tag: "2024",
    fileUrl: "",
    icon: (
      <IconHomeDollar strokeWidth={1} className="h-10 w-10 flex-shrink-0" />
    ),
  },
  {
    name: "C of O Schedule Fee",
    description: "Published: 26th August 2024",
    tag: "2024",
    fileUrl: "business-reforms/c-of-o-procedure",
    icon: (
      <IconCurrencyNaira strokeWidth={1} className="h-10 w-10 flex-shrink-0" />
    ),
  },
  {
    name: "List and Address of all Area offices",
    description: "Published: 26th August 2024",
    tag: "2024",
    fileUrl: "",
    icon: <IconBuildings strokeWidth={1} className="h-10 w-10 flex-shrink-0" />,
  },
  {
    name: "Taraba State Land Registration",
    description: "Published: 26th August 2024",
    tag: "2024",
    fileUrl: "",
    icon: <IconRoad strokeWidth={1} className="h-10 w-10 flex-shrink-0" />,
  },
  {
    name: "Procedure of EIA Approval Procedure 1",
    description: "Published: 26th August 2024",
    tag: "2024",
    fileUrl: "",
    icon: <IconThumbUp strokeWidth={1} className="h-10 w-10 flex-shrink-0" />,
  },
  {
    name: "Registered Consultants",
    description: "Published: 26th August 2024",
    tag: "2024",
    fileUrl: "",
    icon: <IconTie strokeWidth={1} className="h-10 w-10 flex-shrink-0" />,
  },
];

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:flex lg:px-8">
        <div className="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20">
          <h1 className="text-base font-semibold leading-7 text-emerald-600">
            Business Reforms
          </h1>
          <p className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-foreground sm:text-5xl sm:leading-[3.5rem]">
            File Archives of the State&apos;s Business Reforms
          </p>

          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Discover Taraba State&apos;s business reforms through our
            comprehensive archive. Browse, preview, or download files that
            document the state&apos;s efforts to enhance economic growth,
            streamline business processes, and support entrepreneurs and
            investors.
          </p>
        </div>
      </div>

      <div className="relative z-20 sm:z-auto">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <ul className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {files.map((file, index) => (
              <li
                key={index}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
              >
                <div className="flex w-full items-center justify-between space-x-6 p-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-foreground">
                        {file.name}
                      </h3>
                      <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {file.tag}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-sm text-muted-foreground">
                      {file.description}
                    </p>
                  </div>
                  {file.icon}
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                      <a
                        href={file.fileUrl}
                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-foreground"
                      >
                        <IconScanEye
                          strokeWidth={1.5}
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        Preview
                      </a>
                    </div>
                    <div className="-ml-px flex w-0 flex-1">
                      <a
                        href={file.fileUrl}
                        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-foreground"
                      >
                        <IconDownload
                          strokeWidth={1.5}
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
