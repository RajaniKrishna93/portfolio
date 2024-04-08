import React from "react";
import { detail } from "./contactdata";
import { BsInfoCircleFill } from "react-icons/bs";
import Pageheadercontent from "../../components/content/Pageheadercontent";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import {
  FaAddressCard,
  FaCalendar,
  FaFemale,
  FaFlag,
  FaLinkedin,
  FaMailBulk,
  FaMobile,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="Contact" className="contact">
      <Pageheadercontent
        headerText="Contact Me "
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content-wrapper">
        {detail.map((item, i) => (
          <div key={i} className="contact__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(700px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="contact__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div>
                {item.data?.map((detailItem, j) => (
                  <div key={j} className="data-wrapper">
                    <div className="data-wrapper__mail">
                      <FaMailBulk
                        className="seven"
                        size={20}
                        color="var(--yellow-theme-main-color)"
                      />
                      <p>{detailItem.email}</p>
                    </div>
                    <div className="data-wrapper__number">
                      <FaMobile
                        className="one"
                        size={20}
                        color="var(--yellow-theme-main-color)"
                      />
                      <p>{detailItem.phno}</p>
                    </div>
                    <div className="data-wrapper__card">
                      <FaAddressCard
                        className="two"
                        size={20}
                        color="var(--yellow-theme-main-color)"
                      />
                      <p>{detailItem.address}</p>
                    </div>
                    <div className="data-wrapper__date">
                      <FaCalendar
                        className="three"
                        size={20}
                        color="var(--yellow-theme-main-color)"
                      />
                      <p>{detailItem.dob}</p>
                    </div>
                    <div className="data-wrapper__flag">
                      <FaFlag
                        className="four"
                        size={20}
                        color="var(--yellow-theme-main-color)"
                      />
                      <p>{detailItem.nationality}</p>
                    </div>
                    <div className="data-wrapper__gender-content">
                      <FaFemale
                        className="five"
                        size={20}
                        color="var(--yellow-theme-main-color)"
                      />
                      <p>{detailItem.gender}</p>
                    </div>
                    <div className="data-wrapper__profile">
                      <FaLinkedin
                        className="six"
                        size={20}
                        color="var(--yellow-theme-main-color)"
                      />
                      <a
                        className="profile-link"
                        href="https://www.linkedin.com/in/rajani-krishna-4a8061122/?trk=opento_sprofile_details"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                      {/* <p>{detailItem.LinkedIn}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
}
