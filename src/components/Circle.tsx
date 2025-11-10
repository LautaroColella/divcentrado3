import React from "react";

interface CircleProps {
  id: string;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  frontRef?: React.Ref<HTMLDivElement>;
  backRef?: React.Ref<HTMLDivElement>;
}

const Circle = React.forwardRef<HTMLDivElement, CircleProps>(
  ({ id, frontContent, backContent, onClick, frontRef, backRef }, ref) => {
    return (
      <div className="circle" id={id} onClick={onClick} ref={ref}>
        <div className="circle-front" ref={frontRef}>
          {frontContent}
        </div>
        <div className="circle-back" ref={backRef}>
          {backContent}
        </div>
      </div>
    );
  }
);

export default Circle;
