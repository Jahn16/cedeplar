import type { PageLoad, Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import songs from '$lib/data/songs.json';
export const load: PageLoad = () => {
	return {
		genres: Object.keys(songs)
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		redirect(303, `/play?genre=${data.get('genre')}&popularity=${data.get('popularity')}`);
	}
} satisfies Actions;
