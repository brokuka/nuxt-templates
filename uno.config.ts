import { defineConfig, presetUno, presetWind, transformerVariantGroup } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
	presets: [
		presetUno(),
		presetAnimations(),
		presetShadcn({
			color: 'blue',
		}),
	],
	content: {
		pipeline: {
			include: [
				// the default
				/\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
				// include js/ts files
				'components/**/*.{js,ts}',
			],
		},
	},
	transformers: [
		transformerVariantGroup(),
	],
})
