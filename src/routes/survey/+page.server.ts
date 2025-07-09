import type { Actions } from './$types';
import { submitSurvey } from '$lib/server/db';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const anwers = Object.fromEntries(data.entries()) as { [key: string]: string };
		await submitSurvey(anwers);
	}
} satisfies Actions;
