import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "Android & IOS Development",
    "Full-Stack Software Development",
    "AI development",
    "Casual Game Modding",
  ];

  const toolBoxItems = [
    "Java",
    "React.js",
    "CSS",
    "Kotlin",
    "C",
    "C++",
    "Python",
    "Rust",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="services" />
      <div className="space-y-14">
        <ServiceUi
          title="My Experience:"
          description='With four years of software development experience, my daily commitment to continuous
           learning has been unwavering. Transitioning into professional work two years ago marked a pivotal moment, propelling me to consistently engage with cutting-edge
           technologies and strive for personal growth each day.'
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
