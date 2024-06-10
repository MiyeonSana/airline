const GreatFares = () => {
  return (
    <section>
      <div
        className="GreatFares"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
      >
        <main
          className="davao"
          data-aos="fade-up-right"
          data-aos-duration="2000"
        >
          <img src="../davao.jpg" alt="" className="w-100" />
          <article className="shadow">
            <h4>Davao</h4>
            <p> 06 Feb 2023 - 11 Feb 2023</p>
            <p>Economy From</p>
            <h2>NGN 557318</h2>
          </article>
        </main>

        <main className="honolulu">
          <div className="d-flex justify-content-between gap-2">
            <div className=" class">
              <img src="../honolulu.jpg" alt="" />
              <article className="shadow">
                <h4>Honolulu</h4>
                <p> 13 Feb 2023 - 18 Feb 2023</p>
                <p>Economy From</p>
                <h2>NGN 498318</h2>
              </article>
            </div>
            <div className=" class">
              <img src="../seoul.jpg" alt="" />
              <article className="shadow">
                <h4>Seoul</h4>
                <p> 20 Feb 2023 - 25 Feb 2023</p>
                <p>Economy From</p>
                <h2>NGN 417318</h2>
              </article>
            </div>
          </div>

          <div className="d-flex  gap-2 justify-content-between align-items-end">
            <div className=" class">
              <img src="../taipei.jpg" alt="" />
              <article className="shadow">
                <h4>Taipei</h4>
                <p> 23 Feb 2023 - 03 Mar 2023</p>
                <p>Economy From</p>
                <h2>NGN 656318</h2>
              </article>
            </div>
            <div className=" class">
              <img src="../tokyo.jpg" alt="" />
              <article className="shadow">
                <h4>Tokyo</h4>
                <p> 13 Feb 2023 - 18 Feb 2023</p>
                <p>Economy From</p>
                <h2>NGN 498318</h2>
              </article>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};
export default GreatFares;
