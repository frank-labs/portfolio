import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Blog",
      gitLink: "https://github.com/frank-labs/frank-labs.github.io",
      liveLink: "https://blog.optiontruth.com/",
      about:
        "I started this blog to journal my thoughts and technical journey, and to push myself to learn new things and stay productive.",
      stack: ["Jekyll", "HTML", "Ruby", "CSS", "JavaScript", "GitHub Actions"],
      img: "/blog.png",
    },
    {
      title: "Bookstore",
      gitLink: "https://github.com/frank-labs/bookstore_frontend_react",
      liveLink: "https://github.com/frank-labs/bookstore_frontend_react",
      about:
        "A bookstore app that allows users to browse books, view details, and manage book collections. Designed for a seamless user experience.",
      stack: ["React", "TypeScript", "Vite", "Material UI"],
      img: "/bookstore.png",
    },
    {
      title: "Movie Lover",
      gitLink: "https://github.com/frank-labs/movie_lover",
      liveLink: "https://movielover.optiontruth.com",
      about:
        "A fun tool for checking information about any country in the world such as the country’s native name, currency, population, and border countries. It features dynamic routing for each country and a theme switch.",
      stack: ["React", "React-Router", "JavaScript", "TailwindCSS"],
      img: "/movie_lover.png",
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
