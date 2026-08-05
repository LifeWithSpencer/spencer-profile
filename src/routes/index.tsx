import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Shield,
  Network,
  Terminal,
  Users,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Server,
  Activity,
  Award,
  Lock,
  ChevronRight,
  Code,
  CheckCircle2,
  Menu,
  X,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import spencerPhoto from "@/assets/spencer.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Asafa Mahfuz Abiodun (Spencer) — SOC & Network Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Asafa Mahfuz Abiodun (Spencer). NOC Intern at Galaxy Backbone, SOC Analyst, and student leader specializing in blue team defense.",
      },
      { property: "og:title", content: "Asafa Mahfuz Abiodun (Spencer) — SOC & Network Analyst" },
      {
        property: "og:description",
        content:
          "Portfolio of Asafa Mahfuz Abiodun (Spencer). NOC Intern at Galaxy Backbone, SOC Analyst, and student leader specializing in blue team defense.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCE = [
  {
    role: "Network Operations Centre (NOC) Intern",
    org: "Galaxy Backbone Ltd. — Abuja, Nigeria",
    period: "2026 – Present",
    icon: Server,
    points: [
      "Monitor enterprise network infrastructure to ensure high availability and operational efficiency.",
      "Support incident detection, escalation, and resolution within the Network Operations Centre.",
      "Assist in troubleshooting network and connectivity challenges across systems.",
      "Prepare operational reports and technical documentation while gaining hands-on enterprise IT service delivery experience.",
    ],
  },
  {
    role: "Information Technology Intern (SIWES)",
    org: "SQI College of ICT — Ogbomoso, Oyo State",
    period: "Aug 2025 – Nov 2025",
    icon: Code,
    points: [
      "Completed practical training in software development and web infrastructure.",
      "Developed responsive web applications using HTML, CSS, JavaScript, and Node.js.",
      "Utilized Git and GitHub for team collaboration, version control, and repository administration.",
    ],
  },
];

const SKILLS = [
  {
    title: "Cybersecurity",
    icon: Shield,
    items: [
      "Security Operations (Blue Team)",
      "Incident Response",
      "Threat Intelligence",
      "Security Monitoring",
      "SIEM Fundamentals",
      "Vulnerability Assessment",
    ],
  },
  {
    title: "Networking",
    icon: Network,
    items: [
      "Network Operations",
      "Troubleshooting",
      "TCP/IP, DNS, DHCP",
      "Routing & Switching",
      "Infrastructure Monitoring",
    ],
  },
  {
    title: "Systems & Tools",
    icon: Terminal,
    items: [
      "Linux Administration",
      "Windows Administration",
      "Wireshark & Nmap",
      "Git & GitHub",
      "Technical Documentation",
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    items: ["HTML5 & CSS3", "JavaScript", "Node.js", "Responsive Web Design"],
  },
];

const LEADERSHIP = [
  {
    role: "President",
    org: "National Association of Ikire Students (NAIS), LAUTECH Chapter",
    desc: "Leading student governance initiatives, coordinating executive committee operations, managing stakeholder relations, and directing student advocacy across campus.",
    current: true,
  },
  {
    role: "Public Relations Officer",
    org: "NAIS, LAUTECH Chapter",
    desc: "Directed external communications, student engagement strategies, and official media releases.",
  },
  {
    role: "Director of Documentation",
    org: "Office of the P.R.O., NANS JCC Oyo Axis",
    desc: "Managed record preservation, official reporting, and state-wide student leadership communications.",
  },
  {
    role: "Chief of Staff to President",
    org: "NAOSS, LAUTECH Chapter (2025)",
    desc: "Supervised executive workflow, inter-departmental projects, and administrative operations.",
  },
  {
    role: "Senator",
    org: "NAOSS Senate Council",
    desc: "Represented Ikire, Apomu & Ikoyi Constituency in parliamentary proceedings and policy drafting.",
  },
  {
    role: "Course Representative",
    org: "Department of Computer Science, LAUTECH",
    desc: "Liaised between academic faculty staff and undergraduate computer science students.",
  },
  {
    role: "Committee Chairman",
    org: "NAOSS Senate Mace Procurement Committee",
    desc: "Led resource mobilization and official legislative equipment acquisition projects.",
  },
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mt-4 h-px w-24 bg-gradient-accent" style={{ backgroundImage: "var(--gradient-accent)" }} />
    </div>
  );
}

function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#about" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-widest">
            <Lock className="h-4 w-4 text-primary" />
            SPENCER.SEC
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild size="sm">
              <a href="#contact">Connect</a>
            </Button>
          </div>

          <button
            className="rounded-md border border-border p-2 md:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="flex flex-col gap-1 border-t border-border px-4 py-3 md:hidden">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="about" className="hero-surface border-b border-border/60">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
                <Activity className="h-3.5 w-3.5" />
                SOC Analyst & Network Operations Trainee
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                ASAFA MAHFUZ
                <span className="block text-gradient">ABIODUN (SPENCER)</span>
              </h1>

              <p className="mt-6 max-w-xl text-muted-foreground">
                Cybersecurity Analyst, Network Operations Specialist, and Student Leader. Focused on
                defensive security, incident response, network monitoring, and enterprise digital
                infrastructure defense.
              </p>

              <blockquote className="mt-6 border-l-2 border-primary/60 pl-4 font-mono text-sm italic text-muted-foreground">
                "Every attack leaves evidence. Every defense begins with preparation."
              </blockquote>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" /> GitHub Profile
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://x.com/lifewithspencer" target="_blank" rel="noreferrer">
                    <Twitter className="h-4 w-4" /> X (Twitter)
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="panel glow overflow-hidden p-3">
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src={spencerPhoto.url}
                    alt="Portrait of Asafa Mahfuz Abiodun (Spencer)"
                    className="aspect-[4/5] w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-background/85 px-4 py-3 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      Asafa Mahfuz Abiodun
                    </div>
                    <span className="rounded-sm border border-primary/40 px-2 py-0.5 font-mono text-[10px] tracking-widest text-primary">
                      VERIFIED ID
                    </span>
                  </div>
                </div>
              </div>

              <div className="panel overflow-hidden">
                <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                  <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <Terminal className="h-3.5 w-3.5 text-primary" />
                    system_status.sh
                  </div>
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-chart-3/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                  </div>
                </div>
                <div className="space-y-2 p-4 font-mono text-xs sm:text-sm">
                  {[
                    ["HANDLE", "SPENCER"],
                    ["ROLE", "NOC Intern @ Galaxy Backbone"],
                    ["LEADERSHIP", "President, NAIS LAUTECH"],
                    ["FOCUS", "Blue Team / SOC / Incident Response"],
                  ].map(([k, v]) => (
                    <p key={k} className="text-muted-foreground">
                      <span className="text-primary">{k}:</span> {v}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <SectionHeading eyebrow="Career Journey" title="Professional Experience" />
            <div className="space-y-6">
              {EXPERIENCE.map((job) => (
                <article key={job.role} className="panel p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="flex items-center gap-2 text-lg font-semibold">
                        <job.icon className="h-5 w-5 text-primary" />
                        {job.role}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{job.org}</p>
                    </div>
                    <span className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <SectionHeading eyebrow="Technical Matrix" title="Core Competencies" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SKILLS.map((group) => (
                <div key={group.title} className="panel p-6">
                  <div className="flex items-center gap-2">
                    <group.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">{group.title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="font-mono text-xs text-muted-foreground">
                        <span className="text-primary">▸</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <SectionHeading eyebrow="Governance & Service" title="Leadership Experience" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {LEADERSHIP.map((role) => (
                <div
                  key={role.role + role.org}
                  className={`panel p-6 ${role.current ? "glow" : ""}`}
                >
                  {role.current && (
                    <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
                      <Award className="h-3 w-3" /> Current Leadership
                    </span>
                  )}
                  <h3 className="text-lg font-semibold">{role.role}</h3>
                  <p className="mt-1 flex items-start gap-2 text-sm text-primary/80">
                    <Users className="mt-0.5 h-4 w-4 shrink-0" />
                    {role.org}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <SectionHeading eyebrow="Academic Background" title="Education" />
            <div className="panel flex flex-col gap-6 p-6 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Bachelor of Science (B.Sc.) in Computer Science</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ladoke Akintola University of Technology (LAUTECH), Nigeria
                </p>
                <p className="mt-1 font-mono text-xs text-primary">Status: In View</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Systems Architecture", "Network Security", "Algorithms"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Get In Touch" title="Let Us Connect" />
              <p className="max-w-md text-muted-foreground">
                Open to security operations, network infrastructure, incident response opportunities,
                and technical collaborations.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:mahfuzasafa07@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  mahfuzasafa07@gmail.com
                </a>
                <p className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  Abuja, Nigeria
                </p>
                <p className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Globe className="h-4 w-4 text-primary" />
                  mahfuzasafa.com
                </p>
              </div>

              <div className="mt-8 flex gap-3">
                <Button asChild variant="outline" size="icon" aria-label="GitHub">
                  <a href="https://github.com" target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon" aria-label="LinkedIn">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <form className="panel space-y-4 p-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can I help?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={5} placeholder="Write your message..." />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} ASAFA MAHFUZ ABIODUN (SPENCER). All rights reserved.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Designed with precision for secure digital operations.
          </p>
        </div>
      </footer>
    </div>
  );
}
