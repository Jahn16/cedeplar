import type { PageLoad } from './$types';

import questions from '$lib/data/questions.json';

export const load: PageLoad = ({ url }) => {
	const searchParams = url.searchParams;
	return {
		questions: questions,
		popularity: searchParams.get('popularity'),
		popularRating: searchParams.get('prating'),
		unpopularRating: searchParams.get('urating')
	};
};
