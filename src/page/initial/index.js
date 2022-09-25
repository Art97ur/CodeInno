import { useState } from "react";
import { Iframe } from "../../components/map";
import { RestaurantsList } from "../../components/restaurantList";

export const InitelPage = ({ setBtnId }) => {
  const [eachId, setEachId] = useState(0);
  const getid = (id) => {
    setEachId(id);
  };
  return (
    <>
      <RestaurantsList
        setEachId={setEachId}
        getid={getid}
        setBtnId={setBtnId}
      />
      <Iframe id={eachId} />
    </>
  );
};
