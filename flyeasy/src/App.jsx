import { react } from "react";
import BookTabs from "./Components/BookTabs";
import GreatFares from "./Components/GreatFares";
import { airplaneImages } from "./data/Models";
import Slideshow from "./Components/Slideshow";
import DefaultLayout from "./Layouts/DefaultLayouts";

function App() {
  return (
    <>
      <DefaultLayout>
        <section>
          <main className="d-flex  justify-content-center align-items-center HomeTop">
            <div>
              <h1 className="px-4 text-center my-4 fw-bold Explore animate__animated animate__heartBeat">
                Travel to new destinations with us.
              </h1>
              <h3 className="text-center Explore my-3 animate__animated animate__flash fw-bold">
                Explore the world together
              </h3>
              <div className="text-center">
                <button className=" border my-5">Book Now</button>
              </div>
            </div>
          </main>
          <Slideshow images={airplaneImages} interval={3000}></Slideshow>
          <BookTabs />
          <GreatFares />
          {/* backgroundImage session  */}
          <article
            className="section row my-4 justify-content-center "
            data-aos="fade-in"
            data-aos-duration="3000"
          >
            <section className="col-sm-6"></section>

            <section className="col-sm-6 p-1 ">
              <div>
                <h3 className="text-light">Never miss an offer</h3>
                <p className="text-light">
                  Subscribe and be the first to receive our exclusive offers.
                </p>
              </div>
              <div>
                <form action="">
                  <div>
                    <label htmlFor="Email" className="text-light ">
                      Email Address
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      className="homeInp border form-control"
                      id="Email"
                    />
                  </div>{" "}
                  <div>
                    <label htmlFor="city" className="text-light">
                      Preferred city of departure
                    </label>{" "}
                    <br />
                    <input
                      type="text"
                      className="homeInp form-control border"
                      id="city"
                    />
                  </div>{" "}
                  <div>
                    <input type="checkbox" id="checkbox" className="my-2" />
                    <label htmlFor="checkbox" className="fs-6  text-light">
                      I would like to get offers and news from FlyEasy i have
                      read and understood the privacy policy
                    </label>
                  </div>
                  <button className="homebtn border mt-3">Subscribe</button>
                </form>
              </div>
            </section>
          </article>
        </section>
      </DefaultLayout>
    </>
  );
}

export default App;
