import type { FC } from "react";

import { Footer } from "@/components/footer/footer.tsx";
import { Header } from "@/components/header/header.tsx";

import type { MainLayoutProps } from "./types.ts";

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
