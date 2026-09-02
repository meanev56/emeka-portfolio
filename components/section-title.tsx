interface Props {
  title: string;
  subtitle: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12 text-center">
      <p className="gradient-text uppercase tracking-[0.3em] text-sm">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl font-bold">
        {title}
      </h2>
    </div>
  );
}