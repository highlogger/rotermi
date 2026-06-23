import clsx from "clsx";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span
          className={clsx(
            "inline-block text-sm font-semibold tracking-widest uppercase mb-4",
            light ? "text-flame-300" : "text-flame-500"
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={clsx(
          "text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-navy-800"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            "mt-4 text-lg leading-relaxed",
            light ? "text-warm-200" : "text-warm-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
