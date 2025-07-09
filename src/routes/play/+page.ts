import type { PageLoad } from './$types';
import songs from '$lib/data/songs.json';

export const load: PageLoad = ({ url }) => {
	return {
		genre: url.searchParams.get('genre'),
		popularity: url.searchParams.get('popularity'),
		songs: songs
	};
};
