import type { PageLoad } from './$types';

import questions from '$lib/data/questions.json';

export const load: PageLoad = ({ url }) => {
	const searchParams = url.searchParams;
	return {
		questions: questions,
		playID: searchParams.get('play-id')
	};
};
