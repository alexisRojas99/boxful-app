import { FC } from "react";
import NavBar from "@/components/global/NavBar";
import { ScriptProps } from "next/script";

const Layout: FC<ScriptProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
