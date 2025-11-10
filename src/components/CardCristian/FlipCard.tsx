import React from "react";
import s from "../../styles/profiles/cristian/flipcard.module.css";

type Props = { title: string; children?: React.ReactNode };

export default function FlipCard({ title, children }: Props) {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <div
      className={`${s.flipCard} ${flipped ? s.flipped : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className={s.flipInner}>
        <div className={s.flipFront}>
          <h2>{title}</h2>
        </div>
        <div className={s.flipBack}>{children}</div>
      </div>
    </div>
  );
}