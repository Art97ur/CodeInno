import { memo } from "react";
import { useNavigate } from "react-router";
import { dataList } from "../../staticData";
import "./styles.css";

export const RestaurantsList = memo(({ getid, setBtnId }) => {
  const navigate = useNavigate();
  const handleBtnClick = (e) => {
    setBtnId(e.target.id);
    navigate("/about");
  };
  return (
    <div className="restList">
      {dataList
        .sort((a, b) => (a.rate < b.rate ? 1 : -1))
        .map(({ name, rate, address, image, id }) => {
          if (id !== 0) {
            return (
              <div key={id} className="wrapper">
                <div
                  className="each-rest"
                  id={id}
                  onClick={() => {
                    getid(id);
                  }}
                >
                  <div className="img">
                    <img src={image} alt="" />
                  </div>
                  <div className="desc-rest">
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>
                      {" "}
                      <b>REVIEWS:</b> {rate}{" "}
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
                  <span id={id} className="button-text">
                    More Info
                  </span>
                </button>
              </div>
            );
          }
        })}
    </div>
  );
});
