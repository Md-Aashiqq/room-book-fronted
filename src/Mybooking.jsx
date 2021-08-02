import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./Booking.css";
import Card from "./Card";
import { useDataLayerValue } from "./Datalayer";

function Mybooking() {
  const [myroom, setMyroom] = useState([]);

  const [{ isLogin, token }, dispatch] = useDataLayerValue();
  const history = useHistory();
  useEffect(() => {
    if (isLogin) {
      fetchBooking();
    } else {
      history.push("/login");
    }
  }, [isLogin]);

  const fetchBooking = async () => {
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };

    try {
      const data = await axios.get(`http://localhost:3001/booking/myroom`, {
        headers,
      });

      console.log(data.data.tours);
      setMyroom(data.data.tours);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="home__section">
      {myroom.map((item, index) => {
        return (
          <Card
            key={index}
            src={item.imagesURL}
            title={item.name}
            description={item.summary}
            _id={item._id}
            price={item.price}
          />
        );
      })}
    </div>
  );
}

export default Mybooking;
