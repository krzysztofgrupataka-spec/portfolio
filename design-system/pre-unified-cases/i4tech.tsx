import Link from "next/link";
import ProjectResponsibilities from "../ProjectResponsibilities";
import Image from "next/image";
import styles from "./i4tech.module.css";

const connections = [
  ["01", "Rozwiązania", "Co firma może zrobić dla konkretnego problemu?"],
  ["02", "Technologie", "Jakimi kompetencjami i metodami realizuje te rozwiązania?"],
  ["03", "Branże", "W jakim kontekście biznesowym działają?"],
  ["04", "Realizacje", "Gdzie można zobaczyć ich zastosowanie w praktyce?"],
];

export default function I4TechPage() {
  return <main className={styles.page} data-case-study>
    <header className={styles.hero}>
      <nav><Link href="/" className={styles.brand}>KT<span>®</span></Link><span>Case study · 2024–2025</span><Link href="/">← Portfolio</Link></nav>
      <div className={styles.heroGrid}><div><p className={styles.eyebrow}>i4TECH / WWW</p><h1>Porządek<br /><em>w złożoności.</em></h1></div><p className={styles.lead}>Nowa strona dla firmy specjalizującej się w zaawansowanych technologiach dla przemysłu i ochrony środowiska.</p></div>
      <div className={styles.visual}><div className={styles.visualLabel}>i4TECH / DIGITAL PLATFORM</div><div className={`${styles.orbit} ${styles.orbitOne}`}/><div className={`${styles.orbit} ${styles.orbitTwo}`}/><div className={styles.core}>i4<br /><span>technology<br />for impact</span></div><div className={styles.visualFooter}><span>Solutions / Technology / Industries</span><span>Scroll to explore ↓</span></div></div>
      <dl className={styles.meta}><div><dt>Rola</dt><dd>UX/UI Designer</dd></div><div><dt>Zakres</dt><dd>Research, UX, UI, SEO, content</dd></div><div><dt>Branża</dt><dd>Technologie przemysłowe</dd></div><div><dt>Partner</dt><dd>Grupa TAKA</dd></div></dl>
      </header>
      <ProjectResponsibilities project="i4tech" />
    <section className={styles.statement}><p className={styles.eyebrow}>01 / Kontekst</p><h2>Strona musiała wyjaśniać nie tylko czym zajmuje się i4TECH, ale też jak poszczególne kompetencje łączą się ze sobą.</h2><div className={styles.copy}><p>Punktem wyjścia była rozbudowana oferta, różne grupy odbiorców oraz potrzeba uporządkowania języka firmy. Stara strona nie prowadziła użytkownika wystarczająco jasno od problemu do rozwiązania.</p><p>Nowy serwis zaprojektowaliśmy jako system powiązanych ścieżek. Użytkownik może wejść przez rozwiązanie, technologię, branżę albo konkretną realizację — i za każdym razem zobaczyć pełniejszy obraz kompetencji i4TECH.</p></div></section>
    <section className={styles.workshop}><div><p className={styles.eyebrow}>01.1 / Warsztaty UX</p><h2>Najpierw zobaczyliśmy<br /><em>cały system.</em></h2><p>Podczas warsztatów zebraliśmy cele użytkowników, punkty styku i informacje, których szukają różne grupy odbiorców. Na tej podstawie uporządkowaliśmy ofertę oraz zaplanowaliśmy połączenia między jej obszarami.</p></div><figure><Image src="/images/i4tech/workshop-map.jpg" alt="Mapa warsztatowa i4TECH: cele użytkowników oraz architektura oferty" width={29008} height={13740} sizes="(max-width: 800px) 100vw, 70vw" /><figcaption>Mapa warsztatowa: cele użytkowników, punkty styku i architektura treści.</figcaption></figure></section>
    <section className={styles.system}><div className={styles.sectionHead}><p className={styles.eyebrow}>02 / Architektura</p><h2>Cztery punkty wejścia.<br /><em>Jeden ekosystem.</em></h2></div><div className={styles.connectionGrid}>{connections.map(([number,title,text])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}</div></section>
    <section className={styles.process}><p className={styles.eyebrow}>03 / Proces projektowy</p><h2>Od researchu<br />do wdrożenia.</h2><div className={styles.steps}><div><span>01</span><h3>Research i analiza potrzeb</h3><p>Przegląd istniejącego serwisu, oferty, grup odbiorców i sposobów wyszukiwania informacji.</p></div><div><span>02</span><h3>Warsztaty UX</h3><p>Wspólne mapowanie obszarów biznesu, relacji między nimi i kluczowych scenariuszy użytkownika.</p></div><div><span>03</span><h3>UI, development i SEO</h3><p>Przekucie struktury w elastyczny interfejs, treści gotowe dla wyszukiwarki i wdrożenie nowej strony.</p></div></div></section>
    <section className={styles.outcome}><p className={styles.eyebrow}>04 / Efekt</p><h2>Kompetencje firmy<br />stały się nawigacją.</h2><p>Nowa strona pozwala opowiadać o i4TECH z różnych perspektyw, a jednocześnie prowadzi użytkownika do konkretnych dowodów: realizacji, technologii i zastosowań.</p><Link href="https://dev2.grupataka.pl/i4tech/" target="_blank">Zobacz nową stronę ↗</Link></section>
    <footer><Link href="/">← Wróć do wszystkich projektów</Link><small>© {new Date().getFullYear()} Krzysztof Tomecki</small></footer>
  </main>;
}
