import type { Actions } from './$types';
import { submitSurvey } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const anwers = Object.fromEntries(data.entries()) as { [key: string]: string };
		await submitSurvey(anwers);
		redirect(303, '/end');
	}
} satisfies Actions;
