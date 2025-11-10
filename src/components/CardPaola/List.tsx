type Props = { items: string[] };
export default function List({ items }: Props) {
  return (
    <ul className="list">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}
