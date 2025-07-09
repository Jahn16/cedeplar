import postgres from 'postgres';
import { env } from '$env/dynamic/private';

const sql = postgres({
	host: env.POSTGRES_HOST,
	database: env.POSTGRES_DB,
	username: env.POSTGRES_USER,
	password: env.POSTGRES_PASSWORD
});

export async function submitSurvey(anwers: { [key: string]: string }) {
	try {
		const survey = await sql`
            insert into survey
            ${sql(anwers)}
            returning *
        `;
		console.log('Survey submitted:', survey);
	} catch (error) {
		console.error('Error submitting survey:', error);
		throw error;
	}
}

export async function savePlayData(play): Promise<string> {
	type Play = {
		id: string;
	};

	let plays: Play[];
	try {
		plays = await sql<Play[]>`
            insert into plays
            ${sql(play)}
            returning id
        `;
	} catch (error) {
		console.error('Error saving play data:', error);
		throw error;
	}
	if (!plays.length) {
		console.error('No play data returned from database');
		throw new Error('No play data returned from database');
	}
	console.log('Play data saved with ID:', plays);
	return plays[0].id;
}
