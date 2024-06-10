import DefaultLayout from "../Layouts/DefaultLayouts";

const Explore = () => {
  return (
    <DefaultLayout>
      <div className="my-4 p-4 animate__animated animate__shakeY">
        <p className="text-center">FLYING WITH FLY EASY</p>
        <h2 className="text-center">Make it an incredible journey</h2>
        <p className="text-center">
          Explore the Emirates experience and plan an unforgettable trip beyond
          your flight.
        </p>
      </div>

      <section>
        <div className="p-3 ManilaExpore ">
          <main className=" ManilaExp animate__animated animate__backInLeft ">
            <div className=" shadow-lg manilaAvi p-4">
              <div>
                <p className="mt-4">MANILA EXPERIENCE</p>
                <h2>Create Your Manila Experience</h2>
                <div className="underline"></div>
                <p className="my-3">learn more</p>
              </div>
            </div>
          </main>

          {/* firstclass row  */}
          <main className="py-3 FirstClassrow animate__animated animate__bounceInRight">
            <div className=" p-3 shadow classes  manilaAvi2">
              <div>
                <p>cabin features</p>
                <h6>First class</h6>
                <div className="underline"></div>
                <p className="my-2">learn more</p>
              </div>
            </div>

            <div className=" p-3 my-3 shadow classes  manilaAvi3">
              <div>
                <p>cabin features</p>
                <h6>Buisness class</h6>
                <div className="underline"></div>
                <p className="my-2">learn more</p>
              </div>
            </div>

            <div className=" p-3 shadow classes  manilaAvi4">
              <div>
                <p>cabin features</p>
                <h6>Premium-Economy</h6>
                <div className="underline"></div>

                <p className="my-2">learn more</p>
              </div>
            </div>
            <div className=" p-3 my-3 shadow classes  manilaAvi5">
              {" "}
              <div>
                <p>cabin features</p>
                <h6>Economy class</h6>
                <div className="underline"></div>

                <p className="my-2">learn more</p>
              </div>
            </div>
          </main>
        </div>
      </section>
    </DefaultLayout>
  );
};
export default Explore;
