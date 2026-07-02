import { Link } from "react-router-dom";
import {
  Code2,
  Layout,
  Server,
  Layers,
  ArrowRight,
  Database,
  Smartphone,
  GitBranch,
  Github,
  Figma,
  Mail,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import ContactForm from "../components/ContactForm";
import cuya from "../assets/cuya.jpeg";
import flawyu from "../assets/flawyu.jpeg";
import { useState, useEffect } from "react";

export default function Home() {
  useReveal();

const skills = [
  {
    name: "HTML",
    icon: <Layout size={24} />,
  },
  {
    name: "CSS",
    icon: <Layers size={24} />,
  },
  {
    name: "JavaScript",
    icon: <Code2 size={24} />,
  },
  {
    name: "PHP",
    icon: <Server size={24} />,
  },
  {
    name: "React",
    icon: <Code2 size={24} />,
  },
  {
    name: "Laravel",
    icon: <Server size={24} />,
  },
  {
    name: "MySQL",
    icon: <Database size={24} />,
  },
  {
    name: "Flutter",
    icon: <Smartphone size={24} />,
  },
  {
    name: "PostgreSQL",
    icon: <Database size={24} />,
  },
  {
    name: "Git",
    icon: <GitBranch size={24} />,
  },
  {
    name: "GitHub",
    icon: <Github size={24} />,
  },
  {
    name: "Figma",
    icon: <Figma size={24} />,
  },
  {
    name: "Postman",
    icon: <Mail size={24} />,
  },
];

  // Typing effect state
  const [displayedName, setDisplayedName] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullName = "Siti Yayuh Addawiyyah Pitalokasari";
  const highlightedName = "Addawiyyah Pitalokasari";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedName(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 250); // Adjust speed here (100ms per character)

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-cream/30 px-4 sm:px-6 md:px-8">
        <div className="absolute top-20 right-10 md:right-24 w-64 h-64 md:w-96 md:h-96 rounded-full bg-pink/30 blur-3xl pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-pink/20 blur-2xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink/5 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 md:gap-12 items-center pt-20 relative z-10">
          <div className="animate-fade-up space-y-6 text-center md:text-left">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-4xl text-maroon leading-tight">
              {displayedName}
              {!isTypingComplete && (
                <span className="inline-block w-0.5 h-6 sm:h-7 md:h-8 bg-pink ml-1 animate-pulse"></span>
              )}
            </h1>

            <p className="font-body text-maroon/70 text-sm sm:text-base md:text-1xl leading-relaxed max-w-md mx-auto md:mx-0">
              Here, you will find various information about my journey, the projects I am working on, and some thoughts I would like to share. Thank you for visiting!
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <Link
                to="/portfolio"
                className="group flex items-center gap-2 bg-gradient-to-r from-maroon to-maroon/80 hover:bg-maroon/80 text-cream font-body text-xs sm:text-sm px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-maroon/20"
              >
                View Portfolio
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </Link>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 border-2 border-maroon/30 text-maroon font-body text-xs sm:text-sm px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:border-pink hover:bg-pink/5 transition-all duration-300 hover:translate-y-[-2px]"
              >
                Contact Me
              </a>
            </div>
          </div>
          {/* IMAGE */}
          <div className="reveal-left flex justify-center md:justify-end w-full">
            <div className="relative group mx-auto md:mx-0">
              <div className="absolute -inset-4 rounded-full border-2 border-pink/40 animate-pulse-slow" />
              <div className="absolute -inset-8 rounded-full border border-pink/20" />
              <div className="absolute -inset-12 rounded-full border border-pink/10" />

              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-pink/20 to-transparent z-10" />

                <img
                  src={cuya}
                  alt="..."
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="absolute -top-4 -left-4 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-pink animate-pulse" />
              <div className="absolute bottom-8 -right-6 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-maroon" />
              <div className="absolute top-20 -right-8 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-pink/50" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="py-20 md:py-28 px-5 md:px-6 bg-gradient-to-b from-cream to-white"
      >
        <div className="max-w-6xl mx-auto ">
          {/* CONTENT */}
          <div className="reveal-right">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-pink" />
              <p className="text-maroon/50 text-xs tracking-[0.35em] uppercase font-body">
                About Me
              </p>
            </div>

            <h2 className="font-heading text-3xl md:text3xl leading-tight text-maroon mb-6">
              Passionate About Technology
            </h2>

            <p className="text-maroon/70 leading-relaxed text-base md:text-1xl mb-5">
              Hi! I'm{" "}
              <span className="font-semibold text-maroon">
                Siti Yayuh Addawiyyah Pitalokasari
              </span>
              , usually called{" "}
              <span className="text-pink font-semibold">Yayuh or Yuha</span>.
            </p>

            <p className="text-maroon/70 leading-relaxed text-base md:text-1xl mb-5">
              I am a Software and Game Development student who enjoys learning
              about web development, UI/UX design, and modern technology. My
              curiosity about how websites and applications work motivates me to
              continue exploring and improving my skills every day.
               I believe technology is not only about coding, but also about
              creating experiences that are useful, meaningful, and visually
              engaging for people.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {["Frontend", "Backend", "UI/UX", "Responsive Design"].map(
                (item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-maroon/5 border border-maroon/10 text-sm text-maroon hover:bg-maroon hover:text-white transition-all duration-300"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section
        id="learning"
        className="py-24 px-6 bg-gradient-to-b from-white to-cream/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-px bg-pink" />
              <p className="text-maroon/50 text-xs tracking-[0.3em] uppercase font-body font-semibold">
                Currently Learning
              </p>
              <div className="w-8 h-px bg-pink" />
            </div>

            <h2 className="font-heading text-3xl md:text-3xl text-maroon">
              Skills & Tools
            </h2>

            <div className="w-12 h-px bg-pink mx-auto mt-5" />
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="group relative"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="relative">
                  <div className="bg-white border border-pink/30 rounded-full px-4 md:px-5 py-2.5 flex items-center gap-2 hover:border-maroon hover:text-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <span className="text-maroon group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="font-body font-medium text-maroon text-sm">
                      {skill.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
