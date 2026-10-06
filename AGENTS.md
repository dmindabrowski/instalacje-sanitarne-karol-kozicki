## Projekt

Strona firmowa klienta: Inżynieria Sanitarna Karol Kozicki (Ełk), firma projektowo-wykonawcza od instalacji sanitarnych. Jedna strona w Astro (strona statyczna). Zgłoszenia zmian pisze po polsku osoba nietechniczna. Twoje zadanie to wprowadzić dokładnie tę zmianę, o którą prosi zgłoszenie.

## Gdzie co jest

- `src/data/firma.json`: nazwa, telefon, e-mail, adres, NIP, REGON. Puste pole `telefon` ukrywa numer i przyciski „Zadzwoń".
- `src/data/zakres.json`: tabela „Zakres prac" (`instalacje`: pola `projekt` i `wykonanie` to kolumny tabeli).
- `src/data/wspolpraca.json`: etapy sekcji „Współpraca". Pole `czas` jest opcjonalne; puste nie jest pokazywane. Czas z `"przyklad": true` jest przykładowy: dopóki jest choć jeden, pod etapami widać dopisek „Czasy przykładowe, do potwierdzenia". Po wpisaniu czasu od klienta usuń to pole.
- `src/data/liczby.json`: trzy małe kafelki z liczbami zrealizowanych zleceń nad zdjęciami w sekcji „Realizacje". Pozycja z `"przyklad": true` to liczba przykładowa: dopóki jest choć jedna, pod kafelkami widać dopisek „Liczby przykładowe, do potwierdzenia". Po wpisaniu liczby od klienta usuń to pole. Nie usuwaj dopisku w inny sposób.
- `src/data/realizacje.json`: lista realizacji. Pusta lista pokazuje puste ramki „Realizacje w przygotowaniu".
- `src/assets/realizacje/`: zdjęcia realizacji.
- `src/layouts/Layout.astro`: nagłówek, menu i stopka. W stopce zostaje dopisek „Projekt i realizacja: Solvy.pl".
- `src/pages/index.astro`: treść strony, sekcja po sekcji.
- `src/components/Schemat.astro`: rysunek instalacji w nagłówku strony. Zaakceptowany przez właściciela, nie zmieniaj go bez wyraźnej prośby.
- `logo/`: logo i znak firmy (SVG i PNG, wersja czarna i odwrócona), podgląd w `logo/podglad.html`, opis logo i zasady użycia w `logo/README.md`, księga znaku dla klienta w `logo/Inzynieria-Sanitarna-ksiega-znaku.pdf` (źródło: `logo/ksiega-znaku.html`). Te pliki nie trafiają na stronę.
- `README.md` i `docs/`: opis projektu dla właściciela i klienta (bez szczegółów technicznych) oraz obrazki do niego.
- `.github/workflows/pages.yml`: po każdym wypchnięciu na `main` buduje stronę i publikuje podgląd na GitHub Pages (https://dmindabrowski.github.io/instalacje-sanitarne-karol-kozicki/). Podgląd leży w podkatalogu, dlatego odnośniki w `Layout.astro` zaczynają się od `base`; nie wpisuj ścieżek od `/` na sztywno.
- `src/styles/global.css`: wszystkie style, kolory w zmiennych CSS na górze pliku.
- `public/`: pliki kopiowane bez zmian (favicon, fonty, obrazek do udostępniania).

## Zasady

- Strona jest czarno-biała: czerń, biel i szarości, bez koloru akcentu. Narożniki są proste, bez zaokrągleń.
- Domyślny jest tryb jasny, niezależnie od ustawień systemu. Tryb ciemny włącza odwiedzający przełącznikiem (w nagłówku, na telefonie w stopce); wybór jest pamiętany w przeglądarce. Kolory trybu ciemnego są w `:root[data-theme='dark']`.
- Strona ma być krótka: małe odstępy między sekcjami, bez dużych czarnych płaszczyzn (czarne są tylko przyciski, linie i tekst). Sekcje pod nagłówkiem leżą na dwóch odcieniach szarego papieru (`--paper`, `--paper-2`), białe są karty. Właściciel odrzucił zarówno wersję z czarnymi panelami, jak i całkiem białą.
- Kontakt: po lewej pole na jedno zdanie z przyciskiem „Wyślij" (otwiera gotowy e-mail), wzorowane na solvy-www; po prawej dane firmy w tabelce rysunkowej.
- Sekcja „Współpraca" (kropki z numerami połączone linią) jest wzorowana na solvy-www.
- Zakres prac zostaje tabelą „Projekt / Wykonanie", realizacje trzema równymi ramkami.
- Dane kontaktowe i zakres prac zmieniaj tylko w `src/data/`. Nie wpisuj ich na sztywno w stronie.
- Firma projektuje sieci i przyłącza, ale ich nie wykonuje. Żaden tekst nie może sugerować inaczej.
- Treści pisz po polsku, rzeczowo, w tonie pozostałych tekstów na stronie. Nie dopisuj faktów o firmie (uprawnień, liczby realizacji, obszaru działania), których nie ma w zgłoszeniu ani na stronie.
- Nowa realizacja: zdjęcie do `src/assets/realizacje/` i wpis w `realizacje.json` z polami `nazwa`, `opis`, `obraz` (nazwa pliku), `alt` (opis zdjęcia).
- Nie dodawaj zależności npm, frameworków ani zewnętrznych skryptów, chyba że zgłoszenie wprost o to prosi.
- Zmieniaj tylko to, czego dotyczy zgłoszenie.
- Przed zakończeniem uruchom `npm run build`. Build musi przejść bez błędów.

## Gdy zgłoszenie jest niejasne albo za duże

- Jeśli nie wiadomo, o co chodzi, albo brakuje danych, nie zgaduj. Zadaj pytanie i nie wprowadzaj zmian.
- Sklep, logowanie, rezerwacje online i integracje z zewnętrznymi systemami są poza zakresem.
