import Link from "next/link";
import styles from "./page.module.css";

const projects = [
  { index: "01 / 02", title: "Fabb.pl", subtitle: "Od katalogu tkanin do narzędzia B2B", description: "Trzyletnia współpraca nad uporządkowaniem złożonego katalogu i zbudowaniem skalowalnego narzędzia dla zespołów sprzedaży.", href: "/fabb", year: "2024–2026", scope: "UX/UI · Product Design · Design System", tone: "fabb" },
  { index: "02 / 02", title: "Propoint", subtitle: "Redesign ekosystemu inżynieryjnego", description: "Nowa architektura informacji i język wizualny dla technicznego serwisu działającego na wielu rynkach.", href: "/propoint", year: "2023–2026", scope: "UX Strategy · IA · UI Design", tone: "propoint" },
  { index: "03 / 03", title: "i4TECH", subtitle: "Technologie dla przemysłu i środowiska", description: "Nowa struktura serwisu, która łączy rozwiązania, technologie, branże i realizacje w jeden zrozumiały ekosystem.", href: "/i4tech", year: "2024–2025", scope: "Research · UX · UI · SEO", tone: "i4tech" },
  { index: "04 / 04", title: "Likeat", subtitle: "Catering dietetyczny nastawiony na konwersję", description: "Nowy serwis, który skraca drogę od kampanii i inspiracji do wyboru diety i szybkiego zamówienia.", href: "/likeat", year: "2024–2025", scope: "UX/UI · CRO · Content · Campaigns", tone: "likeat" },
];

export default function Home() {
  return (
    <main className={styles.page} id="top">
      <header className={styles.header}>
        <Link href="/" className={styles.wordmark}>Krzysztof Tomecki</Link>
        <p>UX/UI &amp; Product Designer<br />Warszawa · Polska</p>
        <nav aria-label="Główna nawigacja"><a href="#projekty">Projekty</a><a href="#o-mnie">O mnie</a><a href="mailto:hello@example.com">Kontakt</a></nav>
      </header>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.orb} aria-hidden="true" />
        <div className={styles.heroTop}><p className={styles.heroIndex}>Portfolio / 2026</p><p className={styles.heroNote}>Independent designer<br />for ambitious teams</p></div>
        <div className={styles.heroCenter}><p>Cześć, jestem Krzysztof.</p><h1 id="hero-title">UX/UI Designer.<br /><span>Myślę o całości.</span></h1></div>
        <div className={styles.heroBottom}><p>Łączę strategię UX, architekturę informacji i dopracowany interfejs w produkty gotowe do realnego użycia i dalszego rozwoju.</p><a href="#projekty" aria-label="Przejdź do projektów">↓</a></div>
      </section>
      <div className={styles.marquee} aria-hidden="true"><div>Strategy <i>✳</i> Identity <i>✳</i> Digital products <i>✳</i> Culture <i>✳</i>&nbsp;</div><div>Strategy <i>✳</i> Identity <i>✳</i> Digital products <i>✳</i> Culture <i>✳</i>&nbsp;</div></div>
      <section className={styles.projects} id="projekty" aria-labelledby="projects-title">
        <header className={styles.projectsHeader}><p>Wybrane realizacje</p><h2 id="projects-title">Selected work</h2><span>04 projekty</span></header>
        <div className={styles.projectStack}>{projects.map((project, index) => (
          <article className={styles.project} key={project.title}><Link href={project.href} className={styles.projectLink}>
            <div className={`${styles.projectVisual} ${styles[project.tone]}`}><div className={styles.visualChrome}><span>0{index + 1} / 04</span><span>Case study ↗</span></div><div className={styles.visualArtwork} aria-hidden="true"><i /><i /><i /></div><p>{project.subtitle}</p></div>
            <div className={styles.projectTitleRow}><h3>{project.title}</h3><span className={styles.projectArrow}>↗</span></div><p className={styles.projectDescription}>{project.description}</p><div className={styles.projectMeta}><span>{project.scope}</span><span>{project.year}</span><b>View case study</b></div>
          </Link></article>
        ))}</div>
      </section>
      <section className={styles.about} id="o-mnie" aria-labelledby="about-title"><p className={styles.aboutLabel}>O mnie / podejście</p><div><h2 id="about-title">Między logiką produktu<br />a kulturą wizualną.</h2><div className={styles.aboutCopy}><p>Pracuję nad produktami i serwisami, które muszą pogodzić wiele perspektyw: użytkownika, biznesu, technologii i marki.</p><p>Najbardziej interesują mnie projekty, w których design nie jest dekoracją, lecz narzędziem porządkowania informacji, decyzji i współpracy.</p></div></div></section>
      <footer className={styles.footer}><p>Masz projekt do uporządkowania?</p><a href="mailto:hello@example.com">Porozmawiajmy <span>↗</span></a><div><small>© {new Date().getFullYear()} Krzysztof Tomecki</small><small>UX/UI · Product Design</small><a href="#top">Do góry ↑</a></div></footer>
    </main>
  );
}
