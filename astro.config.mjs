// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	// Adres tymczasowy. Przed publikacją wpisz tu docelową domenę klienta.
	site: 'https://example.com',
	// One small stylesheet: inlined, so the page does not wait for a second request before it paints.
	build: { inlineStylesheets: 'always' },
});
