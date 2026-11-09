import CaseStudy from "../CaseStudy";
import Link from "next/link";
import ProjectResponsibilities from "../ProjectResponsibilities";
import styles from "./propoint.module.css";

const processSteps = [
  { number: "01", title: "Warsztaty i alignment", text: "Pracując ramię w ramię z wewnętrznym zespołem marketingowym, zmapowaliśmy cele biznesowe, grupy odbiorców oraz ograniczenia organizacyjne. Warsztaty pomogły oddzielić potrzeby użytkowników od przyzwyczajeń wynikających ze starej struktury firmy." },
  { number: "02", title: "Architektura ekosystemu", text: "Oferta została pogrupowana według problemów użytkownika i rodzaju wsparcia, zamiast wewnętrznej struktury organizacyjnej. Model musiał działać dla polskiego serwisu, wariantu Propoint GmbH i kolejnych rynków bez kopiowania chaosu treści." },
  { number: "03", title: "User flows i wireframes", text: "Na makietach zweryfikowałem ścieżki dla programowania PLC, symulacji cyfrowych, budowy szaf i bazy wiedzy. Najważniejsze decyzje były testowane na prostych strukturach, zanim powstała warstwa wizualna." },
  { number: "04", title: "UI, test kompromisu i iteracje", text: "Finalny interfejs powstawał iteracyjnie pomiędzy oczekiwaniem dużej ilości danych a potrzebą czytelności. Modułowy system pozwolił zachować techniczną szczegółowość, ale dawkować ją przez hierarchię, sekcje i progresywne ujawnianie treści." },
];

const audiences = [
  { role: "Zarząd inżynieryjny", need: "Serwis musi pokazywać pełną głębię techniczną i budować autorytet ekspercki." },
  { role: "Zespół marketingowy", need: "Potrzebujemy czytelnej narracji, elastycznych treści i skuteczniejszych ścieżek konwersji." },
  { role: "Użytkownik B2B", need: "Chcę szybko zrozumieć ofertę, zweryfikować kompetencje i trafić do właściwego eksperta." },
];

const results = [
  { value: "01", title: "Techniczny autorytet", text: "Zarząd zachował potrzebną głębię merytoryczną, ale treści zyskały hierarchię i czytelny rytm." },
  { value: "02", title: "Kontekst przed kontaktem", text: "Kontekstowe CTA mają pomóc użytkownikom opisać potrzebę przed rozmową z ekspertem. Poprawa jakości zapytań pozostaje celem do zweryfikowania w danych." },
  { value: "03", title: "Wspólny model informacji", text: "Jedna logika oferty wspiera polski serwis, Propoint GmbH oraz przyszłe warianty rynkowe." },
  { value: "04", title: "Marketing z większą autonomią", text: "Modularna biblioteka sekcji upraszcza publikowanie usług, realizacji i treści eksperckich." },
];

function BrowserMockup({ title, tone = "light" }: { title: string; tone?: "light" | "dark" | "orange" }) {
  return (
    <div className={`${styles.mockup} ${styles[tone]}`} role="img" aria-label={`Makieta projektu: ${title}`}>
      {/* MOCKUP: Docelowy ekran projektu Propoint do podmiany */}
      <div className={styles.browserBar}><i /><i /><i /><span>propoint.pl</span></div>
      <div className={styles.mockupContent}><small>Projekt interfejsu</small><strong>{title}</strong><div className={styles.uiLines}><i /><i /><i /></div></div>
    </div>
  );
}

export default function PropointCaseStudy() {
  return (
    <CaseStudy project="propoint">

      <ProjectResponsibilities project="propoint" />

      <section className={styles.challenge} aria-labelledby="challenge-title">
        <div className={styles.sectionIndex}><span>01</span><p>Problem</p></div>
        <div className={styles.challengeContent}>
          <p className={styles.eyebrow}>Punkt wyjścia</p>
          <h2 id="challenge-title">Zderzenie dwóch kultur projektowania.</h2>
          <div className={styles.challengeGrid}>
            <p>Zarząd o silnym zapleczu inżynieryjnym preferował tradycyjne, gęste informacyjnie układy. Duża ilość treści, terminologii i danych była dla niego dowodem kompetencji. Zespół marketingowy widział natomiast potrzebę nowocześniejszej narracji, większej czytelności i wyraźniejszych ścieżek konwersji.</p>
            <p>Moja rola polegała na znalezieniu rozwiązania pomiędzy tymi perspektywami. Projekt miał zachować techniczną wiarygodność firmy, a jednocześnie pozwolić użytkownikowi stopniowo wejść w szczegóły i ocenić dopasowanie oferty. Wspólnym kierunkiem stała się hierarchia: od przeglądu kompetencji do szczegółów usług i przykładów realizacji.</p>
          </div>
          <div className={styles.problemStrip}>
            <div><strong>Ciężar treści</strong><span>Duża liczba danych i techniczny język były wartością, ale bez hierarchii utrudniały skanowanie strony.</span></div>
            <div><strong>Wiele perspektyw</strong><span>Zarząd, marketing i użytkownicy definiowali „dobrą stronę” w zupełnie inny sposób.</span></div>
            <div><strong>Skala międzynarodowa</strong><span>Architektura musiała obsłużyć różnice oferty i komunikacji w Propoint GmbH.</span></div>
          </div>
        </div>
      </section>

      <section className={styles.audience} aria-labelledby="audience-title">
        <div><p className={styles.eyebrow}>Stakeholder management</p><h2 id="audience-title">Trzy perspektywy.<br />Jeden produkt.</h2></div>
        <div className={styles.audienceList}>{audiences.map((item, index) => <article key={item.role}><span>0{index + 1}</span><h3>{item.role}</h3><p>{item.need}</p></article>)}</div>
      </section>

      <section className={styles.process} id="proces" aria-labelledby="process-title">
        <header className={styles.sectionHeader}>
          <div className={styles.sectionIndex}><span>02</span><p>Proces</p></div>
          <div><p className={styles.eyebrow}>Od alignmentu do systemu</p><h2 id="process-title">Najpierw wspólny język.<br />Potem interfejs.</h2></div>
        </header>
        <div className={styles.processLayout}>
          <div className={styles.processList}>{processSteps.map(step => <article key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div>
          <div className={styles.wireframe} role="img" aria-label="Schemat architektury informacji i wireframes">
            {/* MOCKUP: Mapa architektury informacji i wireframes */}
            <div className={styles.sitemap}><span>HOME</span><i /><div><span>USŁUGI</span><span>BRANŻE</span><span>WIEDZA</span></div><i /><div><span>PLC</span><span>SYMULACJE</span><span>KONTAKT</span></div></div>
            <p>Architektura ekosystemu PL / DE · v3</p>
          </div>
        </div>
      </section>

      <section className={styles.megaMenu} aria-labelledby="mega-title">
        <div className={styles.megaCopy}><p className={styles.eyebrow}>Kluczowy kompromis UX</p><h2 id="mega-title">Gęstość informacji pod kontrolą.</h2><p>Mega Menu stało się kompromisem między potrzebą pokazania szerokości oferty a czytelnością pierwszego kontaktu. Techniczna treść nie została usunięta — otrzymała poziomy ważności, przewidywalne grupy i ścieżki dopasowane do intencji użytkownika.</p><ul><li><span>01</span>Pełna oferta widoczna bez płaskiej listy kilkudziesięciu linków</li><li><span>02</span>Spójne nazewnictwo i logika dla wariantów PL oraz DE</li><li><span>03</span>Powiązanie usług z realizacjami, wiedzą i kontaktem</li></ul></div>
        <div className={styles.menuVisual} role="img" aria-label="Makieta Mega Menu Propoint"><div className={styles.menuTop}>PROPOINT <span>OFERTA　 BRANŻE　 REALIZACJE　 WIEDZA</span></div><div className={styles.menuGrid}><div><small>01</small><strong>Automatyzacja</strong><p>PLC i SCADA<br />Robotyzacja<br />Integracja systemów</p></div><div><small>02</small><strong>Narzędzia cyfrowe</strong><p>Digital Twin<br />Symulacje OLP<br />Wirtualny rozruch</p></div><div><small>03</small><strong>Elektrotechnika</strong><p>Szafy sterownicze<br />Projektowanie EPLAN<br />Instalacje</p></div></div></div>
      </section>

      <section className={styles.solutions} aria-labelledby="solutions-title">
        <header className={styles.sectionHeader}>
          <div className={styles.sectionIndex}><span>03</span><p>UI Design</p></div>
          <div><p className={styles.eyebrow}>Design system i kompromis UX</p><h2 id="solutions-title">Dużo treści.<br />Bez wizualnego chaosu.</h2></div>
        </header>
        <div className={styles.solutionGrid}>
          <article className={styles.solutionLarge}><BrowserMockup title="Homepage / prowadzenie przez ofertę" tone="dark" /><div><span>01</span><h3>Strona główna</h3><p>Nowa narracja zaczyna się od problemów i kompetencji, a następnie prowadzi do konkretnych usług, realizacji oraz wiedzy eksperckiej.</p></div></article>
          <article><BrowserMockup title="Automatyzacja / usługa" /><div><span>02</span><h3>Podstrony usług</h3><p>Modularny szablon łączy opis rozwiązania, zakres kompetencji, proces współpracy i dowody doświadczenia.</p></div></article>
          <article><BrowserMockup title="Propoint GmbH / wariant międzynarodowy" tone="orange" /><div><span>03</span><h3>Propoint GmbH</h3><p>Wariant międzynarodowy wykorzystuje wspólny model informacji i komponenty, zachowując możliwość dopasowania oferty, języka i priorytetów rynku.</p></div></article>
          <article className={styles.solutionWide}><BrowserMockup title="Formularz kontaktowy / kwalifikacja leada" /><div><span>04</span><h3>Lead generation</h3><p>Formularz zbiera kontekst projektu bez przeciążania użytkownika. Pytania dopasowują się do wybranego obszaru usługi, dzięki czemu ekspert otrzymuje lepiej przygotowane zapytanie.</p></div></article>
        </div>
      </section>

      <section className={styles.impact} id="rezultaty" aria-labelledby="impact-title">
        <header><p className={styles.eyebrow}>Rozwiązania i cele projektu</p><h2 id="impact-title">Techniczna szczegółowość z czytelną hierarchią.</h2></header>
        <div className={styles.results}>{results.map(result => <article key={result.value}><span>{result.value}</span><h3>{result.title}</h3><p>{result.text}</p></article>)}</div>
        <blockquote>„Najważniejszym efektem projektu nie był nowy wygląd. Było nim wypracowanie wspólnego języka dla zarządu, marketingu i użytkowników — bez utraty technicznej wiarygodności marki.”</blockquote>
      </section>


    </CaseStudy>
  );
}
