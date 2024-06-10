const ManageBooking = ({ toggle }) => {
  return (
    <div className={` ${toggle == 1 ? "activetabcontent" : "tabcontent"}`}>
      <form action="" className="form-control border-0 w-100">
        <div className="d-flex flex-wrap align-items-center">
          <div className="form-floating m-2">
            <input
              className="form-control"
              type="text"
              id="reference"
              placeholder="BookingReference"
            />
            <label htmlFor="reference">Booking reference</label>
          </div>
          <div className="form-floating m-2">
            <input
              className="form-control"
              type="text"
              id="last"
              placeholder="Lastname"
            />
            <label htmlFor="last">LastName</label>
          </div>
          <div>
            <button className="tabcontentBtn "> Retrive booking </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ManageBooking;
