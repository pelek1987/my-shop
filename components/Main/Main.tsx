import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex-grow max-w-lg mx-auto p-6">
      {children}
    </main>
  );
};

export default Main;
