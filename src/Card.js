import React, { useEffect, useState } from "react";

const Card = ({ val }) => {
  const [loc, setLoc] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&APPID=3a0862c4c18e9744a737abb33c15e5e9&q=tashkent`
    )
      .then((res) => res.json())
      .then((data) => setLoc(data));
  }, []);
  return (
    <div className="card p-4">
      <div className="d-flex">
        <h6 className="flex-grow-1">{val}location</h6>
        <h6>
          {new Date().getHours()}:{new Date().getMinutes()}
        </h6>
      </div>
      <div className="d-flex flex-column temp mt-5 mb-3">
        <h1 className="mb-0 font-weight-bold" id="heading">
          13&deg;
        </h1>
        <span className="small grey">Stormy</span>
      </div>

      <div className="d-flex">
        <div className="temp-details flex-grow-1">
          <p className="my-1">
            <img src="https://i.imgur.com/B9kqOzp.png" height="17px" />

            <span> 40 km/h </span>
          </p>

          <p className="my-1">
            <i className="fa fa-tint mr-2" aria-hidden="true"></i>
            <span> 84% </span>
          </p>
          <p className="my-1">
            <img src="https://i.imgur.com/wGSJ8C5.png" height="17px" />
            <span> 0.2h </span>
          </p>
        </div>
        <div>
          <img src="https://i.imgur.com/Qw7npIg.png" width="100px" />
        </div>
      </div>
    </div>
  );
};

export default Card;
