import type { Actions } from './$types';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		for (const [key, value] of data.entries()) {
			console.log(`${key}: ${value}`);
		}
	}
} satisfies Actions;
