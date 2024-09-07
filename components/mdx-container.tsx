import { cn } from "@/lib/utils";

interface MdxContainerProps {
  className?: string;
  propTitle: string;
  title: React.ReactElement;
  button: React.ReactElement;
  children: React.ReactNode;
}

export const MdxContainer = ({
  className,
  propTitle,
  title,
  button,
  children,
}: MdxContainerProps) => {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div className={cn("mx-auto max-w-3xl", className)}>
        <article className="relative pt-10">
          <h1 className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">
            {title}
          </h1>
          <span className="absolute inset-x-0 top-0 text-sm leading-6 text-muted-foreground">
            {propTitle}
          </span>
          <div className="mt-6">
            <div className="-mx-5 -mt-6 flex flex-wrap text-sm leading-6">
              <div className="mt-6 flex items-center whitespace-nowrap px-5 font-medium">
                {button}
              </div>
            </div>
          </div>

          <div className="prose mt-12 text-[15px] leading-7">{children}</div>
        </article>
      </div>
    </div>
  );
};
