import { useEffect, useRef } from "react";
import profileImg from "/src/assets/images/profile.webp";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  /**
   * Sets up a scroll-triggered animation using GSAP and ScrollTrigger.
   * Animates the opacity and position of the heading and body elements when the user scrolls to the specified section.
   * @param {Object} aboutSection - Reference to the section element that triggers the animation.
   * @param {Object} heading - Reference to the heading element to be animated.
   * @param {Object} body - Reference to the body element to be animated.
   */
  useEffect(() => {
    const animateElements = () => {
      const animationTimeline = gsap.timeline();
      animationTimeline.to(heading.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0);
      animationTimeline.to(body.current, { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 }, 0.2);

      ScrollTrigger.create({
        trigger: aboutSection.current,
        start: "top 400px",
        animation: animationTimeline,
        toggleActions: "play none none none",
      });
      ScrollTrigger.refresh();
    };

    animateElements();
  }, [aboutSection]);

  return (
    // Try using max width to contain the size of the container
    <section ref={aboutSection} aria-label="about me">
      <Heading title="about me" />
      <div className="mt-10 flex flex-col items-start gap-8 md:flex-row lg:gap-10 ">
        <div className="top-28 overflow-hidden rounded-md md:sticky md:w-1/2">
          <img
            ref={profile}
            loading="lazy"
            className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
            src={profileImg}
            width="600"
            height="800"
            alt="A photo of Ayush."
          />
        </div>
        <div className="top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2">
          <div className="w-full space-y-4 2xl:space-y-10">
            <h3
              ref={heading}
              className="translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0"
            >
              A brief intro, who am I?
            </h3>
            <p ref={body} className=" translate-y-10 text-body-1 2xl:text-4xl opacity-0">
              My name is Ayush and I am a full-stack software developer working for two years, professionally now.
              <br></br>
              <br></br>Passionate full-stack developer with a love for diverse projects and global collaboration.
              Excels in crafting innovative solutions while working seamlessly with teams worldwide. My portfolio showcases a dynamic journey of skillful development and collaborative endeavors.
              <br></br>
              <br></br>
              
Let's collaborate on your next project! Together, we can turn ideas into impactful digital solutions.{" "}
              <a
                className="underline duration-300 ease-in-out hover:text-secondary-700"
                href="https://www..com/channel/UCBOAB9RV647G93GxLhEXleA"
              >
                Resume.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
