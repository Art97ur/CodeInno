import { useState } from "react";
import { useNavigate } from "react-router";
import { dataList } from "../../staticData";
import "./styles.css";

export const RestaurantsList = ({ getid }) => {
  const [btnId, setBtnId] = useState();
  console.log(btnId);
  const navigate = useNavigate();
  const handleBtnClick = (e) => {
    setBtnId(e.target.id);
    navigate(`/about`);
    localStorage.setItem("btnId", JSON.stringify(e.target.id));
  };
  return (
    <div className="restList">
      {dataList
        .sort((a, b) => (a.rate < b.rate ? 1 : -1))
        .map((item, i) => {
          if (item.id !== 0) {
            return (
              <div key={i} className="wrapper">
                <div
                  className="each-rest"
                  id={item.id}
                  onClick={() => {
                    getid(item.id);
                  }}
                >
                  <div className="img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="desc-rest">
                    <p>{item.name}</p>
                    <p>{item.address}</p>
                    <p>
                      {" "}
                      <b>REVIEWS:</b> {item.rate}{" "}
                    </p>
                  </div>
                </div>
                <button
                  onClick={(e) => handleBtnClick(e)}
                  className="learn-more"
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span id={item.id} className="button-text">
                    More Info
                  </span>
                </button>
              </div>
            );
          }
        })}
    </div>
  );
};
