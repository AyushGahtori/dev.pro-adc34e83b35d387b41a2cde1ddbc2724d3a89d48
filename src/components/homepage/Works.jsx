import ibgroup from "/src/assets/images/whether.webp";
import memento from "/src/assets/images/A.webp";
import acc from "/src/assets/images/acc-square.webp";
import daddy from "/src/assets/images/flutter.webp";
import sunnyside from "/src/assets/images/web.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://github.com/AyushGahtori/Weather-app"
            img={ibgroup}
            alt="Android - Whether App... mockup"
            name="Android - Whether App..."
            type="
            My Android weather app, crafted with Kotlin, provides seamless real-time weather updates in a minimalist design. This project significantly enhanced my Android development skills, offering hands-on experience in Kotlin and strengthening my proficiency in UI implementation, API integration, and user input handling. The challenge was expertly managing dynamic weather data for a smooth user experience."
            year="2023"
            tools="Kotlin"
            GitHub="https://github.com/AyushGahtori/Weather-app"
          />
        </div>
        {/* Project #2 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://ayuuuverse.vercel.app/"
            img={memento}
            alt="memento landing page mockup"
            name="Apple Vision Madness"
            type="
            In crafting my portfolio, I dedicated my skills to developing a dynamic website for Apple Vision Pro using React.js and CSS, complemented by other front-end languages. This project not only showcased my proficiency in modern web technologies but also provided invaluable experience in responsive design and user interface optimization. Through meticulous attention to detail, I enhanced my abilities in creating visually appealing and user-friendly interfaces. Implementing complex features sharpened my problem-solving skills, while collaborating with various tools refined my version control practices. The project served as a testament to my commitment to delivering polished and engaging web experiences, reflecting my passion for front-end development...."
            year="2023"
            tools="React.jsx and CSS"
            GitHub="https://github.com/AyushGahtori/Apple-Vision-Pro"
          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://realbusinessaccountants.netlify.app"
            img={acc}
            alt="real business accountant project mockup"
            name="real business accountants"
            type="Web Design • Frontend Development"
            year="2023"
            tools="HTML • CSS • JavaScript • Figma"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link=""
            img={daddy}
            alt="Modern Smart Home UI And Grocery UI"
            name="Modern Smart Home UI And Grocery UI"
            type="Crafting a Modern Smart Home UI and Grocery app using Flutter, C++, Ruby, and other languages has been an enriching journey. The fusion of Flutter for the UI and C++ for backend functionality has imparted a seamless and responsive user experience. Integrating Ruby added versatility to the project, facilitating robust backend operations. This endeavor broadened my expertise in cross-platform development and honed my proficiency in multi-language integration. Navigating the challenges of synchronizing different components underscored my problem-solving skills. Building these applications not only demonstrated the power of Flutter in creating engaging interfaces but also showcased the potential of combining diverse languages for comprehensive software solutions."
            year="2023"
            tools="Flutter C++"
            GitHub={["https://github.com/AyushGahtori/GroceryStoreApp-main", "https://github.com/AyushGahtori/MODERN-SMART-HOME-UI"]}
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
          <Projects
            link="https://github.com/AyushGahtori/web-scraper"
            img={sunnyside}
            alt="Web-Scraper"
            name="Web-Scraper"
            type="
            This Next.js web scraper is designed for tracking e-commerce product details, including price changes and stock availability. Built with Next.js, it leverages Bright Data's webunlocker for efficient data retrieval. The scraper notifies users of price drops and stock updates through automated cron jobs"
            year="2022"
            tools="Next.js MongoDB"
            GitHub="https://github.com/AyushGahtori/web-scraper"
          />
        </div>
      </div>
    </section>
  );
}
