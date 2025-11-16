import type { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return <div className="max-w-5xl mx-auto h-screen">{children}</div>;
};

export default Container;
