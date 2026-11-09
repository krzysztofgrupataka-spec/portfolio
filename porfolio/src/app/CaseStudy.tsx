import Link from "next/link";
import type { ReactNode } from "react";
import ProjectArtwork, { type ProjectKind } from "./ProjectArtwork";
import home from "./page.module.css";
import styles from "./case-study.module.css";

const projects = {
  fabb: { title: "Fabb", intro: "Od katalogu tkanin do narzędzia B2B.", description: "Architektura informacji, system komponentów i mobilny dostęp do materiałów sprzedażowych.", role: "UX/UI · Product Design", scope: "Architektura informacji, katalog, design system", period: "2024–2026", next: "propoint", tone: "butter" },
  propoint: { title: "Propoint", intro: "Techniczna wiedza. Czytelna struktura.", description: "Redesign serwisów Propoint i Propoint GmbH. Wspólna logika oferty, różne perspektywy odbiorców.", role: "UX/UI Design", scope: "Warsztaty, architektura informacji, UI", period: "2023–2026", next: "i4tech", tone: "cocoa" },
  i4tech: { title: "i4TECH", intro: "Złożona oferta. Zrozumiałe połączenia.", description: "Od warsztatów i mapy potrzeb do serwisu łączącego technologie, branże i realizacje.", role: "UX/UI Design", scope: "Research, UX, UI, SEO, content", period: "2024–2025", next: "likeat", tone: "paper" },
  likeat: { title: "Likeat", intro: "Prostsza droga do wyboru diety.", description: "Architektura oferty, kampanie i doświadczenie zakupowe cateringu dietetycznego.", role: "UX/UI Design", scope: "Architektura oferty, UI, SEO, kampanie", period: "2024–2025", next: "fabb", tone: "breeze" },
} as const;

export default function CaseStudy({ project, children, cover }: { project: ProjectKind; children: ReactNode; cover?: ReactNode }) {
  const item = projects[project], next = projects[item.next];
  return <main className={`${home.page} ${styles.page}`} id="top">
    <a className={home.skipLink} href="#opis">Przejdź do opisu projektu</a>
    <header className={home.header}>
      <Link href="/" className={home.wordmark}>Krzysztof Tomecki<span className={home.brandDot} aria-hidden="true">.</span></Link>
      <nav aria-label="Główna nawigacja"><Link href="/#projekty">Projekty</Link><Link href="/#o-mnie">O mnie</Link><Link className={home.contactNav} href="/#kontakt">Porozmawiajmy <span aria-hidden="true">↗︎</span></Link></nav>
    </header>
    <section className={styles.hero} aria-labelledby="case-title">
      <Link href="/#projekty" className={styles.back}>← Wszystkie projekty</Link>
      <div className={styles.introduction}><p>{item.intro}</p><div>{item.description}</div></div>
      <h1 id="case-title">{item.title}<span>.</span></h1>
      <dl className={styles.meta}><div><dt>Moja rola</dt><dd>{item.role}</dd></div><div><dt>Zakres projektu</dt><dd>{item.scope}</dd></div><div><dt>Współpraca</dt><dd>{item.period}</dd></div></dl>
    </section>
    {cover ?? <div className={`${styles.cover} ${home[item.tone]}`}><ProjectArtwork project={project} /></div>}
    <div id="opis" className={styles.content}>{children}</div>
    <section className={`${styles.next} ${home[next.tone]}`} aria-label="Następny projekt"><div><p>Następny projekt</p><h2><Link href={`/${item.next}`}>{next.title} <span aria-hidden="true">↗︎</span></Link></h2></div><p>{next.intro}</p></section>
    <footer className={home.footer}><p>© {new Date().getFullYear()} Krzysztof Tomecki</p><Link href="/#kontakt">Kontakt</Link><a href="#top">Do góry ↑</a></footer>
  </main>;
}
