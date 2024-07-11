import path from 'path';
import eleventyImage from '@11ty/eleventy-img';
import { stringifyAttributes } from "./utils/index.js";

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
export default function (eleventyConfig) {
	eleventyConfig.addAsyncShortcode('favicon', async function faviconShortcode(href) {
		let input = path.resolve(eleventyConfig.dir.input, 'favicon', href);
		let metadata = await eleventyImage(input, {
			formats: ['auto'],
			urlPath: '/',
			outputDir: eleventyConfig.dir.output,
		});

		let icon = Object.values(metadata)[0][0];

		let linkAttributes = stringifyAttributes({
			rel: href.startsWith('apple-touch-icon') ? 'apple-touch-icon' : 'icon',
			href: icon.url,
			type: icon.format === 'svg' && icon.sourceType,
		});

		return `<link ${linkAttributes}>`;
	});
}
