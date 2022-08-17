/* eslint-disable jsx-a11y/anchor-is-valid */
import bike1 from "../images/bike1.jpg";
import bike2 from "../images/bike2.jpg";
import bike3 from "../images/bike3.jpg";
import detail11 from "../images/detail1-1.jpg";
import detail12 from "../images/detail1-2.jpg";
import detail21 from "../images/detail2-1.png";
import detail22 from "../images/detail2-2.jpg";
import detail31 from "../images/detail3-1.jpg";
import detail32 from "../images/detail3-2.jpg";

export const Main = () => {
  return (
    <>
      <main>
        <section class="page__section" id="about-us">
          <div class="container">
            <div class="page__section-about">
              <h2 class="page__section-title">Move Free</h2>
              <p class="page__section-slogan">
                Shift your ride, not gears. Find the fastest way to move in the
                city as the bike adapts intuitively to power the speed you need.
              </p>
            </div>
          </div>
        </section>

        <section class="page__section" id="compare">
          <div class="container">
            <h2 class="page__section-title page__section-title--center">
              Compare Bikes
            </h2>
            <div class="page__section-bikes">
              <div class="page__section-compare bikecard">
                <img src={bike1} alt="sporty 4" class="bikecard__photo" />

                <p class="bikecard__model">Sporty 4</p>
                <p class="bikecard__description">
                  The iconic frame brought to a new performance height as a
                  sporty, active ride.
                </p>
                <p class="bikecard__price">$ 2 590</p>
              </div>

              <div class="page__section-compare bikecard">
                <img src={bike2} alt="spoty 4" class="bikecard__photo" />

                <p class="bikecard__model">Ride in town ST</p>
                <p class="bikecard__description">
                  An open frame for an upright riding position as the most
                  comfortable ride in town.
                </p>
                <p class="bikecard__price">$ 2 590</p>
              </div>

              <div class="page__section-compare bikecard">
                <img src={bike3} alt="spoty 4" class="bikecard__photo" />

                <p class="bikecard__model">Agile ride 3</p>
                <p class="bikecard__description">
                  The lightweight frame that has earned its street tread as a
                  sleek, agile ride.
                </p>
                <p class="bikecard__price">$ 2 090</p>
              </div>
            </div>
          </div>
        </section>

        <section class="page__section" id="details">
          <div class="container">
            <h2 class="page__section-title page__section-title--center">
              The Details
            </h2>

            <div class="detail">
              <div class="detail__photos">
                <div class="detail__photo-container">
                  <img src={detail11} alt="gps" class="detail__photo" />
                </div>

                <div class="detail__photo-container">
                  <img src={detail12} alt="detail 2" class="detail__photo" />
                </div>
              </div>
              <h3 class="detail__title">Auto Unlock</h3>
              <p class="detail__description">
                The app senses when you're nearby to unlock automatically. GPS
                tracking so you know where your bike is and can track it
                anytime.
              </p>
            </div>

            <div class="detail">
              <div class="detail__photos">
                <div class="detail__photo-container">
                  <img src={detail21} alt="gps" class="detail__photo" />
                </div>

                <div class="detail__photo-container">
                  <img src={detail22} alt="detail 2" class="detail__photo" />
                </div>
              </div>
              <h3 class="detail__title">Range and Integrated lights</h3>
              <p class="detail__description">
                The removable battery has up to 70km battery autonomy and weighs
                only 2.4 kg. Lights integrated into the frame give you always-on
                visibility day and night.
              </p>
            </div>

            <div class="detail">
              <div class="detail__photos">
                <div class="detail__photo-container">
                  <img src={detail31} alt="gps" class="detail__photo" />
                </div>

                <div class="detail__photo-container">
                  <img src={detail32} alt="detail 2" class="detail__photo" />
                </div>
              </div>
              <h3 class="detail__title">
                Hydraulic disc brakes and Lightweight
              </h3>
              <p class="detail__description">
                Brakes with total stopping power the second you make contact.
                The removable battery has up to 70km battery autonomy and weighs
                only 2.4 kg. Lights integrated into the frame give you always-on
                visibility day and night.
              </p>
            </div>
            <div class="button">
              <a href="#" class="button__link">
                Explore
              </a>
            </div>
          </div>
        </section>

        <section class="page__section contact-us" id="contacts">
          <div class="container">
            <h2 class="page__section-title page__section-title--center">
              Contact us
            </h2>
            <div class="contact-us__content">
              <form
                action="#"
                class="contact-us__form"
                autocomplete="off"
                id="my_form"
              >
                <input
                  type="text"
                  placeholder="Name"
                  class="contact-us__formfield"
                  minlength="3"
                  maxlength="25"
                  name="name"
                  required
                  id="name"
                />
                <label for="name"></label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  class="contact-us__formfield"
                  required
                  id="email"
                />
                <label for="email"></label>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  class="contact-us__formfield contact-us__formfield--area"
                ></textarea>
                <button class="contact-us__button">Send</button>
              </form>

              <div class="contact-us__information">
                <p class="contact-us__info-title">Phone</p>
                <p class="contact-us__info-contact">
                  <a href="tel:+1 234 5555-55-55">+1 234 5555-55-55</a>
                </p>
                <p class="contact-us__info-title">Email</p>
                <p class="contact-us__info-contact">
                  <a href="mailto:hello@miami.com">hello@miami.com</a>
                </p>
                <p class="contact-us__info-title">Address</p>
                <a
                  href="https://goo.gl/maps/PehV6bjgodhREcEJ9"
                  class="contact-us__info-contact"
                  target="_blank"
                  rel="noreferrer"
                >
                  400 first ave.
                  <br />
                  suite 700Minneapolis,
                  <br /> MN 55401
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
