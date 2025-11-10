import { forwardRef } from "react";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  backgroundUrl?: string;
};

const ProfileCard = forwardRef<HTMLDivElement, Props>(
  ({ backgroundUrl, style, className = "card", children, ...rest }, ref) => (
    <main
      ref={ref}
      className={className}
      style={{
        background: backgroundUrl
          ? `url("${backgroundUrl}") center / cover no-repeat`
          : undefined,
        ...style,
      }}
      {...rest}
    >
      {children}
    </main>
  )
);

export default ProfileCard;
