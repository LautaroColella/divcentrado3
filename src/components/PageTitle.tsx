import { useEffect } from "react";

type TitleProps = { title: string };

export function PageTitle({ title }: TitleProps) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
}

export default PageTitle;
