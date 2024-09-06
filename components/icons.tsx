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
};
