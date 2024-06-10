const Agent = ({ toggle }) => {
  return (
    <div className={` ${toggle == 3 ? "activetabcontent" : "tabcontent"}`}>
      <form action="" className="form-control border-0 w-100">
        <div className="d-flex flex-wrap  align-items-center">
          <div className="m-2">
            <label htmlFor="sinecode">Sine Code</label> <br />
            <input className="form-control" type="text" id="sinecode" />
          </div>
          <div className="m-2">
            <label htmlFor="password">Password</label> <br />
            <input className="form-control" type="password" id="password" />
          </div>
          <div>
            <button className="tabcontentBtn mt-4"> Login</button>
          </div>
          <div className="mt-auto px-3 pt-3 ">
            <p>forgot Password?</p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Agent;
