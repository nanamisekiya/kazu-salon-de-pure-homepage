import { ReactNode } from "react";
import Header from "../header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <main className="layout-container">{children}</main>
    </div>
  );
};

export default Layout;
