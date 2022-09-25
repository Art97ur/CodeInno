import { Route, Routes } from "react-router";
import { AboutPage } from "../page/about";
import { Error404 } from "../page/Error404";
import { InitelPage } from "../page/initial";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<InitelPage />} />
      <Route path={"/about"} element={<AboutPage />} />
      <Route path={"*"} element={<Error404 />} />
    </Routes>
  );
};
