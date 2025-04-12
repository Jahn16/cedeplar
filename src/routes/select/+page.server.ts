import type { PageLoad, Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import songs from '$lib/data/songs.json';
export const load: PageLoad = () => {
	return {
		genres: [...new Set(songs.map((obj) => obj.genre))]
	};
};

export const actions = {
	default: async () => {
		redirect(303, '/');
	}
} satisfies Actions;
