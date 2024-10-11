"use client";

import {
  ListCheckIcon,
  LucideIcon,
  MessageCircleQuestionIcon,
  SearchCheckIcon,
  SparklesIcon,
} from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { GridPattern } from "@/components/grid-pattern";

type Card = {
  name: string;
  description: string;
  icon: LucideIcon;
  pattern: {
    y: number;
    squares: [number, number][];
  };
};

const cards: Card[] = [
  {
    name: "Clear & Accessible Information",
    description:
      "Comprehensive guides that outline organizational standards, regulatory compliance, and best practices.",
    icon: ListCheckIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    name: "Transparent Processes",
    description:
      "Visualizations of workflows and decision-making to ensure transparency.",
    icon: SearchCheckIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    name: "Essential Services",
    description:
      "A well-organized catalog of services, including step-by-step instructions for accessing each service.",
    icon: SparklesIcon,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    name: "Frequently asked questions",
    description:
      "This includes troubleshooting tips, clarification of policies, and specific guidelines on processes.",
    icon: MessageCircleQuestionIcon,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
];

type ResourceIconProps = {
  icon: LucideIcon;
};

function ResourceIcon({ icon: Icon }: ResourceIconProps) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900" />
    </div>
  );
}

type ResourcePatternProps = {
  mouseX: any;
  mouseY: any;
  y: number;
  squares: [number, number][];
};

function ResourcePattern({
  mouseX,
  mouseY,
  ...gridProps
}: ResourcePatternProps) {
  const maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70"
          {...gridProps}
        />
      </motion.div>
    </div>
  );
}

type ResourceProps = {
  resource: Card;
};

function HeroCard({ resource }: ResourceProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl border bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/5 group-hover:ring-zinc-900/10" />
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <ResourceIcon icon={resource.icon} />
        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900">
          <span className="absolute inset-0 rounded-2xl" />
          {resource.name}
        </h3>
        <p className="mt-1 text-sm leading-6 text-zinc-600">
          {resource.description}
        </p>
      </div>
    </div>
  );
}

export function HeroCards() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-8 border-zinc-900/5 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((resource, index) => (
        <HeroCard key={index} resource={resource} />
      ))}
    </div>
  );
}
