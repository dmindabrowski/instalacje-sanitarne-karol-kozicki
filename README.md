# kozicki-www

Strona firmowa: Inżynieria Sanitarna Karol Kozicki, Ełk. Jedna strona w Astro, czarno-biała.

## Lokalnie

```sh
npm install
npm run dev      # podgląd na http://localhost:4323
npm run build    # zbudowana strona w dist/
```

## Dodawanie realizacji

1. Zdjęcie (jpg, png albo webp) zapisz w `src/assets/realizacje/`.
2. W `src/data/realizacje.json` dopisz wpis:

```json
[
	{
		"nazwa": "Dom jednorodzinny, Ełk",
		"opis": "Projekt i wykonanie instalacji wod-kan i c.o.",
		"obraz": "dom-elk.jpg",
		"alt": "Kotłownia z kotłem gazowym i rozdzielaczem ogrzewania podłogowego."
	}
]
```

Dopóki lista jest pusta, sekcja pokazuje puste ramki „Realizacje w przygotowaniu". Po pierwszym wpisie znikają.

## Przed publikacją

- [ ] Telefon: pole `telefon` w `src/data/firma.json` jest puste. Po wpisaniu numer pojawi się w nagłówku i w sekcji Kontakt.
- [ ] E-mail, adres, NIP i REGON potwierdzić z klientem. Pochodzą z wpisu CEIDG, a nie ze strony GoWork (blokuje automatyczne pobieranie).
- [ ] Domena: `site` w `astro.config.mjs` (teraz `https://example.com`), potem dodać `public/robots.txt` i `public/sitemap.xml`.
- [ ] Realizacje: zdjęcia i opisy od klienta.
- [ ] Liczby zleceń: wartości w `src/data/liczby.json` są przykładowe (pole `"przyklad": true`) i strona pokazuje pod nimi dopisek „Liczby przykładowe, do potwierdzenia". Wpisać liczby od klienta i usunąć to pole przy każdej pozycji; dopisek zniknie sam.
- [ ] Współpraca: etapy w `src/data/wspolpraca.json` to ogólny szkic, a czasy są przykładowe (pole `"przyklad": true`, na stronie dopisek „Czasy przykładowe, do potwierdzenia"). Potwierdzić z klientem kolejność, treść i czasy, potem usunąć to pole.

## Logo

Katalog `logo/`: `logo.svg` i `znak.svg` (czarne), `logo-odwrocone.svg` i `znak-odwrocony.svg` (na ciemne tło), każdy także jako PNG. Napis w logo jest zamieniony na krzywe, więc pliki nie wymagają fontu. Podgląd: `logo/podglad.html`.

## Fonty

IBM Plex Sans i IBM Plex Mono, licencja SIL Open Font License 1.1 (`public/fonts/LICENSE.txt`).
