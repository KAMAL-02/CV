import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Kamal",
  initials: "Mr",
  location: "Delhi, INDIA",
  locationLink: "https://www.google.com/maps/place/Delhi",
  about:
    "This is Kamal Nayan Chaudhary, A Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "I am a Full Stack Engineer with a strong focus on backend development. I have built and contributed to a various projects, leveraging my expertise in Node.js,Hono.js,  PostgreSQL, and frameworks like Next.js and React. My passion lies in designing scalable and efficient server-side architectures while ensuring seamless integration with front-end systems. Over the years, I've also honed my skills in data structures and algorithms enabling me to tackle complex problems and deliver optimized solutions",
  avatarUrl: "./Portfolio pic.jpg",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "Kamalnayan403@gmail.com",
    tel: "+91 7488300425",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/KAMAL-02",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kamal12",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Kamal__Dev",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "KCC institute of technology and management",
      degree: "BTech(CSE)",
      start: "2021",
      end: "2025",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "MongoDb",
    "Hono.js/cloudflare",
    "Tailwind/Bootstrap",
    "HTML5",
    "Css3",
    "PrismaORM",
    "Docker",
  ],
  projects: [
    {
      title: "LinkUp",
      techStack: [
        "TypeScript",
        "Next.js",
        "Vite",
        "Convex",
        "Clerk",
      ],
      description: "A platform to chat with other users in real-time",
      // logo: ConsultlyLogo,
      link: {
        label: "LinkUp",
        href: "https://link-up-three.vercel.app/",
      },
    },
    {
      title: "CodeHub",
      techStack: ["Javascript", "React", "MongoDb", "Node.js", "Tailwind"],
      description:
        "A platform to interact with the GitHub API, which provides information about GitHub users.",
      // logo: MonitoLogo,
      link: {
        label: "CodeHub",
        href: "https://codehub-d7oo.onrender.com/",
      },
    },
    {
      title: "StayNest",
      techStack: ["Node.js", "Javascript", "Bootstrap", "Html", "MongoDB"],
      description:
        "A platform where you can Rent your space and browse different places",
      // logo: JarockiMeLogo,
      link: {
        label: "stayNest",
        href: "https://staynest-zd60.onrender.com/listings",
      },
    },
    {
      title: "BlogHub",
      techStack: ["Typescript", "React", "Hono.js", "PostgreSQL", "Zod"],
      description:
        "Blog Hub is a platform that allows users to create, manage, and share blog content easily",
      logo: BarepapersLogo,
      link: {
        label: "BlogHub",
        href: "https://blog-hub-two.vercel.app/",
      },
    },
  ],
  work: [
    {
      company: "Parabol",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2021",
      end: "2024",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
  ],
} as const;
