import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

import "./Booking.css";
import { useDataLayerValue } from "./Datalayer";

function Room({ value, aval, clickHandler }) {
  const [select, setSelect] = useState(false);

  // var stripe = Stripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

  const CLickHandler = (value) => {
    setSelect(!select);
    clickHandler(value);
  };

  const style = {
    backgroundColor: aval === "false" ? (select ? "#fff" : "#0080ff") : "black",
    pointerEvents: aval === "true" && "none",
  };

  return (
    <>
      <div>
        <div
          style={style}
          onClick={() => CLickHandler(value)}
          className={select ? "room_number select" : "room_number"}
        >
          {value}
        </div>
      </div>
    </>
  );
}

function Booking({ data, id }) {
  const [{ isLogin, token }, dispatch] = useDataLayerValue();
  const stripe = window.Stripe(
    "pk_test_51JJB80SDRpM2Qwe5V1DoDfVePuetvBuJBm5pdwplP7o4rHnhoO3k9k0eYqobtg8qugIIF6TYG6VvfmCL25zESsgl00Hw2wsIeC"
  );
  const [rooms, setRooms] = useState(data);
  const [selectRooms, setSelectRooms] = useState([]);

  console.log(rooms);

  const history = useHistory();

  const checkOutHandler = async (roomId) => {
    console.log(selectRooms);

    // let roomsSelect = ''

    // selectRooms.map((item, index) => {
    //   roomsSelect+=item
    // })

    console.log(token);
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };

    try {
      const session = await axios.get(
        `http://localhost:3001/booking//checkout-session/${roomId}/?room=${selectRooms[0]}`,
        { headers }
      );

      console.log(session.data.session.id);
      await stripe.redirectToCheckout({
        sessionId: session.data.session.id,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const clickHandler = (value) => {
    setSelectRooms((data) => [...data, value.toString()]);
  };

  return (
    <>
      <div className="booking__section">
        {rooms.map((item, index) => {
          return (
            <Room
              aval={item.ocp}
              value={index + 1}
              key={index}
              clickHandler={clickHandler}
            />
          );
        })}
      </div>

      {isLogin ? (
        <div className="booking__btn" onClick={() => checkOutHandler(id)}>
          Checkout Now
        </div>
      ) : (
        <div className="booking__btn" onClick={() => history.push("/login")}>
          Login Now
        </div>
      )}
    </>
  );
}

export default Booking;
