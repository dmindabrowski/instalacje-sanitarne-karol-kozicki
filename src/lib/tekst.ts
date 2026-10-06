const NBSP = String.fromCharCode(0xa0);

/**
 * Polish typography: a one-letter word (a, i, o, u, w, z) must not end a line,
 * so the space after it becomes a non-breaking one. The lookbehind lets two such
 * words in a row ("i z góry") both be caught.
 */
export function t(tekst: string): string {
	return tekst.replace(/(?<=^|[\s(„])([aiouwzAIOUWZ]) /g, `$1${NBSP}`);
}

/** "+48 600 100 200" -> "tel:+48600100200" */
export function telHref(telefon: string): string {
	return `tel:${telefon.replace(/[^\d+]/g, '')}`;
}
