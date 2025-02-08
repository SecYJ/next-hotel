import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	darkMode: ["class", "[data-mode='dark']"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				// Primary colors
				primary: {
					tint: "#faf7f5",
					"10": "#f7f2ee",
					"40": "#f1eae4",
					"60": "#e1d1c2",
					"80": "#d0b79f",
					"100": "#bf9d7d",
					"120": "#7b6651",
				},
				// Success colors
				success: {
					"10": "#e8fee7",
					"20": "#bcfbbd",
					"100": "#52dd7e",
					"120": "#299f65",
				},
				// Error colors
				error: {
					"10": "#fdecef",
					"20": "#f5ccd1",
					"100": "#da3e51",
					"120": "#c22538",
				},
				// Info colors
				info: {
					"10": "#e6fbfe",
					"20": "#b1effd",
					"100": "#3badef",
					"120": "#1d66ac",
				},
				// Neutral colors
				neutral: {
					bg: "#140f0a",
					"10": "#f9f9f9",
					"40": "#ececec",
					"60": "#909090",
					"80": "#4b4b4b",
				},
				// Custom gray
				"custom-gray": {
					"100": "#f5f7f9",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
		container: {
			center: true,
			padding: "1rem",
		},
	},
	plugins: [animate],
} satisfies Config;
