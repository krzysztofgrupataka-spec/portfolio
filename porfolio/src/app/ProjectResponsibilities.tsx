import Image from "next/image";
import styles from "./responsibilities.module.css";

const content = {
  likeat: {
    intro: "Pracowałem nad stroną, która łączy prezentację cateringu z konkretnym celem sprzedażowym: ułatwić wybór diety i przejście do zamówienia. Ważną częścią tej pracy było pogodzenie potrzeb użytkowników, kampanii reklamowych i istniejącej struktury SEO.",
    tasks: [
      ["Architektura oferty", "Porządkowałem sposób prezentowania diet i powiązania pomiędzy podstronami. Mapa warsztatowa obejmuje nawigację główną, strony oferty i stopkę — pozwala spojrzeć na wybór diety jako część całej drogi użytkownika, a nie pojedynczy ekran."],
      ["Współpraca z agencją SEO", "Pracowałem w ścisłej współpracy z agencją odpowiedzialną za SEO. Zachowanie i ulepszenie struktury linków było jednym z założeń redesignu. Zmiany w nawigacji musiały uwzględniać istniejące powiązania stron, a jednocześnie pomagać odbiorcom odnaleźć ofertę."],
      ["Strony lokalne i linkowanie", "Mapa serwisu uwzględnia osobne strony SEO dla miast oraz prowadzące do nich odnośniki w stopce. Ten obszar łączy potrzeby wyszukiwania lokalnego z architekturą całej witryny: użytkownik może rozpocząć wizytę od lokalizacji, a następnie przejść do poznania oferty."],
      ["Konwersja i kampanie", "Projektowałem prezentację oferty z myślą o szybkim przejściu do zamówienia oraz ruchu z Meta i Google. Istotna była ciągłość pomiędzy komunikatem kampanii, informacjami na stronie i kolejnym działaniem użytkownika. Konwersja stanowiła cel projektowy, obok czytelności i spójności marki."]
    ],
    lesson: "W tym projekcie architektura informacji była wspólnym obszarem pracy UX i SEO. Czytelna oferta, dostęp do zamówienia i struktura linków wymagały uzgodnień w ramach jednego serwisu.",
  },
  i4tech: {
    intro: "Moja praca obejmowała analizę potrzeb, warsztaty UX oraz projektowanie interfejsu dla rozbudowanej oferty technologicznej. Proces projektu prowadził od researchu przez makiety i UI do developmentu i wdrożenia. Ważnym wątkiem były także SEO oraz copywriting.",
    tasks: [
      ["Cele użytkowników jako punkt wyjścia", "Na warsztatach porządkowaliśmy potrzeby obecnych klientów, potencjalnych klientów i kandydatów do pracy. Mapa obejmuje punkty styku, poszukiwane informacje oraz końcowe działania. Dzięki temu architekturę można było rozpatrywać z perspektywy różnych powodów odwiedzenia strony."],
      ["Powiązania zamiast odizolowanych kategorii", "Pracowałem nad strukturą łączącą rozwiązania, technologie, branże i realizacje. Użytkownik nie musi znać terminologii firmy, aby rozpocząć poszukiwania: może wejść przez własną branżę, poznać rozwiązanie i sprawdzić jego zastosowanie w realizacji."],
      ["Od struktury do interfejsu", "Projektowanie UI opierało się na uporządkowanej architekturze. Kluczowe było pokazanie relacji między obszarami oferty i umożliwienie przechodzenia między nimi. Realizacje i case studies pełnią w tej narracji rolę konkretnych przykładów kompetencji firmy."],
      ["SEO i copywriting", "Projekt obejmował analizę i dobór fraz oraz opracowanie treści pod wyszukiwarkę. Równolegle ważna była ich czytelność: opisy miały pomóc odbiorcy zrozumieć ofertę i powiązania między technologią a zastosowaniem. Struktura informacji i język strony powstawały jako elementy tego samego zadania."]
    ],
    lesson: "Najważniejsza decyzja dotyczyła wielu punktów wejścia do tej samej oferty. Powiązanie technologii z branżą i realizacją pozwala wyjaśnić jej znaczenie w konkretnym kontekście.",
  },
  fabb: {
    intro: "Praca nad Fabb łączyła prezentację marki i katalogu z rozwojem funkcji przydatnych w relacjach B2B. Zakres opisany w projekcie obejmuje architekturę informacji, interfejs katalogu, system komponentów i mobilny dostęp do materiałów sprzedażowych.",
    tasks: [
      ["Porządkowanie katalogu", "W katalogu trzeba pogodzić wizualny wybór tkaniny z oceną jej parametrów. Praca projektowa obejmowała hierarchię informacji: od koloru i faktury po zastosowanie, właściwości i dokumentację. Każdy z tych elementów odpowiada na inne pytanie podczas wyboru materiału."],
      ["Projektowanie dla różnych zastosowań", "Architekt poszukujący materiałów projektowych i handlowiec prezentujący ofertę korzystają z tej samej wiedzy w różnych sytuacjach. Rozdzielenie ścieżek katalogowych i dostępu do zasobów pozwala dostosować interfejs do kontekstu pracy."],
      ["Rozwój spójnego interfejsu", "System sekcji i komponentów porządkuje kolejne odsłony komunikacji: katalog, premiery i materiały kampanijne. Sens tej pracy polega na utrzymaniu spójnej prezentacji marki przy rozwoju zawartości serwisu."]
    ],
    lesson: "Rozwój katalogu wymaga ponownego spojrzenia na priorytety. Obok atrakcyjnej prezentacji materiału coraz ważniejsze stają się odnajdywanie informacji i dostęp do zasobów.",
  },
  propoint: {
    intro: "W projekcie Propoint głównym obszarem pracy była architektura informacji i przełożenie technicznej oferty na czytelny interfejs. Opisany proces obejmuje współpracę z marketingiem, makiety, projektowanie UI i wspólną logikę dla wariantów polskiego oraz niemieckiego.",
    tasks: [
      ["Uzgodnienie hierarchii treści", "Praca nad hierarchią wymagała pogodzenia szczegółowości technicznej z możliwością szybkiego przeglądania oferty. Informacje ogólne powinny pomagać w wyborze obszaru, a szczegóły dawać podstawę do oceny kompetencji i rozpoczęcia rozmowy."],
      ["Architektura i nawigacja", "Grupowanie usług i projektowanie nawigacji stanowiły podstawę kolejnych widoków. Powiązanie oferty z realizacjami oraz wiedzą pozwala prowadzić użytkownika od zainteresowania usługą do poznania jej kontekstu."],
      ["Spójność między serwisami", "Wspólny model informacji dla Propoint i Propoint GmbH wymaga uwzględnienia różnic oferty. Projektowanie modułów daje punkt wyjścia do adaptacji treści, przy zachowaniu rozpoznawalnej hierarchii i sposobu poruszania się po stronie."]
    ],
    lesson: "W serwisie inżynieryjnym czytelność wynika z kolejności i powiązań informacji. Techniczna szczegółowość potrzebuje odpowiedniego miejsca w ścieżce użytkownika.",
  },
};

export default function ProjectResponsibilities({ project }: { project: keyof typeof content }) {
  const item = content[project];
  return <section className={styles.section} aria-labelledby="responsibilities-title">
    <header><p className={styles.label}>Rola · Zakres pracy · Decyzje</p><h2 id="responsibilities-title">Co obejmowała<br />moja praca.</h2><p className={styles.intro}>{item.intro}</p></header>
    <div className={styles.tasks}>{item.tasks.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
    {project === "likeat" && <figure className={styles.figure}><a href="/images/likeat/workshop-map.jpg" target="_blank" rel="noreferrer" aria-label="Otwórz mapę warsztatową Likeat w pełnym rozmiarze"><Image src="/images/likeat/workshop-preview.jpg" alt="Mapa warsztatowa Likeat: nawigacja główna, mapa stron, linki w stopce i strony SEO dla miast" width={1800} height={958} sizes="90vw" /></a><figcaption>Materiał z warsztatów — struktura serwisu i linkowanie. Kliknij, aby obejrzeć szczegóły.</figcaption><a href="https://www.figma.com/proto/bNGRfE5OaPQr9ut3huMh3f/Projekt-Likeat?node-id=601-1772&starting-point-node-id=966%3A1347&page-id=601%3A917" target="_blank" rel="noreferrer">Zobacz projekt w Figmie ↗</a></figure>}
    <aside className={styles.lesson}><h3>Wniosek projektowy</h3><p>{item.lesson}</p></aside>
  </section>;
}
