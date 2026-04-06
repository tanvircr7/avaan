import { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  action?: ReactNode;
};

export function SectionHeading({ title, action }: SectionHeadingProps) {
  return (
    <div className="mb-5 flex items-center justify-between gap-4">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      {action ? <div>{action}</div> : null}
    </div>
  );
}