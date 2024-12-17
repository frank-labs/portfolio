"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/western_logo.png",
    jobTitle: "Master Student",
    company: "Western University",
    jobType: "Full Time",
    duration: "Sep. 2023 - Sep. 2024",
    stuffIDid: [
      "Project: Sketchpad with Python tkinter. Tools Used: Python, Tkinter, PyInstaller, Object-oriented programming, GitHub Actions.",
      "Project: Frida intercept DNS demo. Tools Used: Frida, JavaScript.",
      "Project: Online Bookstore. Tools Used: Java, Spring Boot, Vue.js, Vuetify, Bootstrap, RESTful API, JPA, MyBatis, JWT for authentication, Social login.",
      "Project: Deploy WordPress on Google Cloud Kubernetes Engine. Tools Used: Kubernetes, gcloud CLI,Docker.",
      "Project: Traffic light detection using transfer learning with YOLOv8, evaluated with COCO metrics."
    ],
  },
  {
    companyImg: "/GTJA_Logo.jpg",
    jobTitle: "Software Engineer",
    company: "Guotai Junan Securities",
    jobType: "Full Time",
    duration: "Apr. 2016 - Aug. 2023",
    stuffIDid: [
      "Content management system for mobile app development. Tools Used: Java, Spring MVC, JSP, HTML,JavaScript, CSS, MySQL, Tomcat, Nginx.",
      "New content management system. Tools Used: Java, Spring Boot, AngularJS, Bootstrap, MyBatis, Kafka,JWT, RESTful API.",
      "Added a canary deployment feature to the new content management system.",
      "A search system. Tools Used: Java, Elasticsearch, Spring Boot, Kafka.",
      "Various microservices collaborating with other teams/vendors. Tools Used: Spring Boot, Swagger, Kafka,MySQL, Redis, Oracle DB, Enterprise service bus, Jenkins.",
      "Various code snippets using Python to automate browser interactions with Selenium and ChromeDriver.",
      "Set up a Nexus repository server to allow the team to share the jar package. Tools Used: CentOS, RHEL.",
      "Set up Prometheus and Grafana to provide observability and alerts. Tools Used: CentOS, RHEL.",
    ],
  },
  {
    companyImg: "/NWPU_logo.png",
    jobTitle: "Postgraduate Student",
    company: "Northwestern Polytechnical University",
    jobType: "Full Time",
    duration: "Sep. 2013 - Mar. 2016",
    stuffIDid: [
      "Project: Txt book reader on Android.",
      "Project: Android walkie-talkie app within LAN. Things learned: Android, Java, Socket, TCP, Sound processing.",
    ],
  },
  {
    companyImg: "/CQU_logo.png",
    jobTitle: "Undergraduate Student",
    company: "Chongqing University",
    jobType: "Full Time",
    duration: "Sep. 2009 - Jun. 2013",
    stuffIDid: [
      "Project: Temperature monitor & alarm system based on STC51 microcontroller.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title>Experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
