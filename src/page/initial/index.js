import { useState } from "react";
import { Iframe } from "../../components/map";
import { RestaurantsList } from "../../components/restaurantList";

export const InitelPage = () => {
  const [eachId, setEachId] = useState(0);
  const getid = (id) => {
    setEachId(id);
  };
  return (
    <>
      <RestaurantsList setEachId={setEachId} getid={getid} />
      <Iframe id={eachId} />
    </>
  );
};
