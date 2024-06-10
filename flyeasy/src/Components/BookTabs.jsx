import { useState } from "react";
import { FaPlane } from "react-icons/fa";
import Agent from "./Agent";
import Bookflight from "./Bookflight";
import Checkin from "./Checkin";
import ManageBooking from "./ManageBooking";

const BookTabs = () => {
  const [toggle, settoggle] = useState(0);

  const handleTab = (id) => {
    settoggle(id);
  };

  return (
    <main className="booktabs shadow ">
      <div className="d-flex flex-wrap justify-content-between tab-container  ">
        <button
          className={` ${toggle == 0 ? "activeTab" : "tabBtn"}`}
          onClick={() => handleTab(0)}
        >
          <span className="mx-2">
            <FaPlane />
          </span>
          Book a flight
        </button>
        <button
          className={` ${toggle == 1 ? "activeTab" : "tabBtn"}`}
          onClick={() => handleTab(1)}
        >
          Manage my booking
        </button>
        <button
          className={` ${toggle == 2 ? "activeTab" : "tabBtn"}`}
          onClick={() => handleTab(2)}
        >
          Check in Online
        </button>
        <button
          className={` ${toggle == 3 ? "activeTab" : "tabBtn"}`}
          onClick={() => handleTab(3)}
        >
          Agent/Login
        </button>
      </div>
      <Bookflight toggle={toggle} />
      <ManageBooking toggle={toggle} />
      <Checkin toggle={toggle} />
      <Agent toggle={toggle} />
    </main>
  );
};
export default BookTabs;
