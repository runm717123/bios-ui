import { codeToHtml as shikiCodeToHtml } from 'shiki';
export const codeToHtml = (code: string) => {
	return shikiCodeToHtml(code, {
		lang: 'svelte',
		theme: 'aurora-x'
	});
};
