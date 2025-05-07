import type { PageLoad, Actions } from './$types';
import songs from '$lib/data/songs.json';
export const load: PageLoad = ({ url }) => {
	const genre = url.searchParams.get('genre');
	return {
		genre: genre,
		rating: {
			popular: songs[genre]['popular']['rating'],
			unpopular: songs[genre]['unpopular']['rating']
		}
	};
};
