# Elemental 0.2 — kontrast tokenów

Obliczenia sRGB według luminancji względnej WCAG. Tekst przy opacity 1.
Zakres: wskazane pary kolorów, bez renderowania ekranów i bez oceny całej zgodności WCAG.

| Motyw | Tekst / tło | Kontrast | Próg | Wynik |
|---|---|---:|---:|---|
| Light | ink / surface-cream | 11,98:1 | 4,5:1 | PASS |
| Light | ink-muted / surface-cream | 5,04:1 | 4,5:1 | PASS |
| Light | positive / surface-cream | 5,88:1 | 4,5:1 | PASS |
| Light | caution / surface-cream | 5,74:1 | 4,5:1 | PASS |
| Light | critical / surface-cream | 6,01:1 | 4,5:1 | PASS |
| Light | border-control / surface-cream | 5,04:1 | 3:1 | PASS |
| Light | accent / surface-cream | 4,87:1 | 3:1 | PASS |
| Light | ink / surface-paper | 13,31:1 | 4,5:1 | PASS |
| Light | ink-muted / surface-paper | 5,60:1 | 4,5:1 | PASS |
| Light | positive / surface-paper | 6,53:1 | 4,5:1 | PASS |
| Light | caution / surface-paper | 6,38:1 | 4,5:1 | PASS |
| Light | critical / surface-paper | 6,67:1 | 4,5:1 | PASS |
| Light | border-control / surface-paper | 5,60:1 | 3:1 | PASS |
| Light | accent / surface-paper | 5,41:1 | 3:1 | PASS |
| Light | ink / surface-mist | 10,76:1 | 4,5:1 | PASS |
| Light | ink-muted / surface-mist | 4,53:1 | 4,5:1 | PASS |
| Light | positive / surface-mist | 5,28:1 | 4,5:1 | PASS |
| Light | caution / surface-mist | 5,16:1 | 4,5:1 | PASS |
| Light | critical / surface-mist | 5,39:1 | 4,5:1 | PASS |
| Light | border-control / surface-mist | 4,53:1 | 3:1 | PASS |
| Light | accent / surface-mist | 4,38:1 | 3:1 | PASS |
| Light | on-light / butter | 10,38:1 | 4,5:1 | PASS |
| Light | on-light / breeze | 8,17:1 | 4,5:1 | PASS |
| Light | on-dark / cocoa | 9,38:1 | 4,5:1 | PASS |
| Light | on-brand-muted / cocoa | 7,10:1 | 4,5:1 | PASS |
| Dark | ink / surface-cream | 13,93:1 | 4,5:1 | PASS |
| Dark | ink-muted / surface-cream | 6,91:1 | 4,5:1 | PASS |
| Dark | positive / surface-cream | 7,61:1 | 4,5:1 | PASS |
| Dark | caution / surface-cream | 9,59:1 | 4,5:1 | PASS |
| Dark | critical / surface-cream | 6,58:1 | 4,5:1 | PASS |
| Dark | border-control / surface-cream | 6,91:1 | 3:1 | PASS |
| Dark | accent / surface-cream | 7,76:1 | 3:1 | PASS |
| Dark | ink / surface-paper | 12,60:1 | 4,5:1 | PASS |
| Dark | ink-muted / surface-paper | 6,25:1 | 4,5:1 | PASS |
| Dark | positive / surface-paper | 6,88:1 | 4,5:1 | PASS |
| Dark | caution / surface-paper | 8,68:1 | 4,5:1 | PASS |
| Dark | critical / surface-paper | 5,95:1 | 4,5:1 | PASS |
| Dark | border-control / surface-paper | 6,25:1 | 3:1 | PASS |
| Dark | accent / surface-paper | 7,02:1 | 3:1 | PASS |
| Dark | ink / surface-mist | 11,27:1 | 4,5:1 | PASS |
| Dark | ink-muted / surface-mist | 5,59:1 | 4,5:1 | PASS |
| Dark | positive / surface-mist | 6,16:1 | 4,5:1 | PASS |
| Dark | caution / surface-mist | 7,76:1 | 4,5:1 | PASS |
| Dark | critical / surface-mist | 5,33:1 | 4,5:1 | PASS |
| Dark | border-control / surface-mist | 5,59:1 | 3:1 | PASS |
| Dark | accent / surface-mist | 6,28:1 | 3:1 | PASS |
| Dark | on-light / butter | 10,38:1 | 4,5:1 | PASS |
| Dark | on-light / breeze | 8,75:1 | 4,5:1 | PASS |
| Dark | on-dark / cocoa | 5,81:1 | 4,5:1 | PASS |
| Dark | on-brand-muted / cocoa | 4,96:1 | 4,5:1 | PASS |

Fokus ma dwie stałe barwy: #fcfaf2 oraz #332a2d. Wymaga sprawdzenia widoczności i braku clippingu w docelowych kompozycjach.
Źródło metodologii: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
