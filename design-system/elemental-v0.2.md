# Elemental 0.2 — Cool Fall Breeze

Status: specyfikacja do budowy biblioteki Figma. Data: 20.10.2026.
Aktualizacja po przeglądzie wizualnym: poniższe decyzje zastępują wcześniejsze
reguły dotyczące etykiet, metadanych kafli i przycisków:
- WorkBlock zaczyna się od materiału projektu. Bez górnego numeru, kategorii i roku.
- Bez powtarzanego „Studium formy” i podpisu fontu wewnątrz miniatur.
- Hero i Contact bez drobnego eyebrow nad tytułem; sekcje nie potrzebują dodatkowych indeksów.
- UI/Label: Hanken Grotesk Medium, 14/20 px, tracking 0%, zwykła pisownia.
- UI/Button: Hanken Grotesk Medium, 16/20 px, tracking 0%, radius 8 px.
  MD padding 12×20 px, LG 14×20 px. Fokus oraz stany pozostają.
- WorkBlock gap 16 px. Wielkie litery pozostają w głównych display, nie w każdej etykiecie.
- W Figmie stare warstwy metadanych są ukryte dla zachowania istniejących instancji.
  W nowym HTML należy pominąć te elementy.

Zakres: autorskie portfolio UX/UI, nie uniwersalny system aplikacyjny.
Implementacja referencyjna: `elemental.css` w tym samym katalogu.
Ten dokument zastępuje decyzje z wersji 0.1. Nie zmienia istniejącej strony.

## 1. Kierunek artystyczny

Portfolio ma przypominać starannie złożoną publikację projektanta: silna typografia,
duże pola koloru i projekty pokazane z konkretną intencją. Hierarchia wynika ze skali,
odstępów i zawartości. Każdy ekran powinien mieć jeden wyraźny punkt ciężkości.

Referencje obejrzane 20.10.2026:
- [Katia Ziadova](https://kziadova.framer.website/): duży napis z nazwiskiem, szerokie
  marginesy, rozdzielenie informacji i materiału wizualnego, oszczędny przycisk pill.
  Przenosimy zasadę skali i oddechu. Nie kopiujemy nazwiska, zdjęcia ani projektów.
- [The Matter of Design](https://www.thematterofdesign.com/): nierówna mozaika
  pełnych pól, serifowe podpisy i kontrast między małym opisem a dużą powierzchnią.
  Przenosimy rytm i sposób grupowania treści. Nie kopiujemy monogramu M•D.

Poniższe reguły są własną interpretacją referencji, nie rekonstrukcją ich systemów.
Paleta Cool Fall Breeze pozostaje własną paletą Elemental.

### Charakterystyczne elementy Elemental

1. **Nameplate:** wielkie nazwisko wyrównane do lewej krawędzi treści. W HTML prawdziwy
   tekst. Przy długim nazwisku dopuszczalne dwie linie; bez ściskania liter i cropowania.
2. **Rytm szerokie–wąskie:** projekt główny zajmuje osiem z dwunastu kolumn,
   uzupełniający cztery. Kolejna para może odwrócić proporcje. O wielkości decyduje
   materiał, nie mechaniczna naprzemienność.
3. **Pola koloru:** butter, breeze i cocoa jako tła konkretnych projektów lub kontaktu.
   Wnętrza bloków pozostają spokojne; nie dodajemy ramek wokół każdej informacji.
4. **Akcent edytorski:** Fraunces w krótkim wstępie, cytacie albo tytule sekcji O mnie.
   Maksymalnie jeden wyraźny fragment serifowy w obrębie jednej kompozycji.
5. **Podpis redakcyjny:** numer projektu 01–08, nazwa, rola i rok. Numer jest częścią
   indeksu prac, nie dekoracyjnym prefiksem każdej sekcji.
6. **Prosty detal nawigacyjny:** pojedyncza strzałka ↗ przy przejściu do projektu
   lub zewnętrznej strony. Bez emoji i bez dodatkowej ikony w kolorowym kwadracie.

### Reguły przeciw generycznej estetyce

- Nie budować całej strony z identycznych kart z ikoną, nagłówkiem i akapitem.
- Nie stosować świecących gradientów, szkła, unoszących się kul, sztucznego ziarna,
  gradientowych słów w nagłówku ani losowych etykiet „innovation / creative”.
- Nie umieszczać każdej treści w pillu. Pill jest dla przycisku i krótkiego tagu.
- Nie dodawać paska logotypów, metryk, opinii ani badge'a dostępności bez prawdziwych danych.
- Opisy projektów mówią o problemie, roli i decyzji; bez sloganów „crafting experiences”.
- Każda miniatura pokazuje prawdziwy fragment pracy: ekran, detal interakcji, typografię
  lub materiał badawczy. Sam kolor z przypadkowym logotypem nie zastępuje projektu.
- Nie wymuszać 4–8 projektów. Trzy dobre projekty są lepsze niż sztuczne uzupełnienia.
- Wyjątkowy układ musi mieć powód: proporcje materiału, ważność projektu albo narrację.

Kropkowa siatka z 0.1 staje się **opcjonalnym detalem**, a nie znakiem głównym.
Nie odtwarzamy kropkowego monogramu referencji. Dopuszczalna jedna niewielka powierzchnia
na stronie, wyłącznie poza tekstem i obrazami pracy. Kropka 1 px, odstęp 12 px,
opacity 0.12; maksymalny obszar 144 × 144 px, dekoracyjny i ukryty przed czytnikiem.
Bez animacji. Domyślny wariant komponentów: bez tekstury.

## 2. Kolor i semantyka

HEX są wartościami ekranowymi sRGB. Dawne oznaczenia Pantone usunięto z tokenów:
nie potwierdzono zgodności druku z wartościami HEX.

| Token CSS / nazwa semantyczna Figma | Light | Dark | Użycie |
|---|---|---|---|
| surface-cream / surface/page | #f4eeda | #221c20 | Tło strony |
| surface-paper / surface/section | #fcfaf2 | #2b2429 | Alternatywne tło |
| surface-mist / surface/subtle | #eae2cc | #342c31 | Neutralny panel |
| line / border/decorative | #ddd3b8 | #453b41 | Wyłącznie dekoracja |
| border-control / border/control | #6f6168 | #b1a593 | Niezbędny obrys UI |
| ink / text/primary | #332a2d | #f1ead6 | Tekst na neutralnych tłach |
| ink-muted / text/secondary | #6f6168 | #b1a593 | Tekst drugorzędny na neutralnych tłach |
| butter / surface/butter | #ecdfa6 | #ecdfa6 | Jasne pole marki |
| breeze / surface/breeze | #b6c9d8 | #bcd0de | Jasne pole marki |
| cocoa / surface/brand | #453a3e | #6b565c | Ciemne pole marki |
| on-light / text/on-light | #332a2d | #332a2d | Tekst na butter i breeze |
| on-dark / text/on-brand | #f4eeda | #f4eeda | Tekst na cocoa |
| on-brand-muted / text/on-brand-secondary | #d9cfc5 | #e5dcca | Podpis na cocoa, opacity 1 |
| accent / focus/accent | #3f6c88 | #8fb6cd | Drobny akcent na neutralnych tłach |
| positive / status/success-text | #376448 | #7bbd94 | Tekst sukcesu na neutralnych tłach |
| caution / status/warning-text | #795610 | #e3c070 | Tekst ostrzeżenia na neutralnych tłach |
| critical / status/error-text | #963d33 | #e58a7c | Tekst błędu na neutralnych tłach |
| focus-light / focus/light | #fcfaf2 | #fcfaf2 | Jasna część podwójnego fokusu |
| focus-dark / focus/dark | #332a2d | #332a2d | Ciemna część podwójnego fokusu |

Zasady:
- Nie stosować `ink` na butter/breeze w Dark. Zawsze `on-light`.
- Nie przyciemniać małego tekstu przez opacity. Wszystkie podpisy mają opacity 1.
- Statusy potrzebują słownej etykiety; nie komunikują informacji wyłącznie kolorem.
- Statusy nie są kolorami dekoracji portfolio ani tłami przycisków.
- `line` nie służy do rysowania jedynej widocznej granicy kontrolki.
- Jeden główny kolor pola w sekcji; cocoa może równocześnie obsługiwać mały przycisk.
- Materiały projektów zachowują własne kolory. Dark nie odwraca kolorów screenshotów.

Przyciski stosują aliasy: action/primary/bg → surface/brand,
action/primary/text → text/on-brand; secondary → surface/breeze + text/on-light;
warm → surface/butter + text/on-light. Outline i Ghost wyłącznie na neutralnych
powierzchniach. Na cocoa używać Secondary lub Warm.

## 3. Typografia

Archivo: display, nazwy projektów, etykiety. Hanken Grotesk: treść i UI.
Fraunces: wstęp edytorski i cytaty. Fonty ładować raz przez link HTML albo hosting
własnych plików, nie jednocześnie przez link i CSS @import.

| Styl Figma | Rodzina / waga | Mobile px/lh | Tablet px/lh | Desktop px/lh | Tracking |
|---|---|---|---|---|---|
| Display/XL | Archivo 700 | 48/48 | 80/80 | 120/120 | -2% |
| Display/L | Archivo 700 | 40/42 | 56/59 | 72/76 | -1.5% |
| Display/M | Archivo 600 | 28/31 | 36/40 | 44/48 | -1% |
| Editorial/Headline | Fraunces 500 | 28/34 | 32/38 | 36/43 | 0 |
| Editorial/Intro | Fraunces 400 | 20/28 | 24/34 | 28/39 | 0 |
| Editorial/Subhead | Fraunces 500 | 24/30 | 24/30 | 24/30 | 0 |
| Editorial/Quote | Fraunces italic 400 | 22/31 | 22/31 | 22/31 | 0 |
| Text/Lead | Hanken 400 | 20/31 | 20/31 | 20/31 | 0 |
| Text/Body | Hanken 400 | 16/26 | 16/26 | 16/26 | 0 |
| Text/Small | Hanken 400 | 14/21 | 14/21 | 14/21 | 0 |
| Text/Caption | Hanken 400 | 13/19 | 13/19 | 13/19 | 0 |
| UI/Label | Archivo 600 | 12/16 | 12/16 | 12/16 | 10% |
| UI/Button | Archivo 600 | 14/16 | 14/16 | 14/16 | 1% |

Display oraz UI/Label: uppercase. Przyciski: zwykła pisownia.
Nazwy marek/projektów zachowują pisownię własną, nawet gdy bazują na Display/M.
Treść maksymalnie 65ch, intro 34ch. Nie justować tekstu.
W Figma użyć osobnych stylów dla trzech rozmiarów, nie trybów kolorystycznych do fontów.
CSS pomiędzy punktami referencyjnymi skaluje display płynnie; tabela opisuje
wartości docelowe do komponowania ekranów, nie dokładny wynik każdego `clamp()`.
Fraunces: optical sizing auto w CSS; w Figmie sprawdzić metrykę i łamanie tekstu.

## 4. Przestrzeń, kształty i siatka

Spacing: 4, 8, 12, 16, 24, 32, 48, 64, 96 px. Dopuszczalne drobne wartości:
2 px na odstęp techniczny i obrys, 1 px separator, 12/20 px padding Button/MD.
Nie tworzyć kolejnego tokenu dla każdego pojedynczego wymiaru.

Radius: none 0; sm 8; md 16; lg 24; xl 40; pill 999.
WorkBlock: md 16; CTA: lg 24. xl jest opcją dla jednej dużej powierzchni, nie defaultem.
Kadry case study mogą być prostokątne. Nie zaokrąglać automatycznie screenshotu wewnątrz
już zaokrąglonego bloku. Cienie wyłącznie na popupach: shadow/overlay.

| Parametr | Mobile <768 | Tablet 768–1199 | Desktop ≥1200 |
|---|---|---|---|
| Ekran referencyjny | 390 px | 834 px | 1440 px |
| Kolumny | 4 | 8 | 12 |
| Margines strony | 20 px; 16 px przy ≤359 | 32 px | 48 px |
| Gutter | 16 px | 24 px | 24 px |
| Odstęp sekcji | 64 px | 96 px | 96 px |
| Padding CTA | 24 px | 32 px | 48 px |
| WorkBlock padding | 24 px | 32 px | 32 px |

Kontener maksymalnie 1440 px treści, wyśrodkowany. Brak blokady wysokości ekranu.
Hero: intro u góry, nazwisko poniżej z dużą przerwą 48–96 px; opcjonalny portret
po prawej na desktopie. Na mobile kolejność DOM: rola, intro, portret, nazwisko, CTA.
Portret opcjonalny, nie zastępować go wygenerowaną osobą.

Selected work: desktop moduł 8+4, kolejny 4+8 albo projekt pełnej szerokości;
tablet 4+4, projekt główny może zajmować 8; mobile pojedyncza kolumna.
Nie stosować `grid-auto-flow: dense` ani przestawiania kolejności CSS względem DOM.
Nieparzysty ostatni projekt może zajmować cały wiersz — to celowa kompozycja.
Na mobile wszystkie kadry wracają do 4:3; wysokość całego kafla rośnie z treścią.

## 5. Komponenty i kontrakt Figma

Każdy komponent: Auto Layout, opis zastosowania, powiązanie kolorów z Variables.
Teksty: Hug height. Rodzice: Fill container tam, gdzie treść ma się rozszerzać.
Stany fokusowe nie zmieniają geometrii komponentu.

### Button

Properties: Appearance=Primary/Secondary/Warm/Outline/Ghost;
Size=MD/LG; State=Default/Hover/Pressed/Disabled; Focused=True/False;
Label=text; Trailing icon=boolean. Nie produkować nieużywanych kombinacji ikon.
MD: min-height 44, padding 12×20; LG: min-height 48, padding 16×24.
Stan Hover: underline etykiety, bez unoszenia. Pressed: podkreślenie grubsze.
Focused: wewnętrzny biały pierścień 2 px + zewnętrzny ciemny 2 px; oba poza obrysem.
Disabled: opacity .5, brak reakcji hover/pressed. Nie używać disabled dla zwykłej nawigacji.
Link do projektu lub kontaktu jest `<a href>`, akcja jest `<button type="button">`.
Jedno główne CTA na sekcję; etykieta ma opisywać czynność, np. „Zobacz case study”.

### WorkBlock

Properties: Tone=Butter/Breeze/Cocoa/Paper; Format=Landscape/Portrait/Wide;
State=Default/Hover/Pressed; Focused=boolean; Image=instance swap;
Title, Discipline, Year, Index=text.
Budowa pionowa: Meta → Media → Title → Link label. Wszystkie części w przepływie,
bez absolutnych podpisów kolidujących z długim tytułem.
Media ratio: Landscape 4:3, Portrait 3:4, Wide 16:9.
Format dotyczy kadru, nie wymusza wysokości całego komponentu.
„Zobacz projekt ↗” widoczne stale na klawiaturze, myszy i dotyku.
Hover podkreśla tytuł. Pressed pogrubia podkreślenie. Bez filtra na całym kaflu.
Cały kafel jest jednym linkiem; nie umieszczać zagnieżdżonych przycisków.
Obraz dekoracyjny dublujący nazwę: alt=""; istotny obraz ma zwięzły opis.

### Hero / Nameplate

Properties: Viewport=Mobile/Tablet/Desktop; Portrait=boolean.
Rola, Intro, Name, CTA jako właściwości treści. Jedno H1. Bez sztywnej wysokości.
Przerwa między intro i nazwiskiem jest częścią kompozycji, nie pustym placeholderem.

### Contact

Properties: Viewport=Mobile/Tablet/Desktop; Action=Secondary/Warm.
Cocoa, podpis `on-brand-muted`, tytuł `on-dark`, przycisk Breeze lub Butter.
Adres e-mail jako widoczny i zaznaczalny link. Na mobile układ pionowy.
Bez obietnic „zbudujmy coś niesamowitego”; konkretny nagłówek „Porozmawiajmy o projekcie”.

### Tag

Tone=Neutral/Butter/Breeze/Cocoa. Tylko informacyjny, bez stanów interakcji.
Nie używać jako filtra bez osobnego kontraktu: selected, focus i semantyki przycisku.

### ColorSwatch

Komponent dokumentacyjny biblioteki. Nazwa i HEX, nie niezweryfikowana nazwa Pantone.
Nie wstawiać palety do portfolio, jeśli nie stanowi części danego case study.

## 6. Ruch i dostępność

- Ruch jest opcjonalny. Żadnych wejść od opacity 0, scroll hijack ani custom cursor.
- Czas mikrointerakcji 120 ms, ease-out; reduced-motion wyłącza transition i animation.
- Fokus: dwukolorowy pierścień, aby działał również na kolorowych polach.
  Żaden rodzic nie może go ucinać przez overflow hidden; klipować wyłącznie Media.
- Kontrast tekstu minimum 4.5:1; duży tekst minimum 3:1. Obrysy niezbędne dla UI 3:1.
- Projektowe minimum celu 44×44 px; zwykłe linki w akapicie pozostają inline.
- Zoom, długie polskie nazwy i szerokość 320 px nie mogą ucinać treści.
- Motyw: data-theme light/dark na html; bez atrybutu preferencja systemowa.
  Kontrolka wyboru motywu musi mieć nazwę i wskazanie aktualnego wyboru.
- Brak automatycznej karuzeli i migających elementów.
- Oprócz kolorów sprawdzić HTML, kolejność fokusu i nazwy linków przy wdrożeniu.

Podstawa: [WCAG contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html),
[non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).
Obliczenia w `contrast-report.md` dotyczą par tokenów, nie certyfikacji całego interfejsu.

## 7. Organizacja biblioteki Figma

Pages:
00 Read me — wersja, kierunek, źródła, zasady użycia.
01 Foundations — kolory, typografia, spacing, radius, siatki.
02 Components — komponenty i wszystkie wspierane stany.
03 Compositions — Hero, Work selection, Contact; 390 / 834 / 1440 px.
04 QA — stresowe treści, Light/Dark, focus, zestawienia kontrastu.

Variables:
- Primitives: niezmienne wartości kolorów, spacing i radius, jeden tryb.
- Semantic color: Light / Dark, aliasy do Primitives zgodne z tabelą.
- Layout: Mobile / Tablet / Desktop dla marginesów, gutterów i odstępów.
- Nie łączyć viewportu i motywu w sześć trybów jednej kolekcji.
- Fonty i kompletne zestawy typograficzne jako Text Styles.
- Efekt shadow/overlay jako Effect Style, brak shadow/card.

Na każdej kompozycji pokazać prawdziwą treść albo jawnie oznaczony materiał testowy.
Nie tworzyć fikcyjnych wyników i historii klienta.

## 8. Zamknięcie audytu 0.1 → 0.2

- Poprawione kolory statusów i tekst drugorzędny na cocoa; usunięte opacity podpisów.
- Dodany Butter/Warm Button, Pressed oraz neutralizacja Hover dla Disabled.
- Etykiety ujednolicone do Archivo, display do uppercase; nazwy projektów zachowują zapis.
- CTA projektu stale widoczne, reduced-motion wdrożone, fokus dwukolorowy.
- WorkBlock przebudowany na przepływ treści z osobnym kadrem obrazu.
- Dopisana responsywność i rozdział kolorów dekoracyjnych od funkcjonalnych.
- Siatka kropek zdegradowana do opcjonalnego detalu; usunięte sugestie kopiowania znaku.
- Dodane zasady narracji, materiałów projektowych i ograniczania powtarzalnych kart.

Przed uznaniem biblioteki za gotową: zbudować i obejrzeć ekrany w Figmie w obu motywach,
sprawdzić długą nazwę, 3 oraz 5 projektów i wersję bez portretu.
CSS stanowi implementację referencyjną; integracja i wizualna walidacja strony są osobnym etapem.
