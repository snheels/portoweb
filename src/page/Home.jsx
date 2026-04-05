import { Link } from "react-router-dom";
import {
  Code2,
  Layout,
  Server,
  Layers,
  ArrowRight, 
  Database,
  Smartphone,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import ContactForm from "../components/ContactForm";
import cuya from "../assets/cuya.jpeg";
import flawyu from "../assets/flawyu.jpeg";

export default function Home() {
  useReveal();

  const skills = [
    {
      name: "HTML",
      icon: <Layout size={24} />,
      level: 90,
      desc: "Semantic markup & SEO friendly structure",
    },
    {
      name: "CSS",
      icon: <Layers size={24} />,
      level: 80,
      desc: "Flexbox, Grid, & responsive design",
    },
    {
      name: "JavaScript",
      icon: <Code2 size={24} />,
      level: 75,
      desc: "ES6+, DOM manipulation, & async JS",
    },
    {
      name: "PHP",
      icon: <Server size={24} />,
      level: 65,
      desc: "Server-side scripting & backend logic",
    },
    {
      name: "React",
      icon: <Code2 size={24} />,
      level: 60,
      desc: "Component-based UI development",
    },
    {
      name: "Laravel",
      icon: <Server size={24} />,
      level: 70,
      desc: "PHP framework for web artisans",
    },
    {
      name: "MySQL",
      icon: <Database size={24} />,
      level: 70,
      desc: "Database design & complex queries",
    },
    {
      name: "Flutter",
      icon: <Smartphone size={24} />,
      level: 45,
      desc: "Cross-platform mobile development",
    },
    {
      name: "PostgreSQL",
      icon: <Database size={24} />,
      level: 50,
      desc: "Advanced relational database",
    },
  ];

  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden  bg-gradient-to-b from-white to-cream/30  px-6">
        <div className="absolute top-20 right-10 md:right-24 w-64 h-64 md:w-96 md:h-96 rounded-full bg-pink/30 blur-3xl pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-pink/20 blur-2xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink/5 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center pt-20 relative z-10">
          <div className="animate-fade-up space-y-6">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-maroon leading-tight">
              Siti Yayuh
              <br />
              <span className="text-pink bg-gradient-to-r from-pink to-maroon bg-clip-text text-transparent">
                Addawiyyah Pitalokasari
              </span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-pink to-maroon rounded-full" />

            <p className="font-body text-maroon/70 text-base md:text-lg leading-relaxed max-w-md"> Here, you will find various information
              about my journey, the projects I am working on, and some thoughts
              I would like to share. Thank you for visiting!
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/portfolio"
                className="group flex items-center gap-2 bg-gradient-to-r from-maroon to-maroon/80 text-cream font-body text-sm px-8 py-3 rounded-full hover:from-pink hover:to-maroon transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl hover:shadow-maroon/20"
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
                className="flex items-center gap-2 border-2 border-maroon/30 text-maroon font-body text-sm px-8 py-3 rounded-full hover:border-pink hover:bg-pink/5 transition-all duration-300 hover:translate-y-[-2px]"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 rounded-full border-2 border-pink/40 animate-pulse-slow" />
              <div className="absolute -inset-8 rounded-full border border-pink/20" />
              <div className="absolute -inset-12 rounded-full border border-pink/10" />

              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-pink/20 to-transparent z-10" />

                <img
                  src={cuya} alt="..."
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="absolute -top-4 -left-4 w-3 h-3 rounded-full bg-pink animate-pulse" />
              <div className="absolute bottom-8 -right-6 w-2 h-2 rounded-full bg-maroon" />
              <div className="absolute top-20 -right-8 w-4 h-4 rounded-full bg-pink/50" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        id="about"
        className="py-24 px-6 bg-gradient-to-b from-cream to-white"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div
            className="reveal-left opacity-0 translate-x-[-30px] animate-fade-in-left"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <div className="relative group">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink/10 rounded-full blur-2xl group-hover:bg-pink/20 transition-all duration-500" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-maroon/5 rounded-full blur-2xl group-hover:bg-maroon/10 transition-all duration-500" />
              <div className="relative w-72 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/30 via-transparent to-pink/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <img
                  src={flawyu}
                  alt="Siti Yayuh"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="absolute -bottom-5 -right-5 w-full h-full border-4 border-pink/60 rounded-2xl -z-10 transition-all duration-300 group-hover:-bottom-4 group-hover:-right-4" />

              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-pink/40 animate-pulse" />
              <div className="absolute -bottom-3 -left-3 w-3 h-3 rounded-full bg-maroon/60" />
              <div className="absolute top-1/2 -right-4 w-2 h-2 rounded-full bg-pink" />
            </div>
          </div>

          <div
            className="reveal-right opacity-0 translate-x-[30px] animate-fade-in-right space-y-6"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-px bg-pink" />
                <p className="text-maroon/50 text-xs tracking-[0.3em] uppercase font-body font-semibold">
                  About Me
                </p>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-maroon leading-snug">
                Getting to Know{" "}
                <span className="bg-gradient-to-r from-pink to-maroon bg-clip-text text-transparent">
                  Me Better
                </span>
              </h2>

              <div className="w-16 h-1 bg-gradient-to-r from-pink to-maroon rounded-full mt-5" />
            </div>

            <div className="space-y-4">
              <p className="font-body text-maroon/80 leading-relaxed text-base md:text-lg">
                Hi! I'm{" "}
                <strong className="text-maroon font-bold">
                  Siti Yayuh Addawiyyah Pitalokasari
                </strong>
                , you can call me{" "}
                <strong className="text-pink font-bold">Yayuh or Yuha</strong>.
                My interest and curiosity about the rapid development of
                technology led me to choose the Software Development and Gaming
                program. Here, I have found answers to many technology-related
                questions I had before, such as "How is a website made?" This
                question sparked my curiosity to learn more about technology and
                dive deeper into the field. It is this curiosity that I hope
                will fuel my passion to keep learning.
              </p>
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

            <h2 className="font-heading text-3xl md:text-4xl text-maroon">
              My{" "}
              <span className="bg-gradient-to-r from-pink to-maroon bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-pink to-maroon rounded-full mx-auto mt-4" />
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="group relative"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="relative">
                  <div className="bg-white border-2 border-pink/30 rounded-full px-5 py-2.5 flex items-center gap-2 hover:border-pink hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <span className="text-maroon group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="font-body font-medium text-maroon text-sm">
                      {skill.name}
                    </span>
                    <span className="text-xs text-maroon/40 bg-pink/10 rounded-full px-1.5 py-0.5">
                      {skill.level}%
                    </span>
                  </div>

                  <div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink to-maroon rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
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
