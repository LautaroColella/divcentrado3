import s from "../../styles/profiles/cristian/socialgrid.module.css";

export default function SocialGrid() {
  return (
    <div className={s.socialGrid}>
      <a href="https://www.linkedin.com/in/humberto-cristian-paez/" target="_blank" rel="noreferrer" className={s.social}>
        <img src="/src/assets/img/icons/linkedin.png" alt="LinkedIn" />
      </a>

      <a href="https://www.instagram.com/cris.phz/" target="_blank" rel="noreferrer" className={s.social}>
        <img src="/src/assets/img/icons/instagram.png" alt="Instagram" />
      </a>

      <a href="https://x.com/CrishpNaN" target="_blank" rel="noreferrer" className={s.social}>
        <img src="/src/assets/img/icons/twitter.png" alt="X" />
      </a>

      <a href="https://www.youtube.com/@humbertocristianpaez1587" target="_blank" rel="noreferrer" className={s.social}>
        <img src="/src/assets/img/icons/youtube.png" alt="YouTube" />
      </a>
    </div>
  );
}

