import Link from "next/link";
import styles from "./propoint.module.css";

const serviceAreas = [
  "Robotyzacja",
  "Integracja systemow",
  "Produkcja szaf sterowniczych",
  "Projektowanie instalacji",
  "Symulacje i wirtualny rozruch",
  "Pomiary 3D",
];

const process = [
  {
    title: "Wyzwanie",
    text: "Propoint komunikuje szeroki zakres kompetencji przemyslowych. Celem projektu bylo pokazanie tej zlozonosci w sposob czytelny dla klientow B2B, ktorzy szukaja konkretnego partnera technologicznego, nie marketingowej narracji.",
  },
  {
    title: "Architektura informacji",
    text: "Struktura strony zostala pomyslana wokol uslug, zastosowan i dowodow wiarygodnosci. Priorytetem bylo szybkie przejscie od ogolnej informacji o firmie do obszaru takiego jak robotyzacja, integracja, produkcja lub projektowanie.",
  },
  {
    title: "UI i hierarchia tresci",
    text: "Interfejs opiera sie na mocnej typografii, technicznym rytmie siatki i oszczednej kolorystyce. Sekcje maja pomagac skanowac tresc: najpierw obszar kompetencji, potem opis, nastepnie jasna sciezka kontaktu.",
  },
  {
    title: "Wdrozenie",
    text: "Projekt zaklada komponentowy front-end w Next.js, modularne sekcje ofertowe, optymalizowane grafiki oraz semantyczna strukture wspierajaca SEO dla zapytan zwiazanych z automatyzacja i robotyzacja.",
  },
];

export default function PropointPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.navigation} aria-label="Nawigacja projektu">
          <Link href="/">Portfolio</Link>
          <a href="https://www.propoint.pl/" target="_blank" rel="noreferrer">
            propoint.pl
          </a>
        </nav>

        <section className={styles.heroGrid} aria-labelledby="propoint-title">
          <div>
            <p className={styles.eyebrow}>B2B industrial website</p>
            <h1 id="propoint-title">Propoint</h1>
          </div>
          <p className={styles.heroLead}>
            Koncepcja nowoczesnego doswiadczenia webowego dla firmy z obszaru
            automatyzacji, robotyzacji i integracji procesow przemyslowych.
          </p>
        </section>
      </header>

      <section className={styles.overview} aria-labelledby="overview-title">
        <article>
          <p className={styles.eyebrow}>Kontekst</p>
          <h2 id="overview-title">Techniczna oferta pokazana w sposob, ktory da sie szybko zrozumiec.</h2>
        </article>
        <article className={styles.summary}>
          <p>
            Propoint dziala w wymagajacym segmencie B2B, gdzie uzytkownicy
            porownuja kompetencje, doswiadczenie i zakres realizacji. Strona
            powinna budowac zaufanie przez precyzje, porzadek i szybki dostep
            do obszarow uslug.
          </p>
          <dl>
            <div>
              <dt>Rola</dt>
              <dd>UX/UI Designer, Design Engineer</dd>
            </div>
            <div>
              <dt>Zakres</dt>
              <dd>IA, UX strategy, UI direction, front-end structure</dd>
            </div>
            <div>
              <dt>Typ</dt>
              <dd>B2B website dla przemyslu</dd>
            </div>
          </dl>
        </article>
      </section>

      <section className={styles.services} aria-labelledby="services-title">
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Obszary oferty</p>
          <h2 id="services-title">Kompetencje widoczne od pierwszego skanu strony</h2>
        </header>
        <div className={styles.serviceGrid}>
          {serviceAreas.map((area, index) => (
            <article className={styles.serviceCard} key={area}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{area}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <header className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Case study</p>
          <h2 id="process-title">Proces projektowy</h2>
        </header>
        <div className={styles.processList}>
          {process.map((item) => (
            <article className={styles.processItem} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.outcome} aria-labelledby="outcome-title">
        <p className={styles.eyebrow}>Rezultat</p>
        <h2 id="outcome-title">Strona, ktora porzadkuje zlozona oferte i skraca droge do kontaktu.</h2>
        <p>
          Proponowany kierunek laczy przemyslowa precyzje z czytelna warstwa
          produktowa: mocne wejscie, segmentacja uslug, konkretne komunikaty i
          komponenty gotowe do rozbudowy o realizacje, aktualnosci oraz formularze.
        </p>
        <Link href="/">Wroc do strony glownej</Link>
      </section>
    </main>
  );
}
