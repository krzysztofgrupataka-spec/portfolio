import Image from "next/image";
import Link from "next/link";
import styles from "./fabb.module.css";

const processSections = [
  {
    label: "01",
    title: "Wyzwanie Projektowe",
    lead: "Fabb potrzebowal doswiadczenia zakupowego, ktore laczy emocje showroomu z precyzja konfiguracji online.",
    body: "Glownym celem bylo zaprojektowanie sciezki B2C dla klientow premium: spokojnej, czytelnej i wiarygodnej, ale jednoczesnie wystarczajaco szczegolowej, aby wspierac zakup mebli o wysokiej wartosci. Projekt musial zmniejszyc dystans miedzy inspiracja, konfiguracja produktu i kontaktem z doradca.",
    points: ["Premium bez przesadnej dekoracyjnosci", "Szybsze dotarcie do kolekcji i materialow", "Wieksze zaufanie do personalizacji online"],
  },
  {
    label: "02",
    title: "Warsztaty i Badania UX",
    lead: "Proces rozpoczal sie od uporzadkowania potrzeb klientow, doradcow sprzedazy i zespolu odpowiedzialnego za katalog produktowy.",
    body: "Przeprowadzilem warsztat mapowania sciezki zakupowej, analize konkurencji marek premium oraz szybkie testy z uzytkownikami zainteresowanymi wyposazeniem salonu. Najwazniejszym wnioskiem byla potrzeba prowadzenia klienta przez decyzje bez poczucia presji sprzedazowej.",
    points: ["Customer journey dla zakupu sofy i zestawu modulowego", "Mapa obaw: material, rozmiar, dostawa, zwroty", "Priorytetyzacja tresci produktowych i doradczych"],
  },
  {
    label: "03",
    title: "Architektura Informacji",
    lead: "Nowa struktura informacji zostala oparta na naturalnym sposobie wyboru mebli: pomieszczenie, kolekcja, konfiguracja, material.",
    body: "Przebudowalem hierarchie kategorii, logike filtrow i zaleznosci miedzy kartami produktow, wariantami oraz poradnikami. Szczegolny nacisk polozylem na orientacje w ofercie bez koniecznosci rozumienia wewnetrznej nomenklatury marki.",
    points: ["Nawigacja po pomieszczeniach i kolekcjach", "Karty produktow z szybkim porownaniem wariantow", "Sekcje doradcze osadzone blisko decyzji zakupowych"],
  },
  {
    label: "04",
    title: "Design System i UI",
    lead: "Interfejs zostal zaprojektowany jako cichy, elegancki system, w ktorym materialy i bryly mebli graja pierwsza role.",
    body: "Zdefiniowalem palete oparta na cieplych neutralach, skale typografii, komponenty kart produktowych, filtry, galerie, selektory tkanin i stany formularzy. UI ma wspierac dluzsze przegladanie oferty, nie konkurowac z fotografia produktowa.",
    points: ["Komponenty dla kolekcji, wariantow i probek materialow", "Kontrastowe, ale dyskretne CTA", "Responsywna siatka dla katalogu i editorialowych modulow"],
  },
  {
    label: "05",
    title: "Wdrozenie Techniczne",
    lead: "Warstwa front-end zostala przygotowana z mysla o wydajnosci, SEO i latwej rozbudowie katalogu.",
    body: "Strona moze dzialac jako case study w portfolio, ale jej struktura odzwierciedla realne decyzje wdrozeniowe: komponentowy podzial sekcji, optymalizowane obrazy Next.js, semantyczny HTML i style zamkniete w CSS Modules.",
    points: ["Next.js App Router i TypeScript", "next/image dla grafik i stabilnych proporcji", "CSS Modules dla przewidywalnego zakresu styli"],
  },
];

const metrics = [
  { value: "5", label: "kluczowych etapow procesu UX/UI" },
  { value: "12+", label: "zmapowanych decyzji zakupowych" },
  { value: "3", label: "poziomy architektury katalogu" },
];

export default function FabbProjectPage() {
  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <nav className={styles.navigation} aria-label="Nawigacja projektu">
          <Link href="/" className={styles.backLink}>
            Portfolio
          </Link>
          <a href="#proces" className={styles.anchorLink}>
            Proces
          </a>
        </nav>

        <section className={styles.heroGrid} aria-labelledby="fabb-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>B2C e-commerce / Premium furniture</p>
            <h1 id="fabb-title">Fabb</h1>
            <p className={styles.heroLead}>
              Projekt doswiadczenia zakupowego dla marki meblarskiej premium:
              od strategii UX, przez architekture informacji, po dopracowany
              interfejs katalogu i sciezki kontaktu z doradca.
            </p>
          </div>

          <figure className={styles.heroMedia}>
            <Image
              src="/images/fabb/showroom-placeholder.svg"
              alt="Placeholder eleganckiego showroomu marki Fabb"
              width={1440}
              height={960}
              priority
            />
            <figcaption>Placeholder wizualny: fotografia showroomu lub kolekcji Fabb.</figcaption>
          </figure>
        </section>
      </header>

      <section className={styles.intro} aria-labelledby="project-overview">
        <div>
          <p className={styles.eyebrow}>Zakres</p>
          <h2 id="project-overview">Od pierwszej inspiracji do swiadomego wyboru produktu</h2>
        </div>
        <article className={styles.summary}>
          <p>
            Case study pokazuje, jak uporzadkowalem doswiadczenie e-commerce
            dla klienta, ktory kupuje nie tylko produkt, ale tez spokoj,
            jakosc wykonania i pewnosc dobrej decyzji.
          </p>
          <dl className={styles.metaList}>
            <div>
              <dt>Rola</dt>
              <dd>UX/UI Designer, Frontend Developer</dd>
            </div>
            <div>
              <dt>Obszar</dt>
              <dd>Strategia UX, IA, UI, Design System</dd>
            </div>
            <div>
              <dt>Platforma</dt>
              <dd>B2C e-commerce, responsive web</dd>
            </div>
          </dl>
        </article>
      </section>

      <section className={styles.metrics} aria-label="Najwazniejsze informacje o projekcie">
        {metrics.map((metric) => (
          <article className={styles.metric} key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>

      <section className={styles.visualBreak} aria-labelledby="research-preview">
        <div className={styles.visualCopy}>
          <p className={styles.eyebrow}>Proces projektowy</p>
          <h2 id="research-preview">Decyzje UX przed estetyka interfejsu</h2>
          <p>
            Zanim powstaly komponenty UI, projekt zostal rozpisany na momenty
            decyzyjne: odkrywanie stylu, zawzenie wyboru, porownanie wariantow,
            konfiguracje i kontakt z ekspertem.
          </p>
        </div>
        <figure className={styles.processImage}>
          <Image
            src="/images/fabb/wireframes-placeholder.svg"
            alt="Placeholder makiet UX dla strony e-commerce Fabb"
            width={1200}
            height={900}
          />
          <figcaption>Placeholder wizualny: makiety, flow lub fragment design systemu.</figcaption>
        </figure>
      </section>

      <section className={styles.process} id="proces" aria-labelledby="process-title">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Case study</p>
          <h2 id="process-title">Najwazniejsze obszary pracy</h2>
        </div>

        <div className={styles.processList}>
          {processSections.map((section) => (
            <article className={styles.processItem} key={section.title}>
              <header className={styles.processHeader}>
                <span>{section.label}</span>
                <h3>{section.title}</h3>
              </header>
              <div className={styles.processBody}>
                <p className={styles.processLead}>{section.lead}</p>
                <p>{section.body}</p>
                <ul>
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.outcome} aria-labelledby="outcome-title">
        <p className={styles.eyebrow}>Rezultat</p>
        <h2 id="outcome-title">Elegancki e-commerce, ktory wspiera spokojne decyzje zakupowe</h2>
        <p>
          Finalna koncepcja laczy editorialowy charakter marki premium z
          praktyczna warstwa zakupowa: klarownymi kategoriami, przewidywalnymi
          komponentami i sciezka kontaktu, ktora wzmacnia zaufanie zamiast
          wybijac uzytkownika z procesu.
        </p>
        <Link href="/" className={styles.cta}>
          Wroc do portfolio
        </Link>
      </section>
    </main>
  );
}
