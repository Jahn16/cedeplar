import type { Actions } from './$types';
import { savePlayData } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const playData = Object.fromEntries(formData.entries()) as { [key: string]: string };
		console.log('Play data received:', playData);

		const playID = await savePlayData(playData);
		redirect(303, `/survey?play-id=${playID}`);
	}
} satisfies Actions;
