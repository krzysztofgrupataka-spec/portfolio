import Link from "next/link";
import styles from "./page.module.css";

const featuredProjects = [
  {
    title: "Fabb",
    href: "/fabb",
    category: "B2C e-commerce",
    description:
      "Premium furniture shopping experience for a furniture brand: UX strategy, information architecture, design system and refined product UI.",
    meta: "UX/UI - Design Engineering",
  },
  {
    title: "Propoint",
    href: "/propoint",
    category: "B2B industrial website",
    description:
      "Modern information architecture and interface direction for automation, robotics and industrial integration services.",
    meta: "Product Design - UX Strategy",
  },
];

const allProjects = [
  {
    title: "Fabb",
    href: "/fabb",
    type: "E-commerce",
    scope: "UX research, IA, UI, design system, Next.js",
  },
  {
    title: "Propoint",
    href: "/propoint",
    type: "B2B website",
    scope: "UX strategy, service architecture, industrial UI, content hierarchy",
  },
  {
    title: "Portfolio System",
    href: "/portfolio",
    type: "Personal brand",
    scope: "Case study structure, visual direction, responsive front-end",
  },
];

const explorations = [
  "Configurator UI",
  "AI search prototype",
  "Design tokens lab",
  "Dashboard patterns",
  "Motion microinteractions",
  "Checkout experiments",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.logo} aria-label="Strona glowna">
          KT
        </Link>
        <nav className={styles.nav} aria-label="Glowna nawigacja">
          <a href="#projects">Projects</a>
          <a href="#explorations">Explorations</a>
          <a href="mailto:hello@example.com">Contact</a>
        </nav>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroIntro}>
          <p className={styles.eyebrow}>Krzysztof Tomecki</p>
          <p className={styles.role}>Projektant UX/UI / Product Designer</p>
        </div>

        <div className={styles.heroContent}>
          <h1 id="hero-title">
            Projektuje cyfrowe produkty, ktore sa klarowne, eleganckie i gotowe
            do wdrozenia.
          </h1>
          <div className={styles.heroDetails}>
            <p>
              Lacze UX strategy, product design i front-end w React / Next.js.
              Pracuje na styku struktury, estetyki i realnych potrzeb
              biznesowych.
            </p>
            <Link href="#projects" className={styles.primaryLink}>
              Zobacz projekty
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.featured} id="projects" aria-labelledby="featured-title">
        <header className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>Selected work</p>
            <h2 id="featured-title">Featured Projects</h2>
          </div>
          <p>
            Dwa glowne case studies pokazujace prace nad e-commerce, strona B2B,
            architektura informacji i warstwa UI.
          </p>
        </header>

        <div className={styles.featuredGrid}>
          {featuredProjects.map((project) => (
            <article className={styles.projectCard} key={project.title}>
              <Link href={project.href} className={styles.projectLink}>
                <span className={styles.projectCategory}>{project.category}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <span className={styles.projectMeta}>{project.meta}</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.projects} aria-labelledby="projects-title">
        <header className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>Archive</p>
            <h2 id="projects-title">All Projects</h2>
          </div>
          <p>Pelniejszy przeglad projektow i kierunkow, ktore rozwijam.</p>
        </header>

        <div className={styles.projectList}>
          {allProjects.map((project) => (
            <article className={styles.projectRow} key={project.title}>
              <Link href={project.href} className={styles.projectRowLink}>
                <span className={styles.projectRowTitle}>{project.title}</span>
                <span>{project.type}</span>
                <span>{project.scope}</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.explorations} id="explorations" aria-labelledby="explorations-title">
        <header className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>Lab</p>
            <h2 id="explorations-title">Other Explorations</h2>
          </div>
          <p>Mniejsze interfejsy, prototypy i eksperymenty produktowe.</p>
        </header>

        <div className={styles.explorationGrid}>
          {explorations.map((exploration) => (
            <article className={styles.explorationCard} key={exploration}>
              <h3>{exploration}</h3>
              <p>Interface concept, interaction detail or code-led prototype.</p>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>Krzysztof Tomecki</strong>
          <p>UX/UI Designer / Product Designer</p>
        </div>
        <nav className={styles.footerLinks} aria-label="Linki kontaktowe">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:hello@example.com">hello@example.com</a>
        </nav>
      </footer>
    </main>
  );
}
