import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
// import heroPortrait from "@/assets/hero-portrait.jpg";
// import project2 from "@/assets/project-2.jpg";
// import project3 from "@/assets/project-3.jpg";
// import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import kurazlogo from "@/assets/kurazlogo.jpg";
import tenamart from "@/assets/tenamart.jpg";
import { Description } from "@radix-ui/react-toast";
import hulogo from "@/assets/hu.png";
import letatech from "@/assets/letatech.png";
import neweva from "@/assets/neweva.png";
import port from "@/assets/port.png";
import eslogo from "@/assets/ESSS-LOGO.png";
import amazon from "@/assets/amazon.jpg";
import netflix from "@/assets/netflix1.jpg";
import teamflow from "@/assets/teamflow.png";
import codebattle from "@/assets/codebattle.png";
import devquotes from "@/assets/devquotes.png";
import movieden from "@/assets/movieden.png";
import stackstep from "@/assets/stackstep.jpg";
import emailjs from "@emailjs/browser";
const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message must be less than 1000 characters"),
});

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    const serviceId = "service_a0obj9u"; // you already have this
    const templateId = "template_m2ksaz6"; // create in EmailJS dashboard
    const publicKey = "BkE-B3aAzC0R3UA4u"; // from EmailJS account

    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast({
          title: "Message failed!",
          description: "Something went wrong. Please try again later.",
        });
      });
  };

  const projects = [
    {
      title: "StackStep",
      description:
        "StackStep turns learning into building.Phased, project‑based roadmaps powered by AI help developers master tech stacks by shipping real projects, not reading endless docs.",
      image: stackstep,
      tags: ["React", "Express", "MongoDB"],
      link: "https://stack-step.vercel.app/",
    },
    {
      title: "Code battle",
      description:
        "A modern, real-time coding challenge platform built with React, Node.js, and WebSockets. Features include user authentication, coding challenges, real-time duels, and a dynamic leaderboard.",
      image: codebattle,
      tags: ["React", "Express", "MongoDB"],
      link: "https://github.com/SifanGeremu/codebattle",
    },
    {
      title: "Teamflow",
      description:
        "Built Teamflow, a Notion‑style productivity app with collaborative workspaces and integrated real‑time chat. Designed for seamless team collaboration, combining document editing, task management, and instant communication in one platform.",
      image: teamflow,
      tags: ["Next.js", "GraphQL", "PostgreSQL"],
      link: "https://github.com/SifanGeremu/teamflow-backend",
    },
    {
      title: "DevQuotes",
      description:
        "Created DevQuotes, a web app that curates and displays inspiring quotes from developers. Built with a modern frontend and scalable backend to deliver a simple, engaging platform for daily motivation and tech wisdom",
      image: devquotes,
      tags: ["React.js", "Express.js", "MySQL"],
      link: "https://github.com/SifanGeremu/devquotes-project",
    },
    {
      title: "MovieDen",
      description:
        "Movieden is your ultimate movie den — stream, discover, and chat about films with friends in real time. Think Netflix meets a cozy cinema hangout, built to make movie nights interactive and unforgettable.",
      image: movieden,
      tags: ["React", "Shadcn-ui", "Tailwind"],
      link: "https://github.com/SifanGeremu/moviestreamer",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Built a full‑stack Amazon clone with cart, authentication, and Stripe payments using React, Node.js, Express, and Mysql.",
      image: amazon,
      tags: ["React", "Node.js", "Stripe"],
      link: "https://github.com/SifanGeremu/Amazon-replica",
    },
    {
      title: "Movie Streamer",
      description:
        "Built a full‑stack movie streaming site with authentication, personalized recommendations, and secure video playback using React, Tailwind, Node.js, Express, and MongoDB.",
      image: netflix,
      tags: ["React Native", "Firebase", "Plaid"],
      link: "https://github.com/SifanGeremu/Netflix-clone-2025",
    },
  ];

  const blogPosts = [
    {
      id: "1",
      title: "Modern Web Development Best Practices",
      summary:
        "Explore the latest trends and techniques in building scalable web applications with modern frameworks and tools.",
      image: blog1,
      date: "March 15, 2024",
    },
    {
      id: "2",
      title: "SEO Optimization Strategies for 2024",
      summary:
        "Learn essential SEO tactics to improve your website's visibility and ranking in search engine results.",
      image: blog2,
      date: "March 10, 2024",
    },
    {
      id: "3",
      title: "Building Cross-Platform Mobile Apps",
      summary:
        "A comprehensive guide to developing mobile applications that work seamlessly across iOS and Android.",
      image: blog3,
      date: "March 5, 2024",
    },
  ];

  const skills = [
    {
      category: "Programming",
      items: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "C#",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          name: "Rust",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg",
        },
      ],
    },
    {
      category: "Frontend",
      items: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Vue",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Tailwind",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Angular",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Django",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
          name: "Laravel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Spring Boot",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
      ],
    },
    {
      category: "Database",
      items: [
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "SQLite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
        },
      ],
    },
  ];
  const skill = [
    {
      category: "Programming",
      items: [
        {
          name: "JavaScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
        {
          name: "Python",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Java",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "C#",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        },
        {
          name: "Rust",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
        },
      ],
    },
    {
      category: "Frontend",
      items: [
        {
          name: "React",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Vue",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "Next.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "Tailwind",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
        {
          name: "Angular",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        },
        {
          name: "Bootstrap",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          name: "shadcn/ui",
          icon: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4", // GitHub org logo
        },
      ],
    },
    {
      category: "Backend",
      items: [
        {
          name: "Node.js",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Django",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
          name: "Laravel",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        },
        {
          name: "Express",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Spring Boot",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
        },
        {
          name: "FastAPI",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
        },
      ],
    },
    {
      category: "Database",
      items: [
        {
          name: "PostgreSQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
        {
          name: "MongoDB",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Redis",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        },
        {
          name: "MySQL",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "SQLite",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
        },
      ],
    },
  ];

  const experience = [
    {
      company: "TenaMart.",
      logo: tenamart,
      role: "Full-Stack Developer",
      period: "2024 - present",
      location: "Addis Ababa, Ethiopia",
      Description:
        "An online e-commerce platform made specially for Medicines, and help users find any medicine they need.where i Engineered a secure, scalable backend for a medicine e‑commerce platform, enabling fast search and reliable access to any drug users need.",
    },
    {
      company: "Kuraz Technologies.",
      logo: kurazlogo,
      role: "Backend Developer",
      period: "2025- ended",
      location: "Addis Ababa, Ethiopia",
      Description:
        "Developed a Personal Budget Tracker app during my internship at KurazTech, delivering secure backend logic and intuitive financial management features.",
    },
    {
      company: "Ethiopian Space Science Society.",
      logo: eslogo,
      role: "Fullstack Developer",
      period: "2024",
      location: "Addis Ababa Ethiopia",
      Description:
        "Gained hands‑on experience as a Full‑Stack Developer intern at the Ethiopian Space Science Society, building scalable web solutions for scientific innovation. Proven ability to bridge complex technical challenges with impactful results.",
    },

    {
      company: "Letatech Solutions.",
      logo: letatech,
      role: "Frontend Developer",
      period: "2023 - 2024",
      location: "Austin, TX",
      Description:
        "Served as a Frontend Developer at LetaTech, building responsive user interfaces and enhancing web application usability.",
    },
  ];

  const education = [
    {
      institution: "Haramaya University",
      logo: hulogo,
      degree: "Bachelor of Science",
      field: "Computer Science",
      period: "2023 - 2026",
    },
    {
      institution: "Haramaya University",
      logo: hulogo,
      degree: "Bachelor of Arts",
      field: "Management",
      period: "2023 - 2026",
    },
    {
      institution: "Evangadi inc",
      logo: neweva,
      degree: "Full-Stack Development",
      // field: "fullstack",
      period: "2023 - ended",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border-subtle z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-bold">SifanGeremu</h2>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex gap-8 text-sm">
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#blog"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border-subtle">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <a
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#portfolio"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#blog"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={port}
                alt="Professional portrait"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              {/* Titles side by side */}
              <h1 className="flex justify-center lg:justify-start gap-3 flex-wrap font-black mb-6 leading-none tracking-tight">
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground font-outline text-shadow-lg">
                  Sifan
                </span>
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground">
                  Geremu
                </span>
              </h1>

              {/* Roles */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                <span className="text-muted-foreground text-lg sm:text-xl font-medium">
                  Software Engineer
                </span>
                <span className="text-muted-foreground text-lg sm:text-xl">
                  •
                </span>
                <span className="text-muted-foreground text-lg sm:text-xl font-medium">
                  Backend Developer
                </span>
                <span className="text-muted-foreground text-lg sm:text-xl">
                  •
                </span>
                <span className="text-muted-foreground text-lg sm:text-xl font-medium">
                  AI Enthusiast
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed max-w-md lg:max-w-lg mx-auto lg:mx-0">
                Transforming ideas into scalable web and mobile solutions
                blending backend mastery with cutting‑edge AI innovation
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button size="lg" className="group" asChild>
                  <a href="#contact">
                    Get in touch
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </a>
                </Button>

                <Button size="lg" variant="secondary" asChild>
                  <a
                    href="https://drive.google.com/your-resume-link-here"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      {/* <section className="py-10 md:py-12 bg-background-subtle">
        <div className="container mx-auto px-6">
          <blockquote className="text-center max-w-3xl mx-auto">
            <p className="text-3xl md:text-4xl italic text-muted-foreground leading-relaxed">
              "The only way to do great work is to love what you do."
            </p>
            <footer className="mt-6 text-lg text-muted-foreground">
              — Steve Jobs
            </footer>
          </blockquote>
        </div>
      </section> */}

      {/* About Section
      <section id="about" className="py-2">
        <div className="max-w-4xl mx-auto px-2">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">About Me</h2>
          <p className="text-sm md:text-base text-muted-foreground leading-snug">
            I’m a dedicated Software Engineer (Backend & AI Systems) with 4+
            years of experience architecting and delivering scalable digital
            products. My work focuses on secure backend infrastructures and
            AI-driven solutions that solve real-world challenges. I enjoy
            turning ideas into efficient, high-performance applications that
            deliver measurable impact and great user experiences.
          </p>
        </div>
      </section> */}

      <section className="py-10 md:py-14 bg-background-subtle">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-center">
            Experience
          </h2>

          <p className="text-base sm:text-lg md:text-base text-muted-foreground mb-8 text-center">
            Professional journey and career highlights
          </p>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="
            group p-5 md:p-6 rounded-xl border bg-background border-border-subtle 
            hover:border-primary/30 hover:shadow-md transition-all duration-300

            flex flex-col md:flex-row gap-4
          "
              >
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-16 h-16 rounded-xl object-cover border"
                />

                <div className="flex-1">
                  {/* Mobile bigger — Desktop normal */}
                  <h4 className="text-xl sm:text-2xl md:text-xl font-semibold leading-tight">
                    {exp.role}
                  </h4>

                  <p className="text-lg sm:text-xl md:text-base text-muted-foreground font-medium">
                    {exp.company}
                  </p>

                  <p className="text-base sm:text-lg md:text-base text-muted-foreground leading-relaxed mt-1">
                    {exp.Description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-start md:items-center gap-2 mt-2 md:mt-0 text-sm md:text-sm text-muted-foreground">
                  <span className="font-medium bg-background-subtle px-2 py-1 rounded">
                    {exp.period}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="font-medium text-primary/80">
                    {exp.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Education
          </h2>
          <p className="text-muted-foreground mb-8 text-center">
            Academic background and qualifications
          </p>

          <div className="space-y-4">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-4 md:p-5 rounded-xl bg-background-subtle border border-border-subtle hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <img
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl object-cover border border-border-subtle flex-shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4">
                    <div className="min-w-0">
                      <h4 className="font-semibold text-base md:text-lg">
                        {edu.degree} {edu.field}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-muted-foreground md:text-right flex-shrink-0">
                      <span className="font-medium bg-background px-2 py-1 rounded">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-10 md:py-14 bg-background-subtle">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Tech Stack
          </h2>
          <p className="text-muted-foreground mb-8 text-center">
            Technologies and tools I work with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.category}
                className="p-5 rounded-xl bg-background border border-border-subtle hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map((item) => (
                    <span
                      key={item.name}
                      className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md bg-background-subtle text-foreground border border-border-subtle hover:border-primary/50 hover:bg-primary/5 transition-colors duration-300"
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-4 h-4"
                      />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent work showcasing expertise across
              different technologies and industries
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-border-subtle"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary text-white font-semibold rounded-md shadow-lg hover:bg-primary/90 transition-colors"
                  >
                    View Project
                  </a>
                </div>

                {/* Project Info */}
                <div className="p-5 bg-background">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-background-subtle border border-border-subtle rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section
      <section id="blog" className="py-10 md:py-14 bg-background-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development and
              technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border-subtle hover:shadow-lg transition-shadow group"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-2">
                    {post.date}
                  </p>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {post.summary}
                  </p>
                  <Button
                    variant="link"
                    className="p-0 h-auto font-semibold group"
                    onClick={() => navigate(`/blog/${post.id}`)}
                  >
                    Read more
                    <ArrowRight
                      className="ml-1 group-hover:translate-x-1 transition-transform"
                      size={16}
                    />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-10 md:py-14 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Drop me a message
                and let's create something amazing together.
              </p>
            </div>

            <Card className="p-8 md:p-12 border-border-subtle shadow-xl">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                            className="h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-semibold">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project or idea..."
                            {...field}
                            className="min-h-[150px] resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto gap-2 font-semibold"
                  >
                    Send Message
                    <Send size={18} />
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background-subtle border-t border-border-subtle">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Let's work together</h3>
              <p className="text-muted-foreground">
                Get in touch for opportunities or collaborations
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/SifanGeremu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-transform"
                >
                  <Github size={20} />
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/sifan-geremu/?originalSubdomain=et"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-transform"
                >
                  <Linkedin size={20} />
                </Button>
              </a>

              <a href="wins33975@gmail.com">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:scale-110 transition-transform"
                >
                  <Mail size={20} />
                </Button>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border-subtle text-center text-sm text-muted-foreground">
            <p>© 2024 Sifan Geremu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
