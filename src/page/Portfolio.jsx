import React, { useState } from "react";
import {
  ExternalLink,
  BookOpen,
  Youtube,
  Globe,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";

import backendJs from "../assets/sertif/backend dengan javascript.png";
import dasarJs from "../assets/sertif/dasar pemrograman javascript.png";
import dasarWeb from "../assets/sertif/dasar pemrograman web.png";
import financial from "../assets/sertif/financial literacy.png";
import frontend from "../assets/sertif/front end pemula.png";
import k3 from "../assets/sertif/k3.png";
import konsep from "../assets/sertif/konsep pemrograman.png";
import laravelImg from "../assets/sertif/laravel.png";
import reactApp from "../assets/sertif/membuat aplikasi dengan react.png";
import softwareEng from "../assets/sertif/software engineering.png";
import toeic from "../assets/sertif/TOEIC.png";
import aWS from "../assets/sertif/aws.png";
import wordpress from "../assets/sertif/wordpress.png";
import uxfund from "../assets/sertif/UX fundamental.png";
import active from "../assets/sertif/active.jpeg";

import foodWise from "../assets/proje/foodwise.png";
import kypme from "../assets/proje/kypme.png";
import kAI from "../assets/proje/KAI.png";
import lensa from "../assets/proje/lensa.png";
import makeup from "../assets/proje/makeup.png";
import emmo from "../assets/proje/emmo.png";

// Data certificates
const certificates = [
  {
    title: "Most Active Student from Wikrama at Coding Camp 2026",
    image: active,
    year: "2026",
  },
  {
    title: "Backend dengan JavaScript",
    image: backendJs,
    year: "2026",
  },
  {
    title: "Dasar Pemrograman JavaScript",
    image: dasarJs,
    year: "2026",
  },
  {
    title: "TOEIC Excellence Program",
    image: toeic,
    year: "2026",
  },
  {
    title: "Financial Literacy",
    image: financial,
    year: "2026",
  },
  {
    title: "Front End Pemula",
    image: frontend,
    year: "2026",
  },
  {
    title: "Membuat Aplikasi dengan React",
    image: reactApp,
    year: "2026",
  },
  {
    title: "Software Engineering",
    image: softwareEng,
    year: "2026",
  },
  {
    title: "Cloud dan Gen AI di AWS",
    image: aWS,
    year: "2026",
  },
  {
    title: "Wordpress Introduction",
    image: wordpress,
    year: "2025",
  },
  {
    title: "Konsep Pemrograman",
    image: konsep,
    year: "2025",
  },
  {
    title: "Dasar Pemrograman Web",
    image: dasarWeb,
    year: "2024",
  },
  {
    title: "Laravel",
    from: "Dicoding Indonesia",
    image: laravelImg,
    year: "2025",
  },
  {
    title: "UX Fundamental",
    image: uxfund,
    year: "2024",
  },
  {
    title: "K3 (Keselamatan & Kesehatan Kerja)",
    image: k3,
    year: "2024",
  },
];

//skills
const hardSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Laravel",
  "PHP",
  "MySQL",
  "PostgreSQL",
  "Flutter",
];
const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Adaptability",
  "Time Management",
  "Attention to Detail",
];

const education = [
  {
    degree: "SMK Wikrama Bogor",
    school: "Pengembangan Perangkat Lunak dan Gim",
    year: "2024 – Present",
    desc: "Focusing on software development, web technologies, UI/UX design, and database systems.",
  },
  {
    degree: "MTS Fathan Mubina",
    year: "2021 – 2024",
  },
];

const projects = [
  {
    title: "Railway Ticketing System",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind"],
    desc: "A complete railway ticket booking system with train schedules, seat selection, and payment integration.",
    features: [
      "Train schedule management",
      "Real-time seat availability",
      "Ticket booking & payment",
      "Booking history & e-ticket",
    ],
    link: "https://github.com/snheels/KAI-Project",
    linkText: "View on GitHub",
    image: kAI,
  },
  {
    title: "Makeup Online Shop",
    stack: ["React", "Tailwind", "Public API"],
    desc: "Modern e-commerce makeup store integrated with public API for product catalog and shopping cart.",
    features: [
      "Product catalog from API",
      "Filter by category & brand",
      "Shopping cart management",
      "Responsive design",
    ],
    link: "https://github.com/snheels/Makeup-Store",
    linkText: "View on GitHub",
    image: makeup,
  },
  {
    title: "Food Storage Management",
    stack: ["React", "Laravel", "Axios", "Google Oauth", "Google Calendar"],
    desc: "Send reminder through google calendar if the food is close to the expired date",
    features: ["Food Management", "Reminder", "Integrate with google"],
    link: "https://github.com/ShesaDavina/foodwise-app",
    linkText: "View on GitHub",
    image: foodWise,
  },
  {
    title: "Management Project and Employee Productivity Tracker",
    stack: ["Laravel", "React", "MySQL"],
    desc: "Tracking productivity through daily checkin",
    features: ["Create project", "Project progress tracking", "Task management"],
    link: "https://github.com/snheels/Emmo-FE",
    linkText: "View on Github",
    image: emmo,
  },
  {
    title: "Student Portal Design",
    stack: ["Figma", "UI/UX", "Prototyping", "Design System"],
    desc: "Complete student portal UI/UX design including dashboard, class schedule, grade management, and more.",
    features: [
      "Student dashboard design",
      "Event documentation",
      "News",
      "Interactive prototype",
    ],
    link: "https://www.figma.com/design/QCCCwxbBNZCKKzrn0siwP1/WireFrame-LensaPelajar?node-id=0-1&t=p0E242ND652ZlXEQ-1",
    linkText: "View on Figma",
    image: lensa,
  },
  {
    title: "E-commerce",
    stack: ["Figma", "UI/UX", "Prototyping", "Design System"],
    desc: "Simple UI mobile for e-commerce",
    features: ["home page/explore", "Search Product", "Product Catalog"],
    link: "https://www.figma.com/design/644WO3wPIa3rTeaLbNwgAr/kypme?node-id=90-214&t=NxwhfN8zvT7MUf4F-1",
    linkText: "View on Figma",
    image: kypme,
  },
];

export default function Portfolio() {
  useReveal();
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(certificates.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCertificates = certificates.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      {/* ── SKILLS & EDUCATION ── */}
      <section
        id="skills"
        className="py-20 px-6  bg-gradient-to-b from-cream to-white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-14">
            <p className="text-maroon/40 text-xs tracking-[0.3em] uppercase font-body mb-3">
              Learning Path
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-maroon font-light">
              Skills & Education
            </h2>
            <div className="w-12 h-px bg-pink mx-auto mt-5" />
          </div>

          <div className="grid md:grid-cols-2 gap-14">
            <div className="reveal-left">
              <h3 className="font-heading text-xl text-maroon mb-6 flex items-center gap-3">
                <span className="w-5 h-px bg-pink inline-block" /> Hard Skills
              </h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {hardSkills.map((s) => (
                  <span
                    key={s}
                    className="font-body text-xs tracking-wider uppercase px-4 py-2 border border-maroon/20 text-maroon/70 hover:border-maroon hover:bg-maroon hover:text-cream transition-all duration-300 cursor-default rounded-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <h3 className="font-heading text-xl text-maroon mb-6 flex items-center gap-3">
                <span className="w-5 h-px bg-pink inline-block" /> Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="font-body text-xs tracking-wider uppercase px-4 py-2 bg-pink/20 text-maroon hover:bg-pink transition-all duration-300 cursor-default rounded-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="reveal-right">
              <h3 className="font-heading text-xl text-maroon mb-6 flex items-center gap-3">
                <span className="w-5 h-px bg-pink inline-block" /> Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="relative pl-6 border-l-2 border-pink/40 hover:border-pink transition-colors group"
                  >
                    <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-pink border-2 border-white group-hover:bg-maroon transition-colors" />
                    <p className="text-maroon/40 text-xs uppercase tracking-widest font-body">
                      {edu.year}
                    </p>
                    <h4 className="font-heading text-maroon text-lg mt-1">
                      {edu.degree}
                    </h4>
                    <p className="text-maroon font-body text-xs tracking-wide">
                      {edu.school}
                    </p>
                    <p className="text-maroon/60 font-body text-sm mt-2 leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        id="projects"
        className="py-20 px-6 bg-gradient-to-b from-white to-cream/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-14">
            <p className="text-maroon/40 text-xs tracking-[0.3em] uppercase font-body mb-3">
              What I've Built
            </p>
            <h2 className="font-heading text-3xl md:text-3xl text-maroon font-light">
              My Projects
            </h2>
            <div className="w-12 h-px bg-pink mx-auto mt-5" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((proj, i) => (
              <article
                key={proj.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-maroon/5 to-pink/5">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="relative p-6 pb-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.stack.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-body font-semibold uppercase tracking-wider px-2.5 py-1 bg-gradient-to-r from-pink/20 to-maroon/10 text-maroon rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 pt-0 flex flex-col flex-1">
                  <h3 className="font-heading text-maroon text-xl mb-2 group-hover:text-pink transition-colors duration-300">
                    {proj.title}
                  </h3>

                  <p className="text-maroon/60 text-sm font-body leading-relaxed flex-1">
                    {proj.desc}
                  </p>

                  <div className="mt-4 space-y-1.5">
                    {proj.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-pink" />
                        <span className="text-maroon/50 text-xs font-body">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-between w-full px-4 py-2.5 bg-maroon/5 border border-maroon/10 rounded-xl hover:bg-maroon/80 group/link transition-all duration-300"
                  >
                    <span className="text-maroon font-body text-sm font-medium group-hover/link:text-white transition-colors duration-300">
                      {proj.linkText}
                    </span>
                    <ExternalLink
                      size={14}
                      className="text-maroon/60 group-hover/link:text-white group-hover/link:translate-x-1 transition-all duration-300"
                    />
                  </a>
                </div>
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-pink/5 to-transparent pointer-events-none" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATES ── */}
      <section
        id="certificates"
        className="py-20 px-6 bg-gradient-to-b from-cream to-white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="reveal text-center mb-14">
            <p className="text-maroon/40 text-xs tracking-[0.3em] uppercase font-body mb-3">
              Achievement
            </p>
            <h2 className="font-heading text-3xl md:text-3xl text-maroon font-light">
              My Certificates
            </h2>
            <div className="w-12 h-px bg-pink mx-auto mt-5" />
          </div>

          <div className="grid md:grid-cols-2 gap-7 mt-12">
            {currentCertificates.map((cert, i) => (
              <div
                key={`${cert.title}-${currentPage}-${i}`}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                style={{
                  animationDelay: `${i * 100}ms`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink to-maroon transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-pink/20 to-maroon/10">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>

                <div className="p-5 relative">
                  <div className="absolute -top-3 right-5  bg-maroon text-white text-[10px] font-body font-bold px-3 py-1 rounded-full shadow-lg">
                    {cert.year}
                  </div>

                  <h3 className="font-heading text-maroon text-lg leading-snug pr-12 line-clamp-2">
                    {cert.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentPage === 1
                    ? "bg-maroon/5 text-maroon/20 cursor-not-allowed"
                    : "bg-white border border-pink/30 text-maroon hover:border-pink"
                }`}
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`w-10 h-10 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                        currentPage === page
                          ? "bg-maroon text-white shadow-md scale-110"
                          : "bg-white border border-pink/30 text-maroon/60 hover:border-pink hover:text-maroon hover:scale-105"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentPage === totalPages
                    ? "bg-maroon/5 text-maroon/20 cursor-not-allowed"
                    : "bg-white border border-pink/30 text-maroon hover:border-pink"
                }`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}

          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm rounded-full px-4 py-1.5 border border-pink/20">
              <p className="text-maroon/50 text-xs font-body">
                Page {currentPage} of {totalPages}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
