interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10">
      {children}
    </section>
  );
}