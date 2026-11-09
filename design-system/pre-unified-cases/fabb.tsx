import Link from "next/link";
import ProjectResponsibilities from "../ProjectResponsibilities";
import styles from "./fabb.module.css";

const personas = [
  { number: "01", title: "Projektanci wnętrz i architekci", text: "Natychmiastowy dostęp do renderów 3D, tekstur, specyfikacji technicznych oraz certyfikatów.", tag: "Materiały projektowe" },
  { number: "02", title: "Dystrybutorzy B2B", text: "Szybkie zamawianie próbników, sprawne przeglądanie pełnego katalogu i bezpośredni kontakt.", tag: "Sprzedaż i próbki" },
  { number: "03", title: "Wewnętrzny zespół handlowy", text: "Mobilny, zabezpieczony panel z materiałami dostępnymi podczas spotkań i targów.", tag: "Mobile-first" },
  { number: "04", title: "Odwiedzający targi i klienci", text: "Inspiracje, tkaniny w realnych aranżacjach i wiarygodne potwierdzenie jakości marki.", tag: "Inspiracja" },
];

const features = [
  { title: "Bogata karta tkaniny", text: "Każda kolekcja otrzymała własną, rozbudowaną przestrzeń prezentacji. Połączyliśmy rendery, aranżacje, mikrowideo pokazujące strukturę materiału, pełną paletę kolorów oraz dane techniczne. Użytkownik może najpierw poczuć charakter tkaniny, a chwilę później zweryfikować jej zastosowanie, odporność i zgodność ze standardami.", chips: ["3D i wideo", "Próbniki kolorów", "Cechy techniczne"] },
  { title: "Zaawansowany katalog", text: "Przy setkach wariantów samo efektowne pokazanie produktu nie wystarczało. Przebudowaliśmy kategorie i zależności między kolekcjami, a filtrowanie według faktury, koloru, zastosowania i certyfikatów pozwoliło poruszać się po ofercie zgodnie z realnym sposobem pracy projektantów i dystrybutorów.", chips: ["Faktura", "Kolor", "Zastosowanie", "Certyfikaty"] },
  { title: "SEO i wyszukiwarki AI", text: "Nowa struktura linków i treści porządkuje wiedzę o produktach nie tylko dla ludzi. Semantyczne nazewnictwo, czytelne relacje między kategoriami i kompletne opisy zwiększają szansę poprawnej interpretacji oferty przez Google oraz narzędzia wykorzystujące modele językowe.", chips: ["Semantic HTML", "Struktura linków", "AI-ready"] },
  { title: "Modularne landing page’e", text: "Zamiast projektować każdą kampanię od początku, przygotowaliśmy zestaw elastycznych sekcji. Pozwala on budować strony dla kampanii Meta i Google, premier kolekcji, działań targowych oraz materiałów używanych bezpośrednio przez handlowców — szybko i w ramach jednego języka wizualnego.", chips: ["Meta Ads", "Google Ads", "Design System"] },
];

const results = [
  { icon: "↗", title: "Globalna obecność targowa", text: "Cyfrowe wsparcie stoisk i prezentacji marki w Niemczech, Włoszech i Chinach." },
  { icon: "＋", title: "Sprawniejsze ścieżki B2B", text: "Czytelniejszy kontakt i dostęp do informacji dla architektów oraz dystrybutorów." },
  { icon: "⌁", title: "Efektywność sprzedaży", text: "Błyskawiczny dostęp do materiałów prasowych i technicznych na urządzeniach mobilnych." },
  { icon: "◎", title: "Spójny ekosystem", text: "Jeden język wizualny i komponentowy dla marki głównej oraz jej podmarek." },
];

function Mockup({ label, variant = "light" }: { label: string; variant?: "light" | "dark" | "color" }) {
  return (
    <div className={`${styles.mockup} ${styles[variant]}`} role="img" aria-label={`Miejsce na makietę: ${label}`}>
      {/* MOCKUP: Wizualizacja projektu zostanie uzupełniona materiałem Fabb */}
      <span>FABB / CASE STUDY</span>
      <strong>{label}</strong>
      <div className={styles.mockupUi}><i /><i /><i /></div>
    </div>
  );
}

export default function FabbProjectPage() {
  return (
    <main className={styles.page} data-case-study>
      <header className={styles.hero}>
        <nav className={styles.nav} aria-label="Nawigacja podstrony">
          <Link href="/" className={styles.brand} aria-label="Wróć do strony głównej">KT<span>®</span></Link>
          <div className={styles.navLinks}>
            <a href="#proces">Proces</a><a href="#rezultaty">Rezultaty</a>
          </div>
          <Link href="/" className={styles.back}>← Portfolio</Link>
        </nav>

        <div className={styles.heroTop}>
          <div>
            <p className={styles.kicker}>Case study · UX/UI · 2024–2026</p>
            <h1>Fabb.pl</h1>
          </div>
          <p className={styles.heroIntro}>Od wizerunkowej witryny targowej do wielofunkcyjnego ekosystemu digital.</p>
        </div>

        <div className={styles.heroVisual}>
          <Mockup label="Cyfrowy katalog tkanin premium" variant="color" />
          <div className={styles.floatingMetric}><strong>3</strong><span>kontynenty<br />obecności targowej</span></div>
        </div>

        <dl className={styles.metaGrid}>
          <div><dt>Rola</dt><dd>Lead UX/UI Designer</dd></div>
          <div><dt>Zakres</dt><dd>IA, Design System, Redesign, Mobile UX</dd></div>
          <div><dt>Okres</dt><dd>Współpraca długofalowa</dd></div>
          <div><dt>Branża</dt><dd>Tkaniny obiciowe i tekstylia premium</dd></div>
        </dl>
      </header>
      <ProjectResponsibilities project="fabb" />

      <section className={styles.statement} aria-labelledby="intro-title">
        <p className={styles.sectionNumber}>01 / Kontekst</p>
        <h2 id="intro-title">Estetyczny katalog wyewoluował w narzędzie sprzedażowe, architektoniczne i targowe.</h2>
        <div className={styles.statementDetails}>
          <p>Fabb produkuje tkaniny obiciowe, tapicerskie i dekoracyjne — pełne faktur, kolorów oraz odniesień do natury. Pierwszym zadaniem było przełożenie tej sensorycznej różnorodności na ekran bez utraty praktycznych informacji potrzebnych w procesie wyboru.</p>
          <p>W kolejnych latach, pozostając w stałym kontakcie z klientem, obserwowaliśmy jak zmienia się rola serwisu. Strona przestała być wyłącznie miejscem prezentacji marki. Stała się wspólnym punktem dostępu do oferty, wiedzy technicznej i materiałów wykorzystywanych w sprzedaży.</p>
        </div>
      </section>

      <section className={styles.evolution} aria-labelledby="evolution-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Dwuetapowa ewolucja</p>
          <h2 id="evolution-title">Zmiana potrzeb.<br />Zmiana roli produktu.</h2>
        </div>
        <div className={styles.phases}>
          <article className={styles.phase}>
            <span>Faza I</span><h3>Wizerunek i katalog</h3>
            <p>Punktem wyjścia była gotowa strategia komunikacji marki. Naszym zadaniem było stworzenie nietuzinkowej witryny, w której rozbudowany katalog nie wygląda jak techniczna baza danych, lecz buduje emocje wokół faktur, kolorów i jakości produktu. Serwis pełnił też rolę cyfrowej wizytówki podczas międzynarodowych targów.</p>
            <ul><li>Faktury, rendery 3D i wideo</li><li>Certyfikaty i cechy ekologiczne</li><li>Water Free, PFC Free, REACH</li></ul>
          </article>
          <div className={styles.phaseArrow} aria-hidden="true">→</div>
          <article className={`${styles.phase} ${styles.phaseActive}`}>
            <span>Faza II</span><h3>Funkcjonalność B2B</h3>
            <p>Wraz z rozwojem serwisu wzrosła liczba kolekcji, kategorii i materiałów. Priorytet przesunął się więc z samej prezentacji na sprawne odnajdywanie informacji. Redesign objął architekturę katalogu, nawigację, strukturę linków, bazę plików oraz narzędzia wspierające codzienną pracę sprzedaży.</p>
            <ul><li>Nawigacja zoptymalizowana pod SEO i AI</li><li>Uporządkowane zasoby do pobrania</li><li>Zabezpieczona strefa handlowca</li></ul>
          </article>
        </div>
      </section>

      <section className={styles.audiences} aria-labelledby="audiences-title">
        <div className={styles.sectionHeadingRow}>
          <div><p className={styles.eyebrow}>Dla kogo projektowaliśmy</p><h2 id="audiences-title">Cztery perspektywy.<br />Jeden ekosystem.</h2></div>
          <p>Architektura musiała pogodzić inspiracyjny charakter marki z konkretnymi potrzebami użytkowników profesjonalnych.</p>
        </div>
        <div className={styles.personaGrid}>
          {personas.map((persona) => <article className={styles.persona} key={persona.number}><span>{persona.number}</span><div><small>{persona.tag}</small><h3>{persona.title}</h3><p>{persona.text}</p></div><b aria-hidden="true">↗</b></article>)}
        </div>
      </section>

      <section className={styles.features} id="proces" aria-labelledby="features-title">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>Decyzje projektowe</p><h2 id="features-title">Funkcje, które pracują dla użytkownika i biznesu.</h2></div>
        <div className={styles.featureLayout}>
          <div className={styles.featureList}>
            {features.map((feature, index) => (
              <details className={styles.feature} key={feature.title} open={index === 0}>
                <summary><span>0{index + 1}</span><h3>{feature.title}</h3><b aria-hidden="true">＋</b></summary>
                <div className={styles.featureBody}><p>{feature.text}</p><div>{feature.chips.map(chip => <small key={chip}>{chip}</small>)}</div></div>
              </details>
            ))}
          </div>
          <div className={styles.stickyMockup}><Mockup label="Karta produktu i filtrowanie" variant="light" /></div>
        </div>
      </section>

      <section className={styles.sales} aria-labelledby="sales-title">
        <div className={styles.salesCopy}>
          <p className={styles.eyebrow}>Wyróżniony moduł · Mobile UX</p>
          <h2 id="sales-title">Strefa handlowca zawsze pod ręką.</h2>
          <p>Handlowcy często korzystają ze strony w sytuacjach, w których liczy się czas: przy stole z klientem, podczas prezentacji kolekcji albo na zagranicznych targach. Dedykowana, zabezpieczona zakładka porządkuje najważniejsze informacje i pliki, ograniczając potrzebę przeszukiwania całego serwisu. Interfejs został zaprojektowany od małego ekranu, aby potrzebny materiał można było znaleźć i pokazać w kilka sekund.</p>
          <ul><li><span>01</span>Projekt mobile-first</li><li><span>02</span>Dostęp chroniony hasłem</li><li><span>03</span>Pliki prasowe i techniczne</li></ul>
        </div>
        <div className={styles.phone} aria-label="Miejsce na mobilną makietę strefy handlowca" role="img"><div className={styles.phoneScreen}><span>Fabb / Sales</span><strong>Materiały<br />sprzedażowe</strong><i /><i /><i /></div></div>
      </section>

      <section className={styles.ecosystem} aria-labelledby="ecosystem-title">
        <div className={styles.sectionHeadingRow}>
          <div><p className={styles.eyebrow}>Skalowalny system treści</p><h2 id="ecosystem-title">Więcej niż jedna<br />strona internetowa.</h2></div>
          <p>Komponenty zostały zaprojektowane jako narzędzia do codziennej komunikacji — od premiery kolekcji po materiały wspierające sprzedaż.</p>
        </div>
        <div className={styles.systemGrid}>
          <article><span>01</span><h3>Kampanie i premiery</h3><p>Elastyczne landing page’e pozwalają szybko opowiadać o nowych kolekcjach i tworzyć dedykowane ścieżki dla kampanii Meta oraz Google.</p></article>
          <article><span>02</span><h3>Prezentacje targowe</h3><p>Te same moduły wspierają komunikację przed wydarzeniem, prezentację oferty na stoisku oraz późniejszy kontakt z zainteresowanymi odbiorcami.</p></article>
          <article><span>03</span><h3>Spójność w rozwoju</h3><p>System można rozszerzać bez projektowania każdego widoku od zera. Jego elastyczność wykorzystaliśmy także przy pobocznych serwisach Fabb Project i OA Fabb.</p></article>
        </div>
      </section>

      <section className={styles.impact} id="rezultaty" aria-labelledby="impact-title">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>Rezultaty i wpływ biznesowy</p><h2 id="impact-title">Design, który działa poza ekranem.</h2></div>
        <div className={styles.resultsGrid}>{results.map(result => <article key={result.title}><span>{result.icon}</span><h3>{result.title}</h3><p>{result.text}</p></article>)}</div>
      </section>

      <section className={styles.lesson} aria-labelledby="lesson-title">
        <p className={styles.sectionNumber}>08 / Retrospektywa</p>
        <blockquote id="lesson-title">„Projekt dla Fabb pokazał mi, jak ważna jest ewolucja UX. To, co zaczęło się jako wizerunkowy katalog, przekształciliśmy w wielofunkcyjne narzędzie biznesowe.”</blockquote>
        <p className={styles.lessonNote}>Kluczem było utrzymanie równowagi między bogatą estetyką a rygorystycznymi wymaganiami użyteczności i wydajności.</p>
      </section>

      <footer className={styles.footer}><p>Następny projekt</p><Link href="/propoint">Propoint <span>↗</span></Link><small>© {new Date().getFullYear()} Krzysztof Tomecki</small></footer>
    </main>
  );
}
