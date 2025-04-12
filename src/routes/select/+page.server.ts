import type { PageLoad } from './$types';
import songs from '$lib/data/songs.json';
export const load: PageLoad = () => {
	return {
		genres: [...new Set(songs.map((obj) => obj.genre))]
	};
};
