import React from "react";
import s from "../../styles/profiles/cristian/redesCristian.module.css";

export default function RedesCristian() {
  return (
    <div className={s.root}>
      <a
        href="https://github.com/crishpaez"
        target="_blank"
        rel="noreferrer"
        className={`${s.btn} ${s.github}`}
      >
        <i className="fa-brands fa-github" />
        <span>GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/humberto-cristian-paez/"
        target="_blank"
        rel="noreferrer"
        className={`${s.btn} ${s.linkedin}`}
      >
        <i className="fa-brands fa-linkedin" />
        <span>LinkedIn</span>
      </a>

      <a
        href="https://discord.com/users/nsp1455"
        target="_blank"
        rel="noreferrer"
        className={`${s.btn} ${s.discord}`}
      >
        <i className="fa-brands fa-discord" />
        <span>Discord</span>
      </a>
    </div>
  );
}
