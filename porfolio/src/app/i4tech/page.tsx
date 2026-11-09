import CaseStudy from "../CaseStudy";
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
  return <CaseStudy project="i4tech">

      <ProjectResponsibilities project="i4tech" />
    <section className={styles.statement}><p className={styles.eyebrow}>01 / Kontekst</p><h2>Strona musiała wyjaśniać nie tylko czym zajmuje się i4TECH, ale też jak poszczególne kompetencje łączą się ze sobą.</h2><div className={styles.copy}><p>Punktem wyjścia była rozbudowana oferta, różne grupy odbiorców oraz potrzeba uporządkowania języka firmy. Stara strona nie prowadziła użytkownika wystarczająco jasno od problemu do rozwiązania.</p><p>Nowy serwis zaprojektowaliśmy jako system powiązanych ścieżek. Użytkownik może wejść przez rozwiązanie, technologię, branżę albo konkretną realizację — i za każdym razem zobaczyć pełniejszy obraz kompetencji i4TECH.</p></div></section>
    <section className={styles.workshop}><div><p className={styles.eyebrow}>01.1 / Warsztaty UX</p><h2>Najpierw zobaczyliśmy<br /><em>cały system.</em></h2><p>Podczas warsztatów zebraliśmy cele użytkowników, punkty styku i informacje, których szukają różne grupy odbiorców. Na tej podstawie uporządkowaliśmy ofertę oraz zaplanowaliśmy połączenia między jej obszarami.</p></div><figure><Image src="/images/i4tech/workshop-preview.jpg" alt="Mapa warsztatowa i4TECH: cele użytkowników oraz architektura oferty" width={1600} height={758} sizes="(max-width: 800px) 100vw, 70vw" /><figcaption>Mapa warsztatowa: cele użytkowników, punkty styku i architektura treści.</figcaption></figure></section>
    <section className={styles.system}><div className={styles.sectionHead}><p className={styles.eyebrow}>02 / Architektura</p><h2>Cztery punkty wejścia.<br /><em>Jeden ekosystem.</em></h2></div><div className={styles.connectionGrid}>{connections.map(([number,title,text])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}</div></section>
    <section className={styles.process}><p className={styles.eyebrow}>03 / Proces projektowy</p><h2>Od researchu<br />do wdrożenia.</h2><div className={styles.steps}><div><span>01</span><h3>Research i analiza potrzeb</h3><p>Przegląd istniejącego serwisu, oferty, grup odbiorców i sposobów wyszukiwania informacji.</p></div><div><span>02</span><h3>Warsztaty UX</h3><p>Wspólne mapowanie obszarów biznesu, relacji między nimi i kluczowych scenariuszy użytkownika.</p></div><div><span>03</span><h3>UI, development i SEO</h3><p>Przekucie struktury w elastyczny interfejs, treści gotowe dla wyszukiwarki i wdrożenie nowej strony.</p></div></div></section>
    <section className={styles.outcome}><p className={styles.eyebrow}>04 / Efekt</p><h2>Kompetencje firmy<br />stały się nawigacją.</h2><p>Nowa strona pozwala opowiadać o i4TECH z różnych perspektyw, a jednocześnie prowadzi użytkownika do konkretnych dowodów: realizacji, technologii i zastosowań.</p><Link href="https://dev2.grupataka.pl/i4tech/" target="_blank">Zobacz nową stronę ↗</Link></section>

  </CaseStudy>;
}
