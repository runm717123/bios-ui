import { codeToHtml as shikiCodeToHtml } from 'shiki';
export const codeToHtml = async (code: string) => {
	const rawHtml = await shikiCodeToHtml(code, {
		lang: 'svelte',
		theme: 'aurora-x'
	});
	// Add a custom class to <pre> element
	return rawHtml.replace('<pre class="shiki', '<pre class="shiki text-xs p-2 px-3');
};
