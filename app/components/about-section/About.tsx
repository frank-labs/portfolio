import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        A Problem Solver
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            My passion lies in solving problems and creating seamless solutions. With a strong foundation in backend development, I have built efficient, scalable systems that keep businesses running smoothly. Over time, I’ve expanded my skill set to the frontend, focusing on improving user interfaces and enhancing the user experience. My goal is to bridge the gap between functionality and design, ensuring the end product isn’t just powerful but also intuitive and enjoyable to use.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            I embrace challenges as opportunities to grow. Every project I tackle pushes me to think critically, experiment with new ideas, and refine my approach. Whether it’s debugging complex backend systems, optimizing performance, or crafting user-friendly interfaces, I bring a problem-solving mindset that drives results. I believe every challenge offers a chance to learn something new, and I approach each one with a passion for innovation and continuous improvement.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            Wanna learn
            more? Here&apos;s <br className="hidden md:block" />
            <Link
              className="underline"
              href={
                "https://drive.google.com/file/d/1nML1KNWYUoyHTSNL4qU5KYSKyvd0AX8q/view?usp=drive_link"
              }
            >
              my résumè
            </Link>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frontend Skills
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript(ES6+), React, Next.js, TypeScript, Vue.js, Angular, HTML5, Bootstrap.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Backend Skills
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Java, Python, Spring boot, Spring web, Django, Flask, SQL, JPA, Kafka.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Other Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Nginx, Docker, Kubernetes, Enterprise service bus, Jenkins, Maven, Gradle, Swagger,
              PL/SQL, SQL Server, XML, JSON, PowerShell, Bash, Data Integration/ETL, Jira, Confluence.
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
