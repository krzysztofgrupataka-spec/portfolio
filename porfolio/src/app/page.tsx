import Link from "next/link";
import ProjectArtwork, { type ProjectKind } from "./ProjectArtwork";
import styles from "./page.module.css";

function Arrow() {
  return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M4 16 16 4M4 4h12v12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

const projects = [
  { title: "Fabb", subtitle: "Od katalogu tkanin do narzędzia B2B", description: "Porządkowanie rozbudowanej oferty i projektowanie narzędzi dla architektów, dystrybutorów oraz zespołu sprzedaży.", href: "/fabb", tone: "butter", kind: "fabb" },
  { title: "Propoint", subtitle: "Wspólny kierunek dla różnych potrzeb", description: "Współpraca z marketingiem i pogodzenie technicznej szczegółowości z czytelną architekturą serwisów PL i DE.", href: "/propoint", tone: "cocoa", kind: "propoint" },
  { title: "i4TECH", subtitle: "Złożona oferta. Zrozumiałe połączenia.", description: "Od warsztatów i mapy potrzeb do struktury, która łączy rozwiązania, technologie i ich zastosowania.", href: "/i4tech", tone: "paper", kind: "i4tech" },
  { title: "Likeat", subtitle: "Prostsza droga do wyboru diety", description: "Projektowanie ścieżki od pierwszej wizyty do zamówienia — z myślą o ofercie, kampaniach i urządzeniach mobilnych.", href: "/likeat", tone: "breeze", kind: "likeat" },
];

export default function Home() {
  return (
    <main className={styles.page} id="top">
      <a className={styles.skipLink} href="#projekty">Przejdź do projektów</a>
      <header className={styles.header}>
        <Link className={styles.wordmark} href="/" aria-label="Krzysztof Tomecki — strona główna">Krzysztof Tomecki<span className={styles.brandDot} aria-hidden="true">.</span></Link>
        <nav aria-label="Główna nawigacja"><a href="#projekty">Projekty</a><a href="#o-mnie">O mnie</a><a className={styles.contactNav} href="#kontakt">Porozmawiajmy <Arrow /></a></nav>
      </header>
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.introduction}><p className={styles.heroStatement}>Porządkuję złożoność.<br />Projektuję z charakterem.</p><div className={styles.heroAside}><p>UX/UI Designer</p><p>Przekładam potrzeby użytkowników i cele biznesowe na czytelne interfejsy — od warsztatów i architektury informacji po wdrożenie.</p></div></div>
        <h1 id="hero-title" className={styles.name}>Krzysztof<br /><span>Tomecki<span className={styles.nameDot}>.</span></span></h1>
        <div className={styles.heroBottom}><a href="#projekty">Zobacz wybrane projekty <span aria-hidden="true">↓</span></a><p>Od pierwszego pytania do dopracowanego interfejsu.</p></div>
      </section>
      <section className={styles.projects} id="projekty" aria-labelledby="projects-title">
        <div className={styles.sectionHeading}><h2 id="projects-title">Wybrane projekty</h2><p>Projekty komercyjne. Kontekst, decyzje i realizacja.</p></div>
        <div className={styles.projectGrid}>{projects.map(project => (
          <article className={`${styles.project} ${styles[project.kind]}`} key={project.title}>
            <Link href={project.href} className={`${styles.projectLink} ${styles[project.tone]}`}>
              <ProjectArtwork project={project.kind as ProjectKind} />
              <div className={styles.cardCopy}><h3>{project.title}</h3><p>{project.subtitle}</p><span className={styles.projectCta}>Zobacz case study <Arrow /></span></div>
            </Link>
            <p className={styles.projectDescription}>{project.description}</p>
          </article>
        ))}</div>
      </section>
      <section className={styles.about} id="o-mnie" aria-labelledby="about-title">
        <h2 id="about-title">Dobra forma<br />zaczyna się<br /><em>od zrozumienia.</em></h2>
        <div className={styles.aboutContent}><p className={styles.aboutLead}>Od ponad dekady łączę projektowanie z technologią.</p><p>W GrupaTAKA prowadzę warsztaty z klientami, porządkuję architekturę informacji i projektuję interfejsy w Figmie. Współpracuję z zespołami marketingowymi, łącząc cele biznesowe, potrzeby odbiorców i ograniczenia wdrożenia.</p><p>W projektach B2B zajmuję się rozbudowaną ofertą, różnymi grupami odbiorców i hierarchią treści. Przykłady moich decyzji to wspólna struktura serwisów Propoint PL i DE, powiązanie technologii z zastosowaniami w i4TECH oraz osobna ścieżka dostępu do materiałów dla handlowców Fabb.</p><p>Zaplecze front-endowe pomaga mi przeprowadzić projekt od makiet i prototypów do wdrożenia. Pracuję z WordPressem, Webflow i Reactem, dbając o spójność projektu i jego realizacji.</p><div className={styles.disciplines}><span>Warsztaty UX</span><span>Architektura informacji</span><span>UI Design</span><span>Wdrożenia</span></div></div>
      </section>
      <section className={styles.contact} id="kontakt" aria-labelledby="contact-title"><div><h2 id="contact-title">Porozmawiajmy<br /><em>o współpracy.</em></h2><p>Chętnie opowiem o projektach i decyzjach, które za nimi stoją.</p></div><div className={styles.contactDetails}><a className={styles.email} href="mailto:tomecki.k@gmail.com">tomecki.k@gmail.com <Arrow /></a><div className={styles.contactLinks}><a href="tel:+48690439497">+48 690 439 497</a><a href="https://www.linkedin.com/in/krzysztof-tomecki/" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a></div></div></section>
      <footer className={styles.footer}><p>© {new Date().getFullYear()} Krzysztof Tomecki</p><a href="#top">Do góry <span aria-hidden="true">↑</span></a></footer>
    </main>
  );
}
