import { useState, useEffect } from "react";

export default function BotonModo() {
  const [modoOscuro, setModoOscuro] = useState(false);

  useEffect(() => {
    const root = document.querySelector(".paola-scope");
    if (!root) return;

    if (modoOscuro) {
      root.classList.add("modo-oscuro");
    } else {
      root.classList.remove("modo-oscuro");
    }
  }, [modoOscuro]);

  return (
    <button
      className="btn-modo"
      onClick={() => setModoOscuro((prev) => !prev)}
    >
      {modoOscuro ? "☀️ Modo claro" : "🌙 Modo oscuro"}
    </button>
  );
}
