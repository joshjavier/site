/**
 * Maps a config of attribute-value pairs to an HTML string
 * representing those same attribute-value pairs.
 * @see {@link https://www.aleksandrhovhannisyan.com/blog/eleventy-image-plugin/#1-creating-a-stringifyattributes-utility}
 */
export default function (attributeMap) {
	return Object.entries(attributeMap)
		.map(([attribute, value]) => {
			if (value === undefined || value === false || value === null) return '';
			return `${attribute}="${value}"`;
		})
		.join(' ');
}
