import { useState } from "react";
import { Route, Routes, useParams} from "react-router";
import { AboutPage } from "../page/about";
import { Error404 } from "../page/Error404";
import { InitelPage } from "../page/initial";

export const RoutesComponent = () => {
  const [btnId, setBtnId] = useState(0);
  return (
    <Routes>
      <Route path="/" element={<InitelPage setBtnId={setBtnId} />} />
      <Route path={`/about`} element={<AboutPage btnId={btnId} />} />
      <Route path={"*"} element={<Error404 />} />
    </Routes>
  );
};
