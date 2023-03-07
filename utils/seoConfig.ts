// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://example.com", // Change this to your production URL.
	description:
		"Measure Master is a client management app specifically designed for Tailors/Faishon Designers.", // Change this to be your website's description.
	type: "website",
	image: {
		url: "/favicons/favicon-310x310.png", // Change this to your website's thumbnail.
		alt: "Measure Master - Stitched to Fit", // Change this to your website's thumbnail description.
		width: 310,
		height: 310
	},
	siteName: "Measure Master", // Change this to your website's name,
	twitter: {
		card: "summary_large_image"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Measure Master", // Change this to your website's name.
	short_name: "Measure Master", // Change this to your website's short name.
	description:
		"Measure Master is a client management app specifically designed for Tailors/Faishon Designers.", // Change this to your websites description.
	theme_color: "#30E130", // Change this to your primary color.
	background_color: "#ffffff", // Change this to your background color.
	display: "minimal-ui",
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-310x310.png",
			sizes: "310x310",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-310x310.png",
			sizes: "310x310",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}
