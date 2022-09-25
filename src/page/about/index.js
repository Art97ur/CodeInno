import { useNavigate } from "react-router";
import { dataList } from "../../staticData";
import "./styles.css";
export const AboutPage = () => {
  const navigate = useNavigate();
  const btnId = JSON.parse(localStorage.getItem("btnId"));
  const singleRest = dataList.find((item) => item.id == btnId);
  return (
    <div className="wrapper-about">
      <i onClick={() => navigate(-1)} className="bx bxs-left-arrow-square"></i>
      <iframe className="ifr" src={singleRest.webApp}></iframe>
      <div className="about-rest">
        <div className="imge">
          <img className="imge" src={singleRest.image} alt="" />
        </div>
        <p>
          {" "}
          <b>NAME: </b> {singleRest.name}
        </p>
        <p>
          <b>ADDRESS: </b> {singleRest.address}
        </p>
        <p>
          <b>REVIEWS: </b> {singleRest.rate}
        </p>
      </div>
    </div>
  );
};
