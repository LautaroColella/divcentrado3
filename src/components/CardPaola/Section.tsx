type Props = { title: string; children: React.ReactNode };
export default function Section({ title, children }: Props) {
  return (
    <section className="card__section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
