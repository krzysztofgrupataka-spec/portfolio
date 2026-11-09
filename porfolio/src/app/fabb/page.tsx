import CaseStudy from "../CaseStudy";
import Image from "next/image";
import Recording from "./Recording";
import styles from "./narrative.module.css";

const materials = [
  { id: "01", title: "Okładka: katalog kolekcji na fabb.pl", file: "01-cover.webp", format: "Desktop · 1600 × 1000 px", brief: "Pokaż widok listy kolekcji na fabb.pl/tkaniny/ i fragment podstrony ALEXIA. Jeden duży ekran, bez perspektywy i drobnych, nieczytelnych miniaturek.", purpose: "Od razu pokazuje jakość interfejsu i charakter materiałów." },
  { id: "02", title: "Dwa etapy rozwoju serwisu", file: "02-evolution.webp", format: "Porównanie · 1600 × 900 px", brief: "Zestaw wcześniejszą i późniejszą wersję tego samego obszaru. Podpisz daty oraz zaznacz, co zmieniło się w nawigacji lub dostępie do zasobów. Jeśli nie masz starszych ekranów, użyj dwóch datowanych map zakresu.", purpose: "Dokumentuje przejście od prezentacji marki do funkcji B2B." },
  { id: "03", title: "Podstrona ALEXIA: od faktury do parametrów", file: "03-product.webp", format: "Desktop · 1600 × 1200 px", brief: "Pokaż podstronę fabb.pl/kolekcje/alexia/: kolorystykę, aranżacje, specyfikację techniczną i odnośniki do materiałów. Dodaj 3 krótkie adnotacje wskazujące hierarchię informacji.", purpose: "Wyjaśnia, jak interfejs łączy ocenę wizualną z weryfikacją zastosowania." },
  { id: "04", title: "Katalog na stronie: znalezienie kolekcji", file: "04-catalog.webp", format: "Dwa stany · 1600 × 1000 px", brief: "Pokaż listę na fabb.pl/tkaniny/ z kategoriami i polem „Szukaj tkaniny”, a obok wynik wyszukania ALEXIA. Zaznacz przejście do podstrony kolekcji.", purpose: "Pokazuje działanie rozwiązania zamiast samego wyglądu listy produktów." },
  { id: "05", title: "Strefa handlowca na telefonie", file: "05-sales-mobile.webp", format: "Sekwencja 3 ekranów · 1600 × 1100 px", brief: "Pokaż wejście do strefy, wybór kategorii materiałów i dotarcie do pliku. Zanonimizuj dane oraz materiały niepubliczne. Dodaj krótkie podpisy kroków, bez deklarowania niezmierzonego czasu obsługi.", purpose: "Udowadnia, jak projekt odpowiada na kontekst spotkań i targów." },
  { id: "06", title: "Sekcje do przyszłych landing page’y", file: "06-components.webp", format: "Porównanie · 1600 × 1000 px", brief: "Pokaż gotowe sekcje do przyszłych kampanii Meta i Google oraz przykładowe złożenie landing page’a. Jeśli kampania nie została uruchomiona, podpisz widok jako projekt.", purpose: "Pokazuje przygotowanie serwisu do kolejnych kampanii." },
];

function Material({ id }: { id: string }) {
  if (id === "02") return <div id="material-02"><div className={styles.versionGrid}><Version file="home-first.jpg" title="Pierwsza wersja strony" width={3840} height={6912} caption="Duża fotografia otwierająca, manifest marki i wyróżniona kolekcja." /><Version file="home-current.png" title="Nowa wersja strony" width={1905} height={7871} caption="Kategorie według zastosowania, prezentacja kolekcji i rozbudowane wejścia do oferty." /></div><h3>Zmiana sposobu przeglądania katalogu</h3><div className={styles.versionGrid}><Version file="catalog-first.jpg" title="Pierwsza wersja katalogu" width={3840} height={5534} caption="Wizerunkowe otwarcie i wybór kategorii, na screenie „Flat weaves”." /><Version file="catalog.png" title="Nowa wersja katalogu" width={1920} height={944} caption="Widoczne kategorie zastosowań, wyszukiwarka oraz liczba kolekcji." /></div></div>;
  if (id === "01") return <Screen file="amalia.png" alt="Podstrona kolekcji AMALIA: faktura tkaniny, aranżacje, opis i materiały do pobrania" caption="Kolekcja AMALIA — prezentacja materiału i informacje dla odbiorców B2B." id="material-01" />;
  if (id === "03") return <div id="material-03"><Screen file="amalia-colors.png" alt="Wybór koloru tkaniny AMALIA z palety wariantów" caption="Warianty kolorystyczne kolekcji AMALIA." /><div className={styles.mobileGallery}><Screen file="holms-mobile.png" alt="Mobilny widok kolekcji HOLMS z przyciskami kontaktu i zamówienia wzornika" caption="HOLMS na telefonie — prezentacja kolekcji." mobile /><Screen file="holms-details-mobile.png" alt="Mobilny widok opisu HOLMS z dostępem do specyfikacji i banku zdjęć" caption="Opis kolekcji i dostęp do dokumentacji." mobile /></div><Recording file="vito.webm" caption="Nagranie podstrony kolekcji VITO." /></div>;
  if (id === "04") return <div id="material-04"><Screen file="catalog.png" alt="Katalog tkanin Fabb: kategorie, wyszukiwarka i początek listy kolekcji" caption="Kategorie według rodzaju i zastosowania tkanin oraz wyszukiwanie kolekcji." /><Screen file="catalog-detail.png" alt="Karty kolekcji ZEBRA, ZIVA i ATOMIC ze zdjęciami faktur" caption="Karty kolekcji eksponują fakturę materiału i wejście do szczegółów." /><Recording file="catalog.webm" caption="Nagranie katalogu tkanin na stronie Fabb." /></div>;
  const item = materials.find(material => material.id === id)!;
  return <figure className={styles.asset} id={`material-${id}`}>
    <div className={styles.assetPanel}>
      <span className={styles.assetTag}>Do uzupełnienia · materiał {item.id}</span>
      <strong>{item.title}</strong>
      <p>{item.brief}</p>
      <div className={styles.assetMeta}><span>{item.format}</span><code>{item.file}</code></div>
    </div>
    <figcaption>{item.purpose}</figcaption>
  </figure>;
}

function Version({ file, title, width, height, caption }: { file: string; title: string; width: number; height: number; caption: string }) {
  return <figure className={styles.version}><h3>{title}</h3><div className={styles.versionViewport} tabIndex={0} role="region" aria-label={`${title} — przewijany podgląd`}><Image src={`/images/fabb/${file}`} alt={title} width={width} height={height} sizes="(max-width: 767px) 90vw, 600px" /></div><figcaption>{caption} <a href={`/images/fabb/${file}`} target="_blank" rel="noreferrer">Otwórz pełny ekran ↗</a></figcaption></figure>;
}

function Screen({ file, alt, caption, mobile = false, id }: { file: string; alt: string; caption: string; mobile?: boolean; id?: string }) {
  return <figure className={styles.screen} id={id}><a href={`/images/fabb/${file}`} target="_blank" rel="noreferrer" aria-label={`${alt} — otwórz pełny rozmiar`}><Image src={`/images/fabb/${file}`} alt={alt} width={mobile ? 1082 : 1920} height={mobile ? 2426 : 944} sizes={mobile ? "(max-width: 767px) 85vw, 400px" : "(max-width: 767px) 100vw, 1200px"} /></a><figcaption>{caption}</figcaption></figure>;
}


export default function FabbProjectPage() {
  return <CaseStudy project="fabb" cover={<Material id="01" />}>
    <section className={styles.opening} aria-labelledby="fabb-context">
      
      <h2 id="fabb-context">Strona marki tkanin zaprojektowana z myślą o partnerach B2B.</h2>
      <div className={styles.split}>
        <p>Fabb to producent i dystrybutor tkanin z Bielska-Białej, działający na rynkach międzynarodowych. Poprzednia strona, choć estetyczna, zwracała się głównie do użytkownika końcowego. Nowy serwis miał odpowiadać na potrzeby producentów mebli, dystrybutorów i projektantów wnętrz: prezentować kolekcje, dostarczać informacje o materiałach i zachęcać do współpracy.</p>
        <div><p>W zespole GrupaTAKA pracowałem jako projektant UX i programista strony. Mój zakres obejmował architekturę informacji, interfejs katalogu oraz rozwój funkcji serwisu, w tym mobilnego dostępu do materiałów dla handlowców. Punktem wyjścia była strategia komunikacji opracowana przez zespół agencji.</p></div>
      </div>
      <nav className={styles.chapterNav} aria-label="Rozdziały projektu Fabb"><a href="#fabb-product">01 · Wybór tkaniny</a><a href="#fabb-sales">02 · Praca handlowca</a><a href="#fabb-system">03 · Rozwój serwisu</a><a href="#fabb-materials">Lista materiałów ↓</a></nav>
    </section>

    <section aria-labelledby="fabb-evolution">
      
      <h2 id="fabb-evolution">Od nowej strony B2B do rozbudowy w 2026 roku.</h2>
      <p>Pierwszy etap obejmował wielojęzyczną stronę z rozbudowanym katalogiem tkanin. Obok prezentacji produktów serwis miał pokazywać wartości marki i charakter współpracy z Fabb. Wspierał też prezentację oferty podczas międzynarodowych targów branżowych.</p>
      <p>W 2026 roku, w odpowiedzi na aktualne potrzeby firmy i handlowców, rozbudowaliśmy stronę. Zmiany objęły kategorie tkanin i strukturę linków, bibliotekę plików, treści pod SEO, zabezpieczoną strefę handlowca oraz gotowe elementy do przyszłych landing page’y. Założeniem było zachowanie wyrazistej estetyki przy większym nacisku na funkcjonalność.</p>
      <Material id="02" />
      
    </section>

    <section aria-labelledby="fabb-brand-title">
      <h2 id="fabb-brand-title">Przełożyć „Weaving bonds” na doświadczenie strony.</h2>
      <div className={styles.split}><p>Strategia agencji opierała komunikację Fabb na relacjach z partnerami i idei „Weaving bonds” — tkania więzi. Strona miała pokazać, czym wyróżnia się współpraca z marką, a jednocześnie dostarczać konkretów potrzebnych do oceny oferty.</p><p>Warstwa wizualna wykorzystywała rendery, aranżacje, grafiki i materiały wideo, aby prezentować faktury, kolorystykę oraz zastosowania tkanin. Towarzyszyły im parametry użytkowe, informacje o certyfikatach i treści skierowane do odbiorców biznesowych.</p></div>
    </section>

    <section id="fabb-product" aria-labelledby="fabb-product-title">
      
      <h2 id="fabb-product-title">Połączyć ocenę wizualną z informacją techniczną.</h2>
      <div className={styles.split}><div><h3>Problem do rozwiązania</h3><p>Architekt ocenia kolor i fakturę, ale potrzebuje też parametrów, certyfikatów i materiałów projektowych. Karta tkaniny musi obsługiwać oba rodzaje informacji, a katalog pomagać w zawężaniu oferty.</p></div><div><h3>Rozwiązanie</h3><p>Lista kolekcji na stronie udostępnia kategorie i wyszukiwanie po nazwie tkaniny. Podstrona AMALIA łączy opis, kolorystykę i aranżacje ze specyfikacją oraz dostępem do banku zdjęć, karty gwarancyjnej i próbnika kolorów.</p></div></div>
      <Material id="03" />
      <Material id="04" />
      
    </section>

    <section id="fabb-sales" aria-labelledby="fabb-sales-title">
      
      <h2 id="fabb-sales-title">Dać handlowcom osobne wejście do potrzebnych zasobów.</h2>
      <div className={styles.split}><div><h3>Kontekst użycia</h3><p>Podczas spotkań i targów strona służy także do prezentowania oferty. Handlowiec potrzebuje dostępu do materiałów w kontekście rozmowy z klientem, często na telefonie.</p></div><div><h3>Rozwiązanie</h3><p>Dedykowana, zabezpieczona strefa porządkuje pliki prasowe i techniczne. Jej mobilny interfejs wydziela dostęp do zasobów z publicznej ścieżki przeglądania kolekcji.</p></div></div>
      <Material id="05" />
      <h3>Publiczna biblioteka materiałów</h3>
      <p>Osobna strona porządkuje pliki według ich rodzaju: zdjęcia kolekcji, karty techniczne, instrukcje czyszczenia oraz certyfikaty i karty gwarancyjne. Wyszukiwarka pozwala odnaleźć materiał po nazwie, a karty wskazują format lub miejsce pobrania.</p>
      <Screen file="downloads.png" alt="Biblioteka materiałów Fabb z kategoriami, wyszukiwarką oraz kartami plików ALEXIA i AMALIA" caption="Materiały do pobrania — publiczny dostęp do zasobów kolekcji." />
      <div className={styles.downloadMobile}><Screen file="downloads-mobile.png" alt="Publiczna biblioteka materiałów Fabb na telefonie" caption="Biblioteka plików w widoku mobilnym." mobile /></div>
      
    </section>

    <section id="fabb-system" aria-labelledby="fabb-system-title">
      
      <h2 id="fabb-system-title">Przygotować stronę na kolejne kampanie.</h2>
      <p>Przygotowaliśmy gotowe elementy do budowy landing page’y na potrzeby przyszłych kampanii w Meta i Google. Pozwalają komponować dedykowane strony w ramach języka wizualnego Fabb.</p>
      <p>Szersza współpraca obejmowała również serwisy submarek. Wspólnym założeniem była spójność wizualna z marką główną, przy zachowaniu charakteru każdej z nich.</p>
      <Material id="06" />
      
    </section>

    <section aria-labelledby="fabb-outcome">
      
      <h2 id="fabb-outcome">Strona wykorzystywana w sprzedaży i na targach.</h2>
      <ul className={styles.deliverables}><li>Katalog kolekcji i podstrony tkanin na fabb.pl, łączące prezentację z dokumentacją.</li><li>Mobilna strefa dostępu do materiałów sprzedażowych.</li><li>System sekcji dla kolekcji, kampanii i komunikacji targowej.</li></ul>
      
      <p>Wielojęzyczny serwis służy Fabb jako miejsce prezentacji pełnej oferty potencjalnym partnerom, także podczas wydarzeń takich jak Heimtextil we Frankfurcie, IMM w Kolonii i FMC w Szanghaju. Rozbudowa z 2026 roku uzupełniła tę rolę o narzędzia wspierające codzienną pracę handlowców.</p>
      <p><a href="https://fabb.pl/" target="_blank" rel="noreferrer">Zobacz stronę Fabb ↗</a></p>
      <h3 className={styles.reflection}>Zespół projektu</h3>
      <p>GrupaTAKA: Piotr Skorus — kierunek kreatywny; Dawid Milewski — strategia komunikacji i copywriting; Weronika Szymborska — projektowanie graficzne; Krzysztof Tomecki — UX i programowanie strony; Magdalena Skorus — social media oraz foto/wideo. Projekt realizowany we współpracy z opiekunem projektu.</p>
      
    </section>

    <section id="fabb-materials" aria-labelledby="fabb-materials-title">
      
      <h2 id="fabb-materials-title">Materiały do uzupełnienia.</h2>
      <p>Porównanie obu wersji, katalog, karta AMALIA, mobilne widoki HOLMS, biblioteka plików i dwa nagrania są już uzupełnione. Pozostały materiały zabezpieczonej strefy handlowca i sekcji kampanijnych.</p>
      <ol className={styles.materialList}>{materials.filter(item => ["05", "06"].includes(item.id)).map(item => <li key={item.id}><a href={`#material-${item.id}`}><span>{item.id}</span><div><strong>{item.title}</strong><small>{item.file} · {item.format}</small></div><span aria-hidden="true">↑</span></a></li>)}</ol>
      
    </section>
  </CaseStudy>;
}



