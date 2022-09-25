import { dataList } from "../../staticData";
import "./styles.css";

export const Iframe = ({ id }) => {
  return (
    <iframe
      title="myFrame"
      className="iframe"
      src={dataList.find((item) => item.id === id).src}
    />
  );
};
