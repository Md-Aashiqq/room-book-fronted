import React, { useEffect, useState } from "react";
import Booking from "./Booking";
import "./RoomPage.css";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { useParams } from "react-router-dom";
import axios from "axios";
const Roompage = () => {
  const { id } = useParams();

  useEffect(() => {
    fetchRoom(id);
  }, [id]);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRoom = async (roomId) => {
    console.log(roomId);
    const data = await axios.get(`http://localhost:3001/${roomId}`);

    console.log(data.data.room);

    setData(data.data.room);
    setLoading(false);
  };

  return (
    <div className="room__page">
      {!loading && (
        <>
          {" "}
          <div className="detail_section">
            <div className="page_header">
              <h1 className="page_title">{data.name}</h1>
              <div>
                <h4 className="rating"> {data.ratingsAverage} </h4>
                <h4 className="host_name">Hosted by Ashick</h4>
              </div>
            </div>
            <div className="img_section">
              <img src={data.imagesURL} alt="" />
            </div>
            <div className="features">
              <h1> Features </h1>
              <div className="feature">
                {" "}
                <span>
                  <AcUnitIcon color="primary" size={16} />{" "}
                </span>
                You’ll have the flat to yourself.
              </div>
              <div className="feature">
                <span>
                  <AcUnitIcon color="primary" size={16} />{" "}
                </span>
                This host has committed to Airbnb's 5-step enhanced cleaning
                process..
              </div>
              <div className="feature">
                {" "}
                <span>
                  <AcUnitIcon color="primary" size={16} />{" "}
                </span>
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for their guests
              </div>
              <div className="feature">
                {" "}
                <span>
                  <AcUnitIcon color="primary" size={16} />{" "}
                </span>
                100% of recent guests gave the check-in process a 5-star rating.
              </div>
            </div>

            <div className="description">
              <h1> Description </h1>
              {data.description}
            </div>
            <div className="offers">
              <h1> Offers we Have !! </h1>
              <div className="offer">Kitchen</div>
              <div className="offer">Free parking on premises</div>
              <div className="offer">TV</div>
              <div className="offer">Washing machine</div>
            </div>
          </div>
          <div className="booking_section">
            <Booking data={data.avalRooms} id={data._id} />
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Roompage;
