type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  chevronLeft: (props: IconProps) => (
    <svg viewBox="0 -9 3 24" {...props}>
      <path
        d="M3 0L0 3L3 6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  stacks: (props: IconProps) => (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
        className="fill-emerald-50 stroke-emerald-500"
      />
      <path
        d="M27 25.335L30.25 27l-6.603 3.382a8 8 0 01-7.294 0L9.75 27 13 25.335m14-6.999L30.25 20l-6.603 3.382a8 8 0 01-7.294 0L9.75 20 13 18.336"
        className="stroke-emerald-500/50"
      />
      <path
        d="M9.75 13l9.338-4.783a2 2 0 011.824 0L30.25 13l-6.603 3.382a8 8 0 01-7.294 0L9.75 13z"
        className="stroke-emerald-500"
      />
    </svg>
  ),
  curlyBracket: (props: IconProps) => (
    <svg
      {...props}
      viewBox="0 0 40 40"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
        className="fill-emerald-50 stroke-emerald-500"
      />
      <path d="M22.25 11.75l-4.5 16.5" className="stroke-emerald-500/50" />
      <path
        d="M16.25 7.75h-.5a4 4 0 00-4 4v4.007a3 3 0 01-.88 2.122 3 3 0 000 4.242 3 3 0 01.88 2.122v4.007a4 4 0 004 4h.5m7.5-24.5h.5a4 4 0 014 4v4.007a3.002 3.002 0 00.878 2.122 3 3 0 010 4.242 3 3 0 00-.878 2.122v4.007a4 4 0 01-4 4h-.5"
        className="stroke-emerald-500"
      />
    </svg>
  ),
  expand: (props: IconProps) => (
    <svg
      {...props}
      viewBox="0 0 40 40"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
        className="fill-emerald-50 stroke-emerald-500"
      />
      <path
        d="M7.75 21.25v-1.5a4 4 0 014-4h7.5m5 5v7.5a4 4 0 01-4 4h-1.5M27.75 32.25h.5a4 4 0 004-4v-10.5m-10-10h-10.5a4 4 0 00-4 4v.5"
        className="stroke-emerald-500/50"
      />
      <path d="M31.5 8.5l-23 23" className="stroke-emerald-500" />
      <path
        d="M25.75 7.75h4.5a2 2 0 012 2v4.5m-18 18h-4.5a2 2 0 01-2-2v-4.5"
        className="stroke-emerald-500"
      />
    </svg>
  ),
};
