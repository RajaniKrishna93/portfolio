import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import Pageheadercontent from "../../components/content/Pageheadercontent";
import { Animate } from "react-simple-animate";
import { DiCss3Full, DiNpm } from "react-icons/di";
import { FaHtml5, FaDev } from "react-icons/fa";
export default function Aboutme() {
  const personalDetail = [
    {
      label: "Name",
      value: "RAJANI KRISHNA PR",
    },
    {
      label: "Email",
      value: "rajanikrishnapr@gmail.com",
    },
    {
      label: "Address",
      value: "Trivandrum India",
    },
    {
      label: "Contact",
      value: "9048699715",
    },
    {
      label: "Qualification",
      value: "B.tech",
    },
    {
      label: "skill",
      value: "Reactjs",
    },
  ];

  const jobSummary =
    "I am a React js developer with 6 months of professional experience. During my academic journey, I developed a strong foundation in React JS development, gaining expertise in building modern web applications. My coursework included hands-on experience in front-end development, utilizing React JS to create responsive and interactive user interfaces. I also engaged in practical projects and internships where I honed my skills in state management, component-based architecture, and integrating APIs.";
  return (
    <section id="about" className="about">
      <Pageheadercontent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalwrapper">
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="PersonalInfoHeaderText">Personal Information</h3>
            <ul>
              {personalDetail.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__serviceswrapper">
          <Animate
            play
            duration={1.5}
            delay={0}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__serviceswrapper__innercontent">
              <div>
                <FaDev size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiCss3Full size={60} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <DiNpm size={80} color="var(--yellow-theme-main-color)" />
              </div>
              <div>
                <FaHtml5 size={60} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}
