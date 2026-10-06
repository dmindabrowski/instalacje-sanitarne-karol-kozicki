// @ts-check
import { defineConfig } from 'astro/config';

// The preview build on GitHub Pages sets both variables (see .github/workflows/pages.yml).
// Without them the site builds for the root of its own domain.
export default defineConfig({
	// Adres tymczasowy. Przed publikacją wpisz tu docelową domenę klienta.
	site: process.env.SITE_URL ?? 'https://example.com',
	base: process.env.BASE_PATH ?? '/',
	// One small stylesheet: inlined, so the page does not wait for a second request before it paints.
	build: { inlineStylesheets: 'always' },
});
