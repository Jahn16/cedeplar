import type { Actions } from './$types';
import postgres from 'postgres';
import { env } from '$env/dynamic/private';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const anwers = Object.fromEntries(data.entries());

		const sql = postgres({
			host: env.POSTGRES_HOST,
			database: env.POSTGRES_DB,
			username: env.POSTGRES_USER,
			password: env.POSTGRES_PASSWORD
		});
		const survey = await sql`
            insert into survey
            ${sql(anwers)}
            returning *
            `;
		console.log('Survey submitted:', survey);
	}
} satisfies Actions;
