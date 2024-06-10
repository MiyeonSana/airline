const Checkin = ({ toggle }) => {
  return (
    <div className={` ${toggle == 2 ? "activetabcontent" : "tabcontent"}`}>
      <form action="" className="form-control border-0 w-100">
        <div className="d-flex flex-wrap align-items-center">
          <div className="m-2">
            <label htmlFor="references">Booking reference</label> <br />
            <input className="form-control" type="text" id="references" />
          </div>
          <div className="m-2">
            <label htmlFor="lastname">LastName</label> <br />
            <input className="form-control" type="text" id="lastname" />
          </div>
          <div>
            <button className="tabcontentBtn mt-4"> Check-in </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Checkin;
